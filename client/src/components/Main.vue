<template>
  <main class="main">
    <div>
      <button type="button" class="btn btn-info" @click="refresh">
        Refresh
      </button>
      <form @submit.prevent="postMessage" class="form">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="name" />
        </div>
        <div class="form-group">
          <label for="text">Text</label>
          <textarea
            class="form-control"
            name=""
            id="text"
            v-model="text"
          ></textarea>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <div class="message">
      <div v-for="post in posts" :key="post.id" class="card">
        <div class="card-body">
          <p>{{ post.name + ":" }}</p>
          <p>{{ post.text }}</p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import PostService from "../services/PostService.js";
export default {
  name: "HelloWorld",
  data() {
    return {
      posts: [],
      name: "",
      text: "",
    };
  },
  created() {
    this.loadData();
  },
  methods: {
    postMessage() {
      const message = {
        name: this.name,
        text: this.text,
      };
      PostService.postPost(message).then(this.posts.unshift(message));
    },
    refresh() {
      this.loadData();
    },
    loadData(){
      PostService.getPosts().then((response) => {
        this.posts = response.data;
      });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.main {
  display: flex;
}
.btn-info {
  margin-left: 20px;
}
.form {
  min-width: 320px;
  padding: 20px;
  input {
    margin-bottom: 10px;
  }
  button {
    width: 100%;
  }
}
.message {
  width: 100%;
  margin-top: 20px;
  .card {
    margin: 0 auto;
    max-width: 320px;
  }
}
</style>
