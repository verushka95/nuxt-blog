<template>
    <section v-if="comments" class="comments">
        <div class="container">
            <h2 class="title">Comments</h2>
            <p v-if="comments.length == 0">Comments: 0</p>
            <div class="comment" v-for="comment in comments" :key="comment.name">
                <p class="name">{{ comment.name }}</p>
                <p class="text">{{ comment.text }}</p>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        comments: {
            type: Array,
            default: null
        }
    }
}
</script>

<style lang="scss">
.comments {
    text-align: center;
    margin: 30px auto;
}
.comment {
    padding: 20px;
    width: 600px;
    margin-bottom: 20px;
    text-align: center;
    background-color: #fff;
    .name {
        margin-bottom: 12px;
        font-size: 24px;
        color: #5c4de7;
    }
}
</style>