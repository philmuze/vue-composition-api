<template>
  <div>
    <div class="counter">{{ counter }} von {{ posts.length }} angezeigt</div>
    <ul>
      <li class="card" v-for="post in visiblePosts" :key="post.id">
        <h2>{{ post.title }}</h2>
        <p>{{ post.body }}</p>
      </li>
    </ul>
    <button @click="increaseCounter">Mehr laden</button
    ><button @click="decreaseCounter">Weniger</button>
  </div>
</template>

<script>
import { useDataLoader } from "@/cmp-functions/dataLoader";
import { ref, computed } from "@vue/composition-api";

export default {
  name: "PostListComposition",
  setup() {
    const isLoading = ref(true);
    const counter = ref(1);

    function increaseCounter() {
      counter.value++;
    }

    function decreaseCounter() {
      counter.value--;
    }

    const { posts, loadPosts } = useDataLoader();

    const visiblePosts = computed(() => {
      return posts.value.filter(post => post.id <= counter.value);
    });

    return {
      counter,
      isLoading,
      posts,
      visiblePosts,
      increaseCounter,
      decreaseCounter,
      loadPosts
    };
  },
  mounted() {
    this.loadPosts();
  }
};
</script>

<style lang="scss" scoped>
.card {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
  border-radius: 0.25rem;
  padding: 1rem 1.5rem;
  margin: 1rem auto;
  background-color: #fff;
  max-width: 28rem;
}

h2 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  line-height: 1.625rem;
}

p {
  font-size: 1rem;
  color: #4a5568;
  line-height: 1.625rem;
}

button {
  background-color: #4299e1;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  color: white;
  font-weight: 700;
  margin-right: 1rem;
}
.counter {
  margin: 1.25rem auto;
  color: #a0aec0;
}
</style>
