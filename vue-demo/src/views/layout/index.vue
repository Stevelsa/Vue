<template>
    <div class="container">
        <navbar/>
        <AppMain/>
        <footer/>
    </div>
</template>

<script>
import Navbar from './Navbar'
import AppMain from './AppMain'
import Footer from './Footer'

export default {
    name:'Layout',
    components:{
    	Navbar,
    	AppMain,
    	Footer
    }
}
</script>