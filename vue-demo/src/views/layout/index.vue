<template>
    <div class="container">
        <navbar/>
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
        footerinfo
    }
}
</script>