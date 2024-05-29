<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useGlobalState } from '../stores/globalState'

import siteConfig from '../config.json'

const globalState = useGlobalState()
globalState.hanselGretel = [{ name: 'Home', url: '/' }]
globalState.navigationPanel = false
globalState.screenOverlayPanel = false

import { getFileContents, parseImage, parseHeadings, parseBlockQuote, parseHorizontalRule, parseMetadata, parse } from '../lib'

import { IMarkdownPost } from '../lib'
import MarkdownPost from '../components/MarkdownPost.vue'

const markdownPosts = ref([<IMarkdownPost>{}])

const markdownToHTML = async () => {
    console.log('-- MARKDOWN2HTML --------------------')
    
    // for (const file of siteConfig.posts) {
    //     let metadata = []
    //     let metadataFlag = false

    //     let newHTMLArray = []
    //     let newMetadata: IMarkdownPost = {
    //         title: '',
    //         date: '',
    //         body: ''
    //     }

    //     const markdown = await getFileContents(file)
    //     parse(file, true)
    //     let test = markdown.split('\n')

    //     for (const [index, line] of test.entries()) {
    //         let newline = ""

    //         // FIXME this is very broken for processing metadata ....
    //         if (index === 0 && line.startsWith('{')) { metadataFlag = true; continue; }

    //         if (metadataFlag === true && line.startsWith('}')) {
    //             metadataFlag = false
    //             newMetadata = parseMetadata(metadata)
    //             // newHTMLArray.push(newMetadata)
    //             continue
    //         }
    //         if (metadataFlag === true && !line.startsWith('}')) {
    //             metadata.push(line)
    //         } else {
    //             let isHeading = parseHeadings(line)
    //             if (isHeading !== line) { newline = isHeading }

    //             let isBlockQuote = parseBlockQuote(line)
    //             if (isBlockQuote !== line) { newline = isBlockQuote }

    //             let isHorizontalRule = parseHorizontalRule(line)
    //             if (isHorizontalRule !== line) { newline = isHorizontalRule }

    //             // TODO FIXME All of these should be put into seperate function calls to parse EVERYTHING

    //             // FIXME this is needing some consideration for <ul> tags
    //             if (line.startsWith('- ')) {
    //                 newline = line.replace(/^-\s(.+)/, '<li>$1</li>')
    //             }

    //             if (line.startsWith('![')) {
    //                 let matches = line.match(/^!\[(.+?)\]\((.+?)\)/) || []
    //                 if (matches.length > 0) {
    //                     newline = `<div class="md-img rounded-xxs"><img src="${ matches[2] }" alt="${ matches[1] }" /><span class="text-subtext0 text-sm"><em>${ matches[1] }</em></span></div>`
    //                 }
    //             }

    //             if (line.startsWith('[')) {
    //                 let matches = line.match(/^\[(.+?)\]\((.+?)\)/) || []
    //                 if (matches.length > 0) {
    //                     if (matches[1].startsWith('![')) { parseImage() }
    //                     else {
    //                         newline = `<a href="${ matches[2] }" class="text-red m-font">${ matches[1] }</a>`
    //                     }
    //                 }
    //             }

    //             //# If line does contain a Markdown starting character, make it a content paragraph
    //             if (newline === "" && line !== "") { newline = `<p class="m-font mb-xxl">${ line }</p>` }

    //             //# Parse other Markdown triggers
    //             newline = newline.replace(/\*\*\*([a-zA-Z0-9_\s-]+?)\*\*\*/g, '<strong><em>$1</em></strong>')
    //             newline = newline.replace(/\*\*([a-zA-Z0-9_\s-]+?)\*\*/g, '<strong>$1</strong>')
    //             newline = newline.replace(/\*([a-zA-Z0-9_\s-]+?)\*/g, `<em>$1</em>`)
    //             newline = newline.replace(/\`([a-zA-Z0-9_\s-]+?)\`/g, `<div class="code p-md rounded-xxs font-mono text-sm m-font bg-crust">$1</div>`)

    //             //# Add to HTML array
    //             if (newline !== "") { newHTMLArray.push(newline) }
    //         }
    //     }

    //     newMetadata.body = newHTMLArray.join("")
    //     markdownPosts.value.push(newMetadata)
    // }

    for (const file of siteConfig.posts) {
        let newMetadata: IMarkdownPost = {
            title: '',
            date: '',
            body: ''
        }
        let markdown = await parse(file)
        newMetadata.body = markdown
        markdownPosts.value.push(newMetadata)
    }

    // let parsed = ""
    // parsed = markdown.replace(/^#{1,6}\s.*\n/gm, (match) => {
    //     let symbols = match.match(/^\#+/g) || []
    //     let count = 0

    //     if (symbols.length > 0) {
    //         count = (symbols[0]?.match(/#/g) || []).length
    //         let clean = match.replace(/^#+\s/g, `<h${ count }>`)
    //         clean = `${ clean }</h${ count }>`

    //         return clean
    //     }

    //     return match
    // })

    // parsed = parsed.replace(/\*\*(.+?)\*\*/gm, `<strong>$1</strong>`)
    // parsed = parsed.replace(/\*(.+?)\*/gm, `<em>$1</em>`)

    // parsed = parsed.replace(/\n\n/gm, '<br>')

    // globData.value = parsed
}

markdownToHTML()

onMounted(async () => {
    
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