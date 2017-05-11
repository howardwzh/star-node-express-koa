<template>
  <div class="list">
    <h1>{{ detail.title }}</h1>
    <article>
      {{ detail.content }}
    </article>
  </div>
</template>

<script>
import articleApi from 'api/article'

export default {
  name: 'articleDetail',
  data () {
    return {
      detail: {}
    }
  },
  created () {
    articleApi.getArticleDetail(this.$route.params.id)
      .then((res) => {
        console.log(res)
        this.$data.detail = res.data
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
