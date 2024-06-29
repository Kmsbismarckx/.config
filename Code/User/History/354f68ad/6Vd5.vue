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

<script setup>
import PostForm from '@/components/PostForm.vue'
import PostList from '@/components/PostList.vue'
import MyInput from '@/components/UI/MyInput.vue'
import axios from 'axios';
import {ref,onMounted, computed} from 'vue';

const posts = ref([]);
const dialogVisible = ref(false);
const isPostsLoading = ref(false);
const totalPages = ref(0);
const page = ref(1);
const limit = ref(10)
const selectedSort = ref('');
const searchQuery = ref('');
const sortOptions = [
  {
    value: 'title', name: 'By name',
  },
  {
    value: 'body', name: 'By value',
  },
]

const sortedPosts = computed(() => {
  return [...posts.value].sort((a, b) => {
    return a[selectedSort.value]?.localeCompare(b[selectedSort.value])
  })
})

const sortedAndSearchedPosts = computed(() => {
  return sortedPosts.value.filter(post => post.title.value.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

function createPost(post) {
  posts.value.push(post);
  dialogVisible.value = false
}

function removePost(postToDelete) {
  posts.value = posts.value.filter(post => post.id !== postToDelete.id)
}

function showDialog() {
  dialogVisible.value = true;
}

async function fetchPosts() {
  try {
    isPostsLoading.value = true;
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {_page: page.value, _limit: limit.value}
    })
    totalPages.value = Math.ceil(response.headers.get('x-total-count')) / limit.value
    posts.value = response.data;
  } catch (e) {
    alert('Alarm error')
  } finally {
    isPostsLoading.value = false;
  }
}

async function loadMorePosts() {
  try {
    page.value += 1;
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {_page: page.value, _limit: limit.value}
    })
    totalPages.value = Math.ceil(response.headers.get('x-total-count')) / limit.value
    posts.value = [...posts.value, ...response.data];
  } catch (e) {
    alert('Alarm error')
  } finally {
  }
}

onMounted(() => {
  fetchPosts()
})
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