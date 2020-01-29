<template>
  <div id="app">
    <div class="wrapper">
      <div class="option">
        <h1>Option API</h1>
        <posts-list-option></posts-list-option>
      </div>
      <div class="composition">
        <h1>Composition API</h1>
        <posts-list-composition></posts-list-composition>
      </div>
    </div>
  </div>
</template>

<script>
import PostsListOption from "@/components/PostsListOption";
import PostsListComposition from "@/components/PostsListComposition";
export default {
  name: "app",
  components: {
    PostsListComposition,
    PostsListOption
  }
};
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  text-align: center;
  color: #4a5568;
  padding-top: 60px;
  background: #f7fafc;
  min-height: 100vh;
}

.wrapper {
  display: flex;
  justify-content: space-around;
  max-width: 64rem;
  margin: 0 auto;
}

h1 {
  font-size: 3rem;
  font-weight: 700;
  color: #cbd5e0;
}
</style>
