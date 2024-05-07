<script setup lang="ts">

import blogData from '../../public/database.json'

console.log(blogData)

</script>

<template>
<div class="sheet">
    <div class="code p-md rounded-xs">jemberton@github ~$ whoami</div>
    <div class="font-retina">
        <p>Hi there! My name is Josh. Welcome to my little corner of github.</p>
        <p>I am currently working on this site ... things may be broken and incomplete.</p>
        <p>I am planning to add my projects, interests, and general knowledge of experiences here.</p>
    </div>
    <template v-for="post in blogData.posts">
        <div>{{ post.title }}</div>
        <div>{{ post.body }}</div>
    </template>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';
</style>