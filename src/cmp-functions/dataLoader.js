import axios from "axios";
import { ref } from "@vue/composition-api";

export const useDataLoader = () => {
  const posts = ref([]);

  const loadPosts = async () => {
    const data = await callAPI();
    posts.value = data;
  };

  async function callAPI() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );
      return response.data;
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  }
  return { posts, loadPosts };
};
