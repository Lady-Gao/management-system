<style scoped lang="stylus">
#app{
  position: relative;
  height:100%;
  .row{
    height:100%;
      .el-col{
        height:100%;
      }
  }

//header
.header {
 height: 60px;
 width:100%;
  line-height: 50px;
  position:fixed;
  top:0;
 left:15%; 
 background-color :#fff;
 z-index :1003;
}
 //nav
   .nav{
      position:fixed;
      top:0;
      left:0;
      overflow: hidden;
      width:15%;
      .el-menu{
      height:100%;
  }
}
}
</style>
<template>
  <div id="app" :class="{ovh:this.$store.state.showcover}">
    <el-row class="row">
      <el-col :span="4">
        <!-- 侧边导航 -->
          <div class="nav fl" v-height="0">
            <el-menu default-active="1-1" class="el-menu-vertical-demo"                @open="handleOpen" @close="handleClose">
                  <el-submenu index="1">
                      <template slot="title">
                          <i class="el-icon-location"></i>
                          <span>导航一</span>
                      </template>
                        <el-menu-item-group>
                          <el-menu-item index="1-1">选项1</el-menu-item>
                          <el-menu-item index="1-2">选项2</el-menu-item>
                          <el-menu-item index="1-3">选项2</el-menu-item>
                          <el-menu-item index="1-4">选项2</el-menu-item>
                          <el-menu-item index="1-5">选项2</el-menu-item>
                        </el-menu-item-group>
                  </el-submenu>
                  <el-menu-item index="2">
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                  </el-menu-item>
                  <el-menu-item index="3">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航三</span>
                  </el-menu-item>
            </el-menu>
        
          </div>
      </el-col>
      <el-col :span="20">
          <el-row>
          <!-- 头部导航 -->
            <div class="header fl">
             <el-menu
                default-active="/host"
                class="el-menu-demo"
                  mode="horizontal"
                  @select="handleSelect">
                  <el-menu-item index="/host">首页</el-menu-item>
                  <el-menu-item index="/search">员工</el-menu-item>
                  <el-menu-item index="/other">其他2</a></el-menu-item>
                  <el-submenu index="*" class="fr">
                    <template slot="title">我的工作台</template>
                    <el-menu-item index="2-1">选项1</el-menu-item>
                    <el-menu-item index="2-2">选项2</el-menu-item>
                    <el-menu-item index="2-3">选项3</el-menu-item>
                    </el-submenu>
                </el-menu>
              </div>
            
          </el-row>
          <el-row class="view">
            <!-- routerview -->
              <router-view ></router-view>
          </el-row>
      </el-col>
    </el-row> 
    <!-- 员工页面 -->
    <vui-see v-if="this.$store.state.showcover"></vui-see>
  </div>
</template>

<script>
import VuiSee from './components/see.vue'
export default {
  name: "app",
  data() {
    return {
    
    };
  },
  methods: {
    //设置跳转路由
    handleSelect(key, keyPath) {
     this.$router.push({ path: key });
    },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
  },
  created(){
      this.$store.dispatch("GETSITE")
   },
   components:{
     VuiSee
   }
};

</script>


