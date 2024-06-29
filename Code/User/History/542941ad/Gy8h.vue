<template>
    <div class="post" v-for="post in posts">
            <div>Название: <strong></strong>{{ post.title }}</div>
            <div>Описание: <strong></strong>{{ post.title }}</div>
        </div>
</template>
<script>
export default {

}
</script>
<style scoped> 
    .post {
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }
</style>