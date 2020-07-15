<template>
    <div class="app-main">
        <router-view :key="key"></router-view>
    </div>
</template>

<script>
export default {
    name: 'AppMain'
}
</script>