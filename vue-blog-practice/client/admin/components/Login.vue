<template>
  <div class="login">
    <h1>登录</h1>
    <div class="form-box">
      <el-input class="input" placeholder="用户名" v-model="userName"></el-input>
      <el-input class="input" placeholder="密  码" v-model="userPwd"></el-input>
      <el-button class="button" type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>

<script>
import loginApi from 'api/login'

export default {
  name: 'Login',
  data () {
    return {
      userName: '',
      userPwd: ''
    }
  },
  created () {
  },
  methods: {
    login () {
      const self = this
      loginApi.login(self.$data.userName, self.$data.userPwd)
        .then((res) => {
          if (res.data.length) {
            self.$router.push('admin')
          }
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.login {
  .form-box {
    width: 80%;
    margin: 0 auto;
  }
  input {
    margin-top: 15px;
  }
  button {
    margin-top: 20px;
  }
}
</style>
