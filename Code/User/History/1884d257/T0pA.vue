<template>
    <div class="app">
        <post-form @create="createPost"></post-form>
        <post-list :posts="posts" ></post-list>
    </div>    

</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'

export default {
    components: {
        PostForm, 
        PostList
    },
    data() {
        return {
            posts: [
                {id: 1, title: 'JS', body: 'description'},
                {id: 2, title: 'JS', body: 'description'},
                {id: 3, title: 'JS', body: 'description'},
            ],
        
        }
    },
    methods: {
        createPost(post) {
            console.log(post);
        }
    }
}
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .app {
        padding: 20px;
    }

    .post {
        padding: 15px;
        border: 2px solid teal;
        margin-top: 15px;
    }

    
</style>