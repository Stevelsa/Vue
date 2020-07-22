<template>
    <div class="main-container">
        <navbar/>
        <AppMain/>
        <footerinfo/>
    </div>
</template>

<script>
import Navbar from './Navbar'
import AppMain from './AppMain'
import footerinfo from './Footer'

export default {
    name:'Layout',
    components:{
        Navbar,
        AppMain,
        footerinfo
    }
}
</script>