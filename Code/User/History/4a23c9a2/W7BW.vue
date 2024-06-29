<template>
    <div class="post">
        <div>
            <div>Название: <strong></strong>{{ post.title }}</div>
            <div>Описание: <strong></strong>{{ post.title }}</div>
        </div>
        <div class="post__btns">
            <button>Удалить</button>
            <button>Изменить</button>
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
<style></style>