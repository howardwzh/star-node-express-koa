<template>
  <el-card class="article-list">
    <div class="card" v-for="article in articleList" @click="getArticle(article.id)">{{ article.title }}</div>
  </el-card>
</template>

<script>
import articleApi from 'api/article'
import Bus from '../bus.js'

export default {
  data () {
    return {
      articleList: []
    }
  },
  created () {
    articleApi.getAllArticles().then((res) => {
      this.$data.articleList = res.data
      this.getArticle(res.data[0].id)
    })
  },
  methods: {
    getArticle (id) {
      Bus.$emit('getArticle', id)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.article-list {
  text-align: left;
  .card {
    padding: 8px;
    border-bottom: 1px solid #ddd;
    cursor: pointer;
  }
}
</style>
