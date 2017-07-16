
<template>
  <div class="container">
    
    <div class="row">
        <img  class="center-block" src="../../../assets/logo.png">
        <div class="col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2 col-xs-10 col-xs-offset-1 login-form">
            
            <div class="panel-body">
                <div class="row">
                    <div class="col-xs-12">
                        <form id="authentication" method="post" class="login_validator">
                            <div class="form-group">
                                <label for="email" class="sr-only">userName</label>
                                <input type="text" class="form-control  form-control-lg" id="username" name="username"
                                       placeholder="请输入账号" v-model="user.username">
                            </div>
                            <div class="form-group">
                                <label for="password" class="sr-only">Password</label>
                                <input type="password" class="form-control form-control-lg" id="password"
                                       name="password" placeholder="请输入密码" v-model="user.password">
                            </div>
                            <div class="form-group">
                                <input value="Sign In" class="btn btn-primary btn-block" v-on:click="handleLogin()"/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import {login} from "../../api/api";
import * as types from "@/store/type"
export default {
  name: 'login',
  data () {
    return {
      user : {
        username : '',
        password : ''
      }
    }
  },
  methods:{
    handleLogin:function(){
      var loginParams = { username : this.user.username, password : this.user.password};
      login(loginParams).then(data => {
          if(data.code == 10000 && data.data.uid && data.data.sid ){
            this.$store.commit(types.LOGIN, {sid:data.data.sid,uid:data.data.uid,img:data.data.img})
            this.$router.push({
              path: 'dashboard',
              query:{img:data.data.img,
              name:data.data.name,
              menus:data.data.menus}//data.data.img}
            })
          }else{
            if(data.message){
              alert(data.message)  
            }
          }
      });
    }
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
