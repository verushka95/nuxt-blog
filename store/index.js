import axios from 'axios'
import Cookie from 'js-cookie'

export const state = () => ({
    postsLoaded: [],
    token: null
})

export const mutations = {
    SET_POSTS ( state, posts) {
        state.postsLoaded = posts
    },
    ADD_POST (state, post) {
        state.postsLoaded.push(post)
    },
    EDIT_POST ( state, postEdit) {
        const postIndex = state.postsLoaded.findIndex(post => post.id === postEdit.id)
        state.postsLoaded[postIndex] = postEdit
    },
    SET_TOKEN ( state, token) {
        state.token = token
    },
    DESTROY_TOKEN ( state ) {
        state.token = null
    }
}
export const actions = {
    nuxtServerInit ({commit}, context) {
        return axios.get('https://blog-nuxt-747f6-default-rtdb.firebaseio.com/posts.json')
        .then (res => {
            const postsArray = []
            for (let key in res.data) {
                postsArray.push( { ...res.data[key], id: key} )
            }
            // result
           commit('SET_POSTS', postsArray )  
        })
        .catch(e => console.log(e))
    },
    authUser ({commit}, authData) {
        const key = 'AIzaSyA1RsyUu6wwQo5_F1Judh5LbprsixGAulM'
        return axios.post(`https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${key}`, {
            email: authData.email,
            password: authData.password,
            returnSecureToken: true
        })
            .then(res => { 
                let token = res.data.idToken
                commit('SET_TOKEN', token)
                // to local storage
                localStorage.setItem('token', token)
                // to cookie
                Cookie.set('jwt', token)
            })
            .catch(e => console.log(e))
    },
    initAuth ({commit}, req) {
        let token

        // если сервер
        if (req) {
            if (!req.headers.cookie) return false
            
            const jwtCookie = req.headers.cookie
                .split(';')
                .find(t => t.trim().startsWith('jwt='))
            token = jwtCookie.split('=')[1]
            if (!token) return false
        } else {
            token = localStorage.getItem('token');
            if (!token) return false
        }
        commit('SET_TOKEN', token)
    },
    logoutUser ({commit}) {
        commit('DESTROY_TOKEN')
        localStorage.removeItem('token')
        Cookie.remove('jwt')
    },
    addPost ({commit}, post) {
       return axios.post('https://blog-nuxt-747f6-default-rtdb.firebaseio.com/posts.json', post)
        .then (res => {
            commit('ADD_POST', { ...post, id: res.data.name })  
        })
        .catch(e => console.log(e))
    },
    editPost ({commit, state}, post) {
        return axios.put(`https://blog-nuxt-747f6-default-rtdb.firebaseio.com/posts/${post.id}.json?auth=${state.token}`, post)
            .then(res => {
                commit('EDIT_POST', post)
            })
            .catch(e => console.log(e))
    },
    addComment ( {commit}, comment) {
        return axios.post('https://blog-nuxt-747f6-default-rtdb.firebaseio.com/comments.json', comment)
        .catch(e => console.log(e))
    }
}

export const getters = {
    getPostsLoaded (state) {
        return state.postsLoaded
    },
    checkAuthUser (state) {
        return state.token != null
    }
}