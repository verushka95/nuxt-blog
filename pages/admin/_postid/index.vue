<template>
    <newPostForm 
        :postEdit="post"
        @submit="onSubmit" />
</template>

<script>
import axios from 'axios'
import newPostForm from '@/components/Admin/newPostForm.vue'
export default {
    components: { newPostForm },
    layout: 'admin',
    asyncData (context) {
        return axios.get(`https://blog-nuxt-747f6-default-rtdb.firebaseio.com/posts/${context.params.postid}.json`)
            .then ( res => {
                return {
                    post: { ...res.data, id: context.params.postid}
                }
            })
            .catch (e => context.error(e))     
    },
    methods: {
        onSubmit (post) {
            this.$store.dispatch('editPost', post)
                .then(() => {
                    this.$router.push('/admin')
                })
        }
    }
}
</script>