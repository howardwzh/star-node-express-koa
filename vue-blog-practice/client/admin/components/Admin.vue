<template>
  <div class="admin">
    <h1>{{ title }}</h1>
    <el-row :gutter="20">
      <el-col :span="12">
        <article-list></article-list>
      </el-col>
      <el-col :span="12">
        <editor></editor>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import articleApi from 'api/article'

export default {
  components: {
    ArticleList: require('./ArticleList'),
    Editor: require('./Editor')
  },
  data () {
    return {
      title: '文章编辑',
      articleList: [],
      articleDetail: ''
    }
  },
  created () {
    articleApi.getAllArticles('', '', this.limit)
      .then((res) => {
        this.$data.articleList = res.data
      })
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.admin {
  .left-list {}
}
</style>
