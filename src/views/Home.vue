<script setup lang="ts">

import blogData from '../database.json'

</script>

<template>
<div class="sheet">
    <div class="code p-md rounded-xs">
        <span class="font-green">jemberton@github ~$</span>
        <span>echo $BLOG</span>
    </div>
    <template v-for="post in blogData.posts">
        <div class="font-retina card rounded-sm shrink">
            <div v-if="post.image" class="post-image">
                <img :src="post.image" />
            </div>

            <template v-if="post.avatar">
                <div class="post-avatar p-md">
                    <img :src="post.avatar" class="round" />
                    <div class="post-metadata">
                        <div class="post-author">{{ post.author }}</div>
                        <div class="post-username">{{ post.username }} {{ post.link }}</div>
                    </div>
                </div>
            </template>
            <template v-else>
                <div class="post-metadata p-md">
                    <div class="post-author">{{ post.author }}</div>
                    <div class="post-username">{{ post.username }} {{ post.link }}</div>
                </div>
            </template>

            <div>
                <div class="post-title">{{ post.title }}</div>
                <div class="post-body">{{ post.body }}</div>
                <div class="post-timestamp">{{ post.timestamp }}</div>
            </div>
            <div>
                <template v-for="file in post.files">
                    <div class="post-file">{{ file }}</div>
                </template>
            </div>
        </div>
    </template>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';

.post-image {
    img {
        max-width: 100%;
        border-top-left-radius: 0.5em;
        border-top-right-radius: 0.5em;
        filter: grayscale(80%);

        &.round {
            clip-path: circle(40%);
        }
    }
}

.post-avatar {
    flex-direction: row;
    justify-content: start; align-items: center;
    gap: 1em;

    img {
        max-width: 64px; max-height: 64px;

        &.round {
            clip-path: circle(40%);
        }
    }
}

.post-metadata {
    justify-content: start; align-items: start;
}

.post-author { color: red; }
.post-username { color: green; }
.post-title { color: blue; }
.post-body { color: salmon; }
.post-timestamp { color: turquoise; }
.post-file { color: mediumspringgreen; }
</style>