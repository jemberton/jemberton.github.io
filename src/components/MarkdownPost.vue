<script setup lang="ts">
const postData = defineProps<{
    data: {
        title?: string,
        author?: string,
        avatar?: string,
        date?: string,
        email?: string[],
        github?: string[],
        body?: string
    }
}>()

// import { parseImage, parseHeadings, parseBlockQuote, parseHorizontalRule, parseMetadata } from '../lib'

// import { IMarkdownPost } from '../lib'
// import MarkdownPost from '../components/MarkdownPost.vue'

// const markdownPosts = ref([<IMarkdownPost>{}])

// const blogstuff = async (file: string) => {
//     if (file !== "") {
//         const data = await fetch(file)
//         const datavalue = await data.text()
//         return datavalue
//     }
    
//     return ""
// }

// const markdownToHTML = async (markdown: string) => {
//     console.log('------------------------------MARKDOWN2HTML')
    
//     for (const file of siteConfig.posts) {
//         let metadata = []
//         let metadataFlag = false

//         let newHTMLArray = []
//         let newMetadata: IMarkdownPost = {
//             title: '',
//             date: '',
//             body: ''
//         }

//         const markdown = await blogstuff(file)
//         let test = markdown.split('\n')

//         for (const [index, line] of test.entries()) {
//             let newline = ""

//             // FIXME this is very broken for processing metadata ....
//             if (index === 0 && line.startsWith('{')) { metadataFlag = true; continue; }

//             if (metadataFlag === true && line.startsWith('}')) {
//                 metadataFlag = false
//                 newMetadata = parseMetadata(metadata)
//                 // newHTMLArray.push(newMetadata)
//                 continue
//             }
//             if (metadataFlag === true && !line.startsWith('}')) {
//                 metadata.push(line)
//             } else {
//                 let isHeading = parseHeadings(line)
//                 if (isHeading !== line) { newline = isHeading }

//                 let isBlockQuote = parseBlockQuote(line)
//                 if (isBlockQuote !== line) { newline = isBlockQuote }

//                 let isHorizontalRule = parseHorizontalRule(line)
//                 if (isHorizontalRule !== line) { newline = isHorizontalRule }

//                 // TODO FIXME All of these should be put into seperate function calls to parse EVERYTHING

//                 // FIXME this is needing some consideration for <ul> tags
//                 if (line.startsWith('- ')) {
//                     newline = line.replace(/^-\s(.+)/, '<li>$1</li>')
//                 }

//                 if (line.startsWith('![')) {
//                     let matches = line.match(/^!\[(.+?)\]\((.+?)\)/) || []
//                     if (matches.length > 0) {
//                         newline = `<div class="md-img rounded-xxs"><img src="${ matches[2] }" alt="${ matches[1] }" /><span class="text-subtext0 text-sm"><em>${ matches[1] }</em></span></div>`
//                     }
//                 }

//                 if (line.startsWith('[')) {
//                     let matches = line.match(/^\[(.+?)\]\((.+?)\)/) || []
//                     if (matches.length > 0) {
//                         if (matches[1].startsWith('![')) { parseImage() }
//                         else {
//                             newline = `<a href="${ matches[2] }" class="md-a">${ matches[1] }</a>`
//                         }
//                     }
//                 }

//                 //# If line does contain a Markdown starting character, make it a content paragraph
//                 if (newline === "" && line !== "") { newline = `<p class="p-md pt-none">${ line }</p>` }

//                 //# Parse other Markdown triggers
//                 newline = newline.replace(/\*\*\*([a-zA-Z0-9_\s-]+?)\*\*\*/g, '<strong><em>$1</em></strong>')
//                 newline = newline.replace(/\*\*([a-zA-Z0-9_\s-]+?)\*\*/g, '<strong>$1</strong>')
//                 newline = newline.replace(/\*([a-zA-Z0-9_\s-]+?)\*/g, `<em>$1</em>`)
//                 newline = newline.replace(/\`([a-zA-Z0-9_\s-]+?)\`/g, `<div class="code p-md rounded-xxs font-mono text-sm m-md bg-crust">$1</div>`)

//                 //# Add to HTML array
//                 if (newline !== "") { newHTMLArray.push(newline) }
//             }
//         }

//         newMetadata.body = newHTMLArray.join("")
//         markdownPosts.value.push(newMetadata)
//     }

//     // let parsed = ""
//     // parsed = markdown.replace(/^#{1,6}\s.*\n/gm, (match) => {
//     //     let symbols = match.match(/^\#+/g) || []
//     //     let count = 0

//     //     if (symbols.length > 0) {
//     //         count = (symbols[0]?.match(/#/g) || []).length
//     //         let clean = match.replace(/^#+\s/g, `<h${ count }>`)
//     //         clean = `${ clean }</h${ count }>`

//     //         return clean
//     //     }

//     //     return match
//     // })

//     // parsed = parsed.replace(/\*\*(.+?)\*\*/gm, `<strong>$1</strong>`)
//     // parsed = parsed.replace(/\*(.+?)\*/gm, `<em>$1</em>`)

//     // parsed = parsed.replace(/\n\n/gm, '<br>')

//     // globData.value = parsed
// }

// markdownToHTML()

</script>

<template>
    <template v-if="postData.data.body">
        <div class="bg-mantle rounded border-thin border-crust shadow gutters-v">
            <template v-if="postData.data.author || postData.data.date">
                <div class="md-header">
                    <div class="row align-center gap-md p-md border-thin border-b-crust">
                        <template v-if="postData.data.avatar">
                            <img :src="postData.data.avatar" class="avatar circle"/>
                        </template>
                        <div class="justify-center align-start gap-xxs">
                            <template v-if="postData.data.author">
                                <div class="author text-lg">{{ postData.data.author }}</div>
                            </template>
                            <div class="row align-center gap-md">
                                <template v-if="postData.data.github">
                                    <div v-if="postData.data.github.length > 1" class="text-xl">
                                        <a :href="postData.data.github[1]" :title="'Github : ' + postData.data.github[0]" class="text-green">
                                            <font-awesome-icon icon="fa-brands fa-square-github" />
                                        </a>
                                    </div>
                                    <div v-else class="text-sm text-subtext1">{{ postData.data.github }}</div>
                                </template>
                                <template v-if="postData.data.email">
                                    <div v-if="postData.data.email.length > 1" class="text-lg">
                                        <a :href="'mailto:' + postData.data.email[1]" :title="postData.data.email[0]" class="text-rosewater">
                                            <font-awesome-icon icon="fa-solid fa-paper-plane" />
                                        </a>
                                    </div>
                                    <div v-else></div>
                                </template>
                            </div>
                            <template v-if="postData.data.date">
                                <div class="datetime text-overlay1 text-md">{{ postData.data.date }}</div>
                            </template>
                        </div>
                    </div>
                    <div class="p-md">
                        <div class="title font-bold text-xxl">{{ postData.data.title }}</div>
                    </div>
                </div>
            </template>
            <div v-html="postData.data.body"></div>
        </div>
    </template>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';
</style>