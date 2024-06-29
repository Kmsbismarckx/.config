<template>
    <div class="post">
        <div>
            <div>Название: <strong></strong>{{ post.title }}</div>
            <div>Описание: <strong></strong>{{ post.title }}</div>
        </div>
        <div class="post__btns">
            <my-button>Удалить</my-button>
            <my-button>Изменить</my-button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>
<style scoped>
    .post {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }
</style>