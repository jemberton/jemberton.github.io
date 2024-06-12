<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGlobalState } from '../stores/globalState'

import siteConfig from '../config.json'

const globalState = useGlobalState()
globalState.hanselGretel = [{ name: 'Home', url: '/' }]
globalState.navigationPanel = false
globalState.screenOverlayPanel = false

import { getFileContents, md } from '../lib'
import { emojify } from 'node-emoji'

const markdownitHTML = ref([""])

const markdownToHTML = async () => {
    for (const file of siteConfig.posts) {
        if (markdownitHTML.value[0] !== "") {
            markdownitHTML.value.push(emojify(md.render(await getFileContents(file))))
        } else {
            markdownitHTML.value = [emojify(md.render(await getFileContents(file)))]
        }
    }
}

onMounted(async () => {
    markdownToHTML()
})

</script>

<template>
<div class="grow" :class="globalState.windowSize.width < 1024 ? 'w-100 p-md' : 'w-90 p-md'">
    <div class="code row gap-md p-md rounded-xs bg-crust border-thin border-base">
        <span class="text-green">jemberton@github ~$</span>
        <span>echo $BLOG</span>
    </div>
    <div class="blogPost">
        <template v-for="post in markdownitHTML">
            <div v-html="post" class="paper-torn border-none gutters-v shadow-low rounded-t-xs font-retina p-md"></div>
        </template>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';
</style>

<style lang="scss">
@import '../assets/styles/_global.scss';
</style>