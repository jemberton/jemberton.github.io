<script setup lang="ts">

import BlogPost from '../components/BlogPost.vue'

import blogData from '../database.json'

</script>

<template>
<div class="sheet">
    <div class="code p-md rounded-xs">
        <span class="text-green">jemberton@github ~$</span>
        <span>echo $BLOG</span>
    </div>
    <template v-for="post in blogData.posts">
        <BlogPost :post="post"/>
    </template>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';
</style>