<script setup lang="ts">
import { ref } from 'vue'

import BlogPost from '../components/BlogPost.vue'

import blogData from '../database.json'

const globData = ref("")

const blogstuff = async () => {
    const data = await fetch('/test.md')
    const datavalue = await data.text()
    return datavalue
}

const markdownToHTML = async () => {
    const markdown = await blogstuff()
    console.log('------------------------------')

    let test = markdown.split('\n')
    let newHTMLArray = []

    for (const line of test) {
        let newline = ""

        //# Starting Character Line Parsers
        if (line.startsWith('#')) {
            let symbols = line.match(/^\#+/g) || []
            let count = 0

            if (symbols.length > 0) {
                count = (symbols[0]?.match(/#/g) || []).length
                newline = line.replace(/^#+\s(.*)/g, `<h${ count }>$1</h${ count }>`)
            }
        }

        //# If line does contain a Markdown starting character, make it a content paragraph
        if (newline === "" && line !== "") { newline = `<p>${ line }</p>` }

        //# Parse other Markdown triggers
        newline = newline.replace(/\*\*\*([a-zA-Z0-9_\s-]+?)\*\*\*/g, '<strong><em>$1</em></strong>')
        newline = newline.replace(/\*\*([a-zA-Z0-9_\s-]+?)\*\*/g, '<strong>$1</strong>')
        newline = newline.replace(/\*([a-zA-Z0-9_\s-]+?)\*/g, `<em>$1</em>`)

        //# Add to HTML array
        if (newline !== "") { newHTMLArray.push(newline) }
    }

    globData.value = newHTMLArray.join("")

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

</script>

<template>
<div v-html="globData" class="bg-crust p-md" style="width: 100%;"></div>
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