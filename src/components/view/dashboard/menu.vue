<template>
	<!-- Left side column. contains the logo and sidebar -->
    <aside class="left-side sidebar-offcanvas">
        <!-- sidebar: style can be found in sidebar-->
        <section class="sidebar">
            <div id="menu" role="navigation">
                <div class="nav_profile">
                    <div class="media profile-left">
                        <a class="pull-left profile-thumb" href="#">
                            <img :src="img" class="img-circle" alt="User Image"></a>
                        <div class="content-profile">
                            <h4 class="media-heading">{{name}}</h4>
                            <ul class="icon-list">
                                <li>
                                    <a href="users.html">
                                        <i class="fa fa-fw ti-user"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="lockscreen.html">
                                        <i class="fa fa-fw ti-lock"></i>
                                    </a>
                                </li>
                                <li>
                                    <a @click="$router.push('/dashboard/edit')" >
                                        <i class="fa fa-fw ti-settings"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        <i class="fa fa-fw ti-shift-right"></i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul class="navigation">
                    <li class="menu-dropdown" code="userManage" >
                        <a href="#" > <i class="menu-icon ti-user" ></i> <span>用户管理
                        </span> <span
                                class="fa arrow"></span></a>
                        <ul class="sub-menu">
                            <li code='authManage' >
                                <a href="general_components.html">
                                    <i class="fa fa-fw ti-plug"></i> 用户列表
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-dropdown">
                        <a href="#">
                            <i class="menu-icon ti-desktop"></i>
                            <span>
                                    UI Features
                                </span>
                            <span class="fa arrow"></span>
                        </a>
                        <ul class="sub-menu">
                            <li code='authManage' >
                                <a href="general_components.html">
                                    <i class="fa fa-fw ti-plug"></i> General Components
                                </a>
                            </li>
                            <li>
                                <a href="buttons.html">
                                    <i class="fa fa-fw ti-layout-placeholder"></i> Buttons
                                </a>
                            </li>
                            <li>
                                <a href="tabs_accordions.html">
                                    <i class="fa fa-fw ti-layers"></i> Tabs &amp; Accordions
                                </a>
                            </li>
                            <li>
                                <a href="fonts.html">
                                    <i class="fa fa-fw ti-ink-pen"></i> Font Icons
                                </a>
                            </li>
                            <li>
                                <a href="advanced_modals.html">
                                    <i class="fa fa-fw ti-brush-alt"></i> Advanced Modals
                                </a>
                            </li>
                            <li>
                                <a href="timeline.html">
                                    <i class="fa fa-fw ti-time"></i> Timeline
                                </a>
                            </li>
                            <li>
                                <a href="notifications.html">
                                    <i class="fa fa-fw ti-flag-alt"></i> Notifications
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <!-- / .navigation --> </div>
            <!-- menu --> </section>
        <!-- /.sidebar --> </aside>
</template>
<script>
import '../../../../static/js/app.js'
export default {
  name: 'Menu',
  props:{img:'',name:''},
  data () {
    return {

    };
  },
  mounted:function(){    
    $('#menu').metisMenu();
    if(this.$route.query.menus){
        this.load(this.$route.query.menus)
    }
  },
  methods: {
        load:function(menus){
            if(menus){
                $("aside.left-side ul.navigation .menu-dropdown").each(function(){
                    var subMenu = menus[$(this).attr('code')];
                    if(subMenu){
                        if(Object.getOwnPropertyNames(subMenu).length<=0){
                            $(this).remove();
                        }else{
                            console.log($(this).find('.sub-menu').children('li').length)
                            $(this).find('.sub-menu').children('li').each(function(){
                                if(!subMenu[$(this).attr('code')]){
                                    $(this).remove();
                                }
                            })
                        }
                    }else{
                        $(this).remove();
                    }
                })
            }
        }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
