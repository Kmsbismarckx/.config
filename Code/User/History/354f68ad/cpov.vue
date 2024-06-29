<template>
  <div>
    <h1>Страница с постами</h1>
    <MyInput v-model="searchQuery" placeholder="Search..." v-focus></MyInput>
    <div class="app__btns">
      <my-button @click="showDialog">Создать</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>
    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost"></post-form>
    </my-dialog>
    <PostList v-if="!isPostsLoading" :posts="sortedAndSearchedPosts" @remove='removePost'></PostList>
    <div v-else>Loading ...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!--    <div class="page__wrapper" :key="page">-->
    <!--      <div-->
    <!--          class="page"-->
    <!--          :class="{-->
    <!--            'current-page': pageNumber === page,-->
    <!--          }"-->
    <!--          v-for="pageNumber in totalPages"-->
    <!--          @click="changePage(pageNumber)"-->
    <!--      >-->
    <!--        {{pageNumber}}-->
    <!--      </div>-->
    <!--    </div>-->
  </div>

</template>

<script>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import MyInput from '@/components/UI/MyInput.vue'
import axios from 'axios';
import {ref} from 'vue'

const posts = ref([]);
const dialogVisible = ref(false);

function createPost(post) {
  posts.value.push(post);
  dialogVisible.value = false
}

function removePost(postToDelete) {
  posts.value = posts.value.filter(post => post.id !== postToDelete.id)
}

export default {
  components: {
    PostForm,
    PostList,
    MyInput
  },
  data() {
    return {
      isPostsLoading: false,
      selectedSort: '',
      searchQuery: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {
          value: 'title', name: 'By name',
        },
        {
          value: 'body', name: 'By value',
        },
      ]
    }
  },
  methods: {
    ,
    showDialog() {
      this.dialogVisible = true;
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber
    // },
    async fetchPosts() {
      try {
        this.isPostsLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {_page: this.page, _limit: this.limit}
        })
        this.totalPages = Math.ceil(response.headers.get('x-total-count')) / this.limit
        this.posts = response.data;
      } catch (e) {
        alert('Alarm error')
      } finally {
        this.isPostsLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {_page: this.page, _limit: this.limit}
        })
        this.totalPages = Math.ceil(response.headers.get('x-total-count')) / this.limit
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert('Alarm error')
      } finally {
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // }
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((a, b) => {
        return a[this.selectedSort]?.localeCompare(b[this.selectedSort])
      })
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
}
</script>

<style>


.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.page__wrapper {
  display: flex;
  gap: 8px;
  margin-top: 15px;
}
.page {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  padding: 4px 8px;
  width: 40px;
  height: 40px;
  cursor: pointer;
}
.current-page {
  border:  2px solid teal;
}

.observer {
  height: 20px;
  background-color: red;
}
</style>