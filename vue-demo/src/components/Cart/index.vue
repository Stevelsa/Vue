<template>
    <div :class="{fold:isFold}" class="panel-right">
        <div class="handler">
            <svg-icon icon-class="minicart" @click="switchCartView" />
        </div>
        <div class="pane-header">
            <a >
                <svg-icon icon-class="shoppingcart"/>
            </a>
        </div>
        <div class="cart-main">
            <section v-if="0>0">

            </section>
            <section v-else>
                <p class="c-text">空空如也，快去...</p>
            </section>
        </div>

        <div class="pane-footer">
            <el-button type="primary">结算</el-button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Cart',
    data(){
        return{
            isFold:true
        }
    },
    methods:{
        switchCartView(){
            this.isFold=!this.isFold
        }
    }
}
</script>