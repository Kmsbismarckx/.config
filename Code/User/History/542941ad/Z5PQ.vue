<template>
    <div v-show="posts.length">
        <h3>Список пользователей</h3>
        <post-item 
            v-for="post in posts" 
            :post="post" :key="post.id" 
            @remove="$emit('remove', post)">
        </post-item>
    </div>
    <h2 v-else>Nothing to show</h2>
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
    
</style>