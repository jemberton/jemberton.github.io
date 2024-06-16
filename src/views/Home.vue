<script setup lang="ts">
import { onMounted, ref, Ref } from 'vue'
import { useGlobalState } from '../stores/globalState'

import { useRouter } from 'vue-router'
const $router = useRouter()

import siteConfig from '../config.json'

const globalState = useGlobalState()
globalState.hanselGretel = [{ name: 'Home', url: '/' }]
globalState.navigationPanel = false
globalState.screenOverlayPanel = false

import { getFileContents, linkify, md } from '../lib'
import { emojify } from 'node-emoji'

const pageLinks: Ref<HTMLElement | null> = ref(null)
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
    await markdownToHTML()
    linkify(pageLinks.value!, $router)
})

</script>

<template>
<div class="grow" :class="globalState.windowSize.width < 1024 ? 'w-100 p-md' : 'w-90 p-md'">
    <div class="row gap-md p-md rounded-xs bg-crust border-thin border-base">
        <span class="text-green">jemberton@github ~$</span>
        <span>echo $BLOG</span>
    </div>
    <div class="blogPost column gap-lg" ref="pageLinks">
        <template v-for="post in markdownitHTML">
            <div v-html="post" class="paper-torn border-none gutters-v shadow-low rounded-t-xxs font-retina p-md"></div>
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