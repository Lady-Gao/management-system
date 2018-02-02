<style scoped lang="stylus">
.List{
    margin-top :20px;
    margin-left:-65px;
}
.el-row{
    background-color :#8cbcee75;
     text-align:center;
     font-weight :bold;
     color:#454a4a;
}
ul{
    li{
        width:100%;
        margin:10px 0 ;
        line-height:80px;
       height:80px;
       .el-col{
           text-align:center;
           height:100%;
           
            img{
                height:100%;
            }
        }
        .fz12{
               font-size:12px;
           }
    }
}

</style>

<template>
  <div class="List">
     <el-row>
         <!-- 表头 -->
         <el-col :span="3" v-for="item in be">{{item}}</el-col>
     </el-row>
     <ul>
         <li v-for="item in List">
            <el-col :span="3">{{item.id}}</el-col>
            <el-col :span="3" >
                 <img @click="showCover(item)" :src="'../../../resource/images/'+item.id+'.jpg'" alt="">
            </el-col>
            <el-col :span="3">{{item.name}}</el-col>
            <el-col :span="3">{{item.sex}}</el-col>
            <el-col :span="3">{{item.age}}</el-col>
            <el-col :span="3">{{item.education}}</el-col>
            <el-col :span="3">{{item.section}}</el-col>
            <el-col :span="3" class="fz12">{{item.mail}}</el-col>
         </li>
     </ul>
  </div>
</template>
<script>
    export default{
        data(){
            return {
                be:["Id","照片","姓名","性别","年龄","学历","部门","邮箱"]
            }
        },
        created(){
            this.$store.dispatch("GETLIST")
        },
        computed:{
            List(){
                return this.$store.state.List
            }
        },
        methods:{
            showCover(item){
               this.$store.commit('SEEO',{info:item,showcover:true})
            }
        }
    }
</script>
