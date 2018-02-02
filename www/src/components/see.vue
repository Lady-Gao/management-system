<style scoped lang="stylus">
.cover{
  position:fixed;
  top:40px;
  left:16%;
  z-index:1002;
  width:90%;
  height:100%;
  padding:30px;
  background-color:#fff;
  h2{
    margin:20px;
  }
 img{ 
    position:absolute;
    top:12%;
    right:16%
    width:150px;
  }
  .el-col{
    margin:20px;
     font-size:14px;
    b{
      font-size:16px;
      color:#409eff;
      margin-right:20px;
    }
    .el-input{
      width:60%;
      margin-left:10px;
    }
  }
  .el-col-10{
    text-align :center;
    margin-buttom:10%;
  }
}
</style>
<template>
  <div class="cover">
   <h2>{{info.name}}的个人资料</h2>
    
     <img :src="'../../resource/images/'+info.id+'.jpg'" /> 
    <el-row>
        <el-col :span="8"><b>工号</b>
          {{info.id}}
        </el-col>
        <el-col :span="8"><b>电话</b>
          {{info.phone}}
        </el-col>
    </el-row>
    
    <el-row>
       <el-col :span="8"><b>年龄</b> {{info.age}}</el-col>
       <el-col :span="8"><b>入职</b> {{Dat}}</el-col>
    </el-row>
   
    <el-row>
        <el-col :span="8"><b>性别</b> {{info.sex}}</el-col>
        <el-col :span="8"><b>名族</b>{{info.nation}}
        </el-col>
    </el-row>
    
    <el-row>
      <el-col :span="8"><b>学历</b>
        <el-select v-model="info.education" size="mini" placeholder="请选择">
                <el-option
                  v-for="item in this.$store.state.educa"
                  :key="item"
                 :value="item">
                </el-option>
              </el-select>
        </el-col>
        <el-col :span="8"><b>部门</b>
          <el-select v-model="info.section" size="mini"  >
                <el-option v-for="item in this.$store.state.sections" :key="item" :value="item" >
                </el-option>
          </el-select>
      </el-col>
    </el-row>
    
    <el-row>
        <el-col :span="8"><b>政治</b>
             <el-radio v-model="info.poli_status"   label="党员">党员</el-radio>
            <el-radio v-model="info.poli_status" label="团员">团员</el-radio>
        </el-col>
        <el-col :span="8"><b>状态</b>
           <el-radio v-model="info.state"  label="实习">实习</el-radio>
            <el-radio v-model="info.state"   label="正式">正式</el-radio>
            <el-radio v-model="info.state"   label="离职">离职</el-radio>
        </el-col>
    </el-row>
   <el-row>
      <el-col :span="8"><b>家乡</b>
        {{info.site}}
      </el-col>
   </el-row>
   <el-row>
    
   <el-col :span="10">
   <el-button type="primary" round size="small"  @click="setNew">提交更改</el-button>
     
   </el-col>
   <el-col :span="10">
   <el-button type="primary" round size="small"  @click="close">点击关闭</el-button>
    </el-col>
  </el-row>
 </div>
</template>

<script>
export default {
 data () {
    return {
      info:{},
       Dat:""
     
    }
  },
  created(){
    var date=this.$store.state.info.entryDate.substring(0,10)
     this.Dat=date
    this.info=this.$store.state.info
     this.show=this.$store.state.showcover
  },
  methods:{
    close(){
       this.$store.commit('SEEO',{showcover:false})
    },
   setNew(){
    this.close()
    // education
    var data={
      id:this.info.id,
      education:this.info.education
      ,poli_status:this.info.poli_status
      ,state:this.info.state
      ,section:this.info.section
    }
    this.$store.dispatch('CHANGE',data)
  }
  }
}
</script>