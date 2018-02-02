<style scoped lang="stylus">
.index {
  padding:80px 10px;
  padding-left: 50px;
  font-size: 16px;
  .el-row {
    line-height: 50px;
    width:100%;
    .el-slider{
      line-height:35px;
    }
    .el-col-4{
      font-size:14px;
      color:#409eff;
      font-weight :bold;
    }
  }

  .choose {
    margin: 20px 0;
  }
}
</style>
<template>
<div class="index">
  <!-- 各种选项 -->
  <div class="check">
   <el-row>
         <el-col :span="12">
           <el-col :span="4">性别 :</el-col>
           <el-col :span="12">
              <el-radio v-model="IndexFilt.sex" label="男" @change="filters">男</el-radio>
               <el-radio v-model="IndexFilt.sex" label="女" @change="filters">女</el-radio>
           </el-col>
         </el-col>

         <el-col :span="12">
          <el-col :span="4">年龄 :</el-col>
           <el-col :span="12">
             <div class="block">
              <el-slider   v-model="IndexFilt.age" range :max="50" @change="filters"></el-slider>
            </div>
           </el-col>
         </el-col>
   </el-row>
   <el-row>
     <el-col :span="12">
        <el-col :span="4">学历 :</el-col>
        <el-col :span="12">
            <el-select v-model="IndexFilt.education" size="mini" @change="filters" placeholder="请选择">
                <el-option
                  v-for="item in educa"
                  :key="item"
                 :value="item">
                </el-option>
              </el-select>
        </el-col> 
     </el-col>
     <el-col :span="12">
        <el-col :span="4">部门 :</el-col>
        <el-col :span="12">
             <el-select v-model="IndexFilt.section" size="mini" placeholder="请选择部门"  @change="filters" >
                <el-option v-for="item in sections" :key="item" :value="item">
                </el-option>
            </el-select>
        </el-col>
     </el-col> 
   </el-row> 
   <el-row>
     <el-col :span="12">
        <el-col :span="4">在职状态 :</el-col>
        <el-col :span="12">
            <el-radio v-model="IndexFilt.state"  @change="filters" label="实习">实习</el-radio>
            <el-radio v-model="IndexFilt.state"  @change="filters" label="正式">正式</el-radio>
            <el-radio v-model="IndexFilt.state"  @change="filters" label="离职">离职</el-radio>
        </el-col>
       </el-col>
       <el-col :span="12">
        <el-col :span="4">名族 :</el-col>
        <el-col :span="12">
            <el-radio v-model="IndexFilt.nation"  @change="filters" label="汉族">汉族</el-radio>
            <el-radio v-model="IndexFilt.nation"   @change="filters"label="回族">回族</el-radio>
              <el-radio v-model="IndexFilt.nation"  @change="filters" label="满族">满族</el-radio>
          </el-col>
      </el-col>
    </el-row> 
    <el-row>
      <el-col :span="12">
        <el-col :span="4">政治 :</el-col>
        <el-col :span="12">
            <el-radio v-model="IndexFilt.poli_status"  @change="filters" label="党员">党员</el-radio>
            <el-radio v-model="IndexFilt.poli_status"  @change="filters" label="团员">团员</el-radio>
        </el-col>
     </el-col>
     <el-col :span="12">
        <el-col :span="4">手机号 :</el-col>
        <el-col :span="12">
            <el-input placeholder="请输入查询号码" @change="filters"  v-model="IndexFilt.phone" clearable size="mini"></el-input> 
        </el-col>
     </el-col> 
   </el-row> 
   <el-row>
      <el-col :span="12">
        <el-col :span="4">姓名 :</el-col>
        <el-col :span="12">
          <el-input placeholder="请输入查询姓名" @change="filters"  v-model="IndexFilt.name" clearable size="mini"></el-input>
        </el-col>
      </el-col>
       <el-col :span="12">
        <el-col :span="4">  地区 :</el-col>
        <el-col :span="12">
          <el-cascader  :options="siteList" size="mini" @change="filters" change-on-select v-model="IndexFilt.city">
           </el-cascader>
       </el-col>
       </el-col>
   </el-row> 
   <el-row>
      <el-col :span="12">
        <el-col :span="4">工号</el-col>
        <el-col :span="12">
        <el-input placeholder="请输入查询ID" @change="filters"  v-model="IndexFilt.id" clearable size="mini"></el-input>
      </el-date-picker>
      </el-col>
      </el-col>
      <el-col :span="12">
          <el-col :span="4">入职日期</el-col>
        <el-col :span="10">
          <el-date-picker v-model="IndexFilt.entryDate" type="daterange"  range-separator="至"  start-placeholder="开始日期"      end-placeholder="结束日期" size="mini" @change="filters"
          value-format="yyyy-MM-dd">
            </el-date-picker>
        </el-col>
      </el-col>
   </el-row>  
  </div>
 <!-- 已选中值 -->
  <div class="choose">
    <el-row>
       <el-col :span="1">已选:</el-col>
       <el-col :span="23">
         <el-tag size="mini" closable v-for="(item,index) in tag" >{{item}}</el-tag>
       </el-col>
    </el-row>
  <vui-list></vui-list>
  </div>
    
</div>
</template>

<script>
import VuiList from './list.vue'
export default {
  data() {
    return {
      IndexFilt:{},
      //部门
      section:[],
      tag:[]
      
     }
  },
created(){
  this.sections=this.$store.state.sections
  this.educa=this.$store.state.educa
  this.IndexFilt=this.$store.state.filList
 
},
  computed:{
    siteList(){
      return this.$store.state.siteList
    },
    
    filList(){
    // 绑定state
    return this.$store.state.filList
   }
  },
  methods: {
    filters(){
    this.$store.dispatch("FILlSTIS",this.IndexFilt)
    this.tag=this.$store.getters.arr
    }
  },
  components:{
    VuiList
  }
};
</script>