<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGlobalState } from '../stores/globalState'

import siteConfig from '../config.json'

const globalState = useGlobalState()
globalState.hanselGretel = [{ name: 'Home', url: '/' }]
globalState.navigationPanel = false
globalState.screenOverlayPanel = false

import { IMarkdownPost, parse, getFileContents } from '../lib'
import MarkdownPost from '../components/MarkdownPost.vue'

import markdownit from 'markdown-it'
import { emojify } from 'node-emoji'

import mdfootnote from 'markdown-it-footnote'
import mdsup from 'markdown-it-sup'
import mdsub from 'markdown-it-sub'
import mdmark from 'markdown-it-mark'
import mdhljs from 'markdown-it-highlightjs'
import mdabbr from 'markdown-it-abbr'
import mdattr from 'markdown-it-attrs'
import mdkbd from 'markdown-it-kbd'

import "highlight.js/styles/atom-one-dark.css"
import '@catppuccin/highlightjs/sass/catppuccin-mocha.scss'

const md = markdownit()
    .use(mdhljs, { auto: false, inline: true })
    .use(mdattr)
    .use(mdfootnote)
    .use(mdsub)
    .use(mdsup)
    .use(mdmark)
    .use(mdabbr)
    .use(mdkbd)

const markdownPosts = ref([<IMarkdownPost>{}])

const markdownitHTML = ref([""])

const markdownToHTML = async () => {
    for (const file of siteConfig.posts) {
        let markdown = await parse(file, true)
        // TODO linkify content
        markdownPosts.value.push(<IMarkdownPost>markdown)
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
    <div class="blogPost">
        <div v-for="post in markdownitHTML" class="paper-torn border-none gutters-v shadow-low rounded-t-xs p-md font-retina">
            <div v-html="post"></div>
        </div>
    </div>
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

<style lang="scss">
@import '../assets/styles/_global.scss';
</style>