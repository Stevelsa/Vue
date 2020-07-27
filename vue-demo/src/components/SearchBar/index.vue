<template>
    <div class="brand">
        <div class="search_input">
            <el-input v-model="keyword" placeholder="please input" @keyup.enter.native="doSearch">
            <el-button slot="append" icon="el-icon-search"  @click="doSearch"></el-button>
            </el-input>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SearchBar',
    data(){
        return{
            keyword:this.$route.query.keyword ? this.$route.query.keyword:''
        }
    },
    methods:{
        doSearch(){
            if(this.keyword.trim().length===0){
                this.$message({
                    showClose:true,
                    message: '请输入要查询的内容',
                    type:'warning'
                })
                return
            }
            this.$route.push({
                path:'/search',
                query:{keyword:this.keyword,_random:Math.random()}
            })
        }
    }
}
</script>
