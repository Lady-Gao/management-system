import Vue from 'vue'
import Vuex from 'vuex'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts 
//路由
import VueRouter from 'vue-router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import directives from './plugins/directive.js'

import App from './App.vue'


Vue.use(directives)
Vue.use(ElementUI)
 //安装插件
Vue.use(Vuex)
Vue.use(VueRouter)
//实例化
const routes=[{
  path:"/search",
  name:"搜索",
  component(){
    return System.import("./views/search/index.vue")
    }
  }, {
    path: "/host",
    name: "首页",
    component() {
      return System.import("./views/host/list.vue")
    }
  }, {
    path: "/other",
    name: "其他",
    component() {
      return System.import("./views/other/list.vue")
    }
  },{
    path:"*",
    redirect: '/host'
  }]
const router=new VueRouter({
  routes
})
const store=new Vuex.Store({
  state:{
    //筛选内容
    filList:{
      sex: "男",
      age: [10,60],
     //选中学历
      education: "本科",
     //选中部门
      section: "生产部",
      //在职状态
      state: "",
      //名族
      nation: "",
      //政治
      poli_status: "",
      //手机号
      phone: "",
      //名字
      name: "",
      //选中地区
      city: [],
      //入职日期
      entryDate: "",
      //id
      id: ""
    },
     //学历数组
    educa: ["本科", "大专", "研究生", "高中"],
    //部门
    sections: ["人力资源部", "产品部", "财务部", "营销部", "生产部", "信息技术部"],
    //三级联动
    siteList: [],
    tag: [],
    //显示列表
    List:[],
    //员工页面
    showcover:false,
    
    //查看该员工
    info:{}
  },
  mutations:{
    
    GETLIST(state, payload){
      this.state.List=payload
    },
    //显示筛选列表
    FILlSTIS(state,payload){
      this.state.List=payload
   },
    //地区
    GETSITE(state,payload){
      this.state.siteList=payload
     },
     //个人信息
     SEEO(state,payload){
       if (payload.info){
         this.state.info=payload.info
       }
       this.state.showcover=payload.showcover
     }
   
  },
  actions:{
    //地区
    async GETSITE({commit}){
       var data=await fetch("../data/city.json").then(data=>data.json())
     //一級
     var siteList=[]
     //二級
     // var children = []
      data.forEach(item=>{
        var Citylist=[]
        item.city.forEach(city=>{
          var Area=[]
          city.area.forEach(area=>{
            Area.push({ value: area, label: area})
           })
          Citylist.push({ value: city.name, label: city.name, children: Area})
        }) 
         siteList.push({ value: item.name, label: item.name, children:Citylist})
      })
      commit("GETSITE",siteList)
    },
    //显示所有列表
    async GETLIST({ commit }){
      var data = await fetch("/list", ).then(data=>data.json())
      commit('GETLIST', data)
    },
    // //页面一点击筛选就发请求
    async FILlSTIS({commit},payload){
      var data=await fetch("/list",{
        "method": "POST",
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(payload)
              }).then(data=>data.json())
      console.log(data)
      commit('FILlSTIS',data)
    },
    //修改个人资料
    async CHANGE({commit},payload){
      var data=await fetch("/set",{
          "method":'PATCH',
        "headers": {
          "Content-Type": "application/json"
        },
        "body": JSON.stringify(payload)
      }).then(data=>data.json())
    }
  },
  getters:{
    //tag筛选列表
    arr:(state)=>{
      var arr=[]
      for (var k in state.filList){
        if (state.filList[k] !== "" && !Array.isArray(state.filList[k]) ){
          arr.unshift(state.filList[k])
        } 
      }
    
      return arr
   }
  }
})
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
