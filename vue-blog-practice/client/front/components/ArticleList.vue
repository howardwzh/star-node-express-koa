<template>
  <div class="list">
    <h1>{{ author }}</h1>
    <ul>
      <li v-for="article in articleList">
        <router-link :to="'detail/' + article.id">{{article.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import articleApi from 'api/article'

export default {
  name: 'articleList',
  data () {
    return {
      author: 'xxxxxx博主',
      articleList: []
    }
  },
  created () {
    articleApi.getAllPublishArticles()
      .then((res) => {
        this.$data.articleList = res.data
      })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
