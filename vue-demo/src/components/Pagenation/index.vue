<template>
    <div class="pagenation-container">
        <el-pagination 
            :background="background"
            :current-page.sync="currentPage"
            :page-size="size"
            :layout="layout"
            :total="total"
            v-bind="$attrs"
            @current-change="handleCurrentChange">
        </el-pagination>
    </div>
</template>

<script>
export default {
    name:'Pagination',
    props:{
        total:{
            required:true,
            type:Number
        },
        current:{
            type:Number,
            default:1
        },
        size:{
            type:Number,
            default:10
        },
        layout:{
            type:String,
            default:'prev,pager,next'
        },
        background:{
            type:Boolean,
            default:true
        },
        hidden:{
            type:Boolean,
            default:false
        }
    },
    computed:{
        currentPage:{
            get(){
                return this.current
            },
            set(val){
                this.$emit('update:current',val)
            }
        },
        start(){
            return (this.current-1)*this.size+1
        },
        end(){
            this.current*this.size>this.total
                ?this.total
                :this.total*this.size
        }

    },
    methods:{
        handleCurrentChange(val){
            this.$emit('pagenation',{current:val, size:this.size})
        }
    }
}
</script>