<template>
    <form @submit.prevent>
        <my-input v-model="post.title" class="input" type="text" placeholder="Название">
        <my-input v-model="post.body" class="input" type="text" placeholder="Описание">
        <my-button style="align-self: flex-end; margin-top: 10px;" @click="createPost">Создать</my-button>        
    </form>
</template>
<script>
export default {
    data() {
        return {
           post: {
                title: '',
                body: ''
           } 
        }
    },
    methods: {
        createPost() {
            this.post.id = Date.now(),
            this.$emit('create', this.post)
            this.post = {
                title: '',
                body: ''
            }
        },
    }

}
</script>
<style scoped>
    form {
        display: flex;
        flex-direction: column;
    }

</style>