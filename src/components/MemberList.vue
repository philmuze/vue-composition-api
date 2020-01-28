<template>
  <div>
    {{ counter }} von {{ posts.length }} angezeigt
    <ul>
      <li v-for="post in visiblePosts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
    <button @click="incrementCounter">Show more</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Memberlist",
  data() {
    return {
      posts: [],
      isLoading: true,
      counter: 1
    };
  },
  created() {
    this.loadMember();
  },
  computed: {
    visiblePosts() {
      const list = this.posts.filter(post => post.id <= this.counter);
      return list;
    }
  },
  methods: {
    async loadMember() {
      const data = await this.callAPI();
      this.posts = data;
    },
    incrementCounter() {
      this.counter++;
    },
    async callAPI() {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(response);
        return response.data;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
