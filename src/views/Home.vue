<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGlobalState } from '../stores/globalState'

import siteConfig from '../config.json'

const globalState = useGlobalState()
globalState.hanselGretel = [{ name: 'Home', url: '/' }]
globalState.navigationPanel = false
globalState.screenOverlayPanel = false

import { IMarkdownPost, parse } from '../lib'
import MarkdownPost from '../components/MarkdownPost.vue'

const markdownPosts = ref([<IMarkdownPost>{}])

const markdownToHTML = async () => {
    for (const file of siteConfig.posts) {

        let markdown = await parse(file, true)
        // TODO linkify content
        markdownPosts.value.push(<IMarkdownPost>markdown)
    }
}

onMounted(async () => {
    markdownToHTML()
})

</script>

<template>
<div class="grow" :class="globalState.windowSize.width < 1024 ? 'w-100 p-md' : 'w-80 p-md'">
    <div class="code row gap-md p-md rounded-xs bg-crust border-thin border-base">
        <span class="text-green">jemberton@github ~$</span>
        <span>echo $BLOG</span>
    </div>
    <div class="my-lg">
        <template v-for="post in markdownPosts">
            <MarkdownPost :data="post" />
        </template>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';
</style>