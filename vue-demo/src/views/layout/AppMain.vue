<template>
    <div class="app_main">
        <transition name="fade-transform" mode="out-in">
        <router-view></router-view>
        </transition>
    </div>
</template>

<script>
export default {
    name: 'AppMain',
    computed:{
        key(){
            return this.$route.fullPath
        }
    }
}
</script>