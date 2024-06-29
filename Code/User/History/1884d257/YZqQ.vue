<template>
    <div class="app">
        <h1>Страница с постами</h1>
        <my-button @click="showDialog" style="margin: 15px 0;">Создать</my-button>
        <my-dialog v-model:show="dialogVisible">
            <post-form @create="createPost"></post-form>
        </my-dialog>
        <post-list :posts="posts" @remove='removePost' ></post-list>
    </div>    

</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import axios from 'axios';

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
            dialogVisible: false,
            modificatorValue: ''
        }
    },
    methods: {
        createPost(post) {
            this.posts.push(post)
            this.dialogVisible = false;
        },
        removePost(postToDelete) {
            this.posts = this.posts.filter(post => post.id !== postToDelete.id)
        },
        showDialog() {
            this.dialogVisible = true;
        },
        async fetchUsers() {
            try {
                const response = await axios
            } catch (e) {
                alert('Alarm error')
            }
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