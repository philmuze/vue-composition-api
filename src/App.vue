<template>
  <div id="app">
    <member-list></member-list>
  </div>
</template>

<script>
import MemberList from "@/components/MemberList";
export default {
  name: "app",
  components: {
    MemberList
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
