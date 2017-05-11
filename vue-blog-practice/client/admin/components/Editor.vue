<template>
  <div class="editor">
    <el-input class="input" v-model="article.title" placeholder="请输入标题"></el-input>
    <el-input
      class="input"
      type="textarea"
      :rows="8"
      placeholder="请输入内容"
      v-model="article.content">
    </el-input>
    <el-button class="button" type="primary" @click="save">保存</el-button>
  </div>
</template>

<script>
import articleApi from 'api/article'
import Bus from '../bus.js'

export default {
  data () {
    return {
      article: {}
    }
  },
  created () {
    Bus.$on('getArticle', id => {
      this.getArticle(id)
    })
  },
  methods: {
    getArticle (id) {
      articleApi.getArticleDetail(id).then((res) => {
        this.$data.article = res.data
      })
    },
    save () {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.editor {
  .input {
    margin-bottom: 12px;
  }
  .button {
  }
}
</style>
