<template>
    <div class="wrapper-content wrapper-content--fixed">
        <post :post="post" />
        <comments :comments="comments" />
        <newComment :postId="$route.params.id" />
    </div>
</template>

<script>
import axios from 'axios'

import post from "@/components/Blog/Post.vue"
import newComment from "@/components/Comments/NewComment.vue"
import comments from "@/components/Comments/Comments.vue"

export default {
    components: { post, comments, newComment },
    head () {
        let title = this.post.title,
            descr = this.post.descr,
            img = `site.com/${this.post.img}`,
            type = 'article'

        return {
            title: title,
            meta: [
                { hid: 'description', name: 'description', content: descr},
                { hid: 'og:description', name: 'og:description', content: descr},
                { hid: 'og:title', name: 'og:title', content: title},
                { hid: 'og:type', name: 'og:type', content: type},
                { hid: 'og:img', name: 'og:img', content: img},
            ]
        }
    },
    async asyncData (context) {
        let [ post, comments ] = await Promise.all([
            axios.get(`https://blog-nuxt-747f6-default-rtdb.firebaseio.com/posts/${context.params.id}.json`),
            axios.get(`https://blog-nuxt-747f6-default-rtdb.firebaseio.com/comments.json`),
        ])

        if (!comments.data) { comments.data = {}; }
        
        let postComments = Object
            .values(comments.data)
                .filter(comment => 
                    (comment.postId === context.params.id) && comment.publish);


        return {
            post: post.data,
            comments: postComments
        }
    }
}
</script>

<style lang="scss">
.post {
    max-width: 900px;
    margin: 0 auto;
}
.post-header {
    text-align: center;
    margin-bottom: 30px;
    img {
        max-width: 400px;
        margin-bottom: 16px;
    }
    p {
        color: #999;
    }
}
.post-body {
    text-align: left;
}
</style>