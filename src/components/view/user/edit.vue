
<template>
	<div class="row">
                <div class="col-md-12">
                    <div class="panel panel-primary">
                        <div class="panel-heading">
                            <h3 class="panel-title">
                                <i class="livicon" data-name="user-add" data-size="18" data-c="#fff" data-hc="#fff"
                                   data-loop="true"></i> Edit User
                            </h3>
                            <span class="pull-right">
                                    <i class="fa fa-fw ti-angle-up clickable"></i>
                                    <i class="fa fa-fw ti-close removepanel clickable"></i>
                                </span>
                        </div>
                        <div class="panel-body">
                            <div class="tab-content form-horizontal"> 
                                <h5 >&nbsp;</h5>                           
                                    <div class="form-group">
                                        <label for="last_name" class="col-sm-2 control-label">姓名
                                            *</label>
                                        <div class="col-sm-10">
                                            <input id="last_name" name="last_name" type="text"
                                                   placeholder="Last Name" class="form-control required"
                                                   readonly="true" v-bind:value="username" />
                                        </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="email" class="col-sm-2 control-label">Email *</label>
                                            <div class="col-sm-10">
                                                <input id="email" name="email" placeholder="E-mail" type="text"
                                                        class="form-control required email"
                                                       v-bind:value="email"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="password" class="col-sm-2 control-label">密码 *</label>
                                            <div class="col-sm-10">
                                                <input id="password" name="password" type="password"
                                                       placeholder="Password" class="form-control required"/>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label for="password_confirm" class="col-sm-2 control-label">确认密码*</label>
                                            <div class="col-sm-10">
                                                <input id="password_confirm" name="password_confirm" type="password"
                                                           placeholder="Confirm Password "
                                                           class="form-control required"/>
                                            </div>
                                        </div>
                                    </div>
                        </div>
                    </div>
                </div>
            </div>
</template>
<script>
import {getUserInfo} from "../../api/api";
import "../../../../static/vendors/jasny-bootstrap/css/jasny-bootstrap.css";
export default {
  name: 'dashboard',
  data () {
    return {
        username:'',
        email:'',
        password:''
    };
  },
  mounted:function(){
    getUserInfo(this.$store.state.token.uid).then(data => {
          if(data.code=10000){
                this.username=data.data.username;
                this.email = data.data.email;
          }
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
