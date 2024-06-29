<template>
    <div>
        <h3>Список пользователей</h3>
        <post-item></post-item>
    </div>
</template>
<script>
import PostItem from '@/components/PostItem.vue'
export default {
    components: {
        PostItem
    },
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>
<style scoped> 
    .post {
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }
</style>