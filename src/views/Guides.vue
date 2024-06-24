<script setup lang="ts">
import { Ref, nextTick, onMounted, ref, watch } from 'vue';
import { useGlobalState } from '../stores/globalState'
import { useRoute, useRouter } from 'vue-router'

const $router = useRouter()

import { buildTOC, linkify, TOCLink, fixTables } from '../lib'

const route = useRoute()

const globalState = useGlobalState()
globalState.navigationPanel = false
globalState.screenOverlayPanel = false

import { getFileContents, md } from '../lib'
import { emojify } from 'node-emoji'

const pageContent: Ref<HTMLElement | null> = ref(null)
const pageData = ref("")
const tocContent = ref<TOCLink[]>([])

const generateTab = (level: number) => {
    let tabSpace = ""

    for (let i = 0; i < level + ( level % 2 === 0 ? 0 : 2 ); i++) {
        tabSpace = `${tabSpace}&nbsp;`
    }

    return tabSpace
}

const buildPage = async (category: string, page: string) => {
    let file = ""

    globalState.hanselGretel = [{ name: 'Guides', url: '/guides' }]

    if (category !== "") {
        if (page !== "") {
            file = `/g/${ category }/${ page }.md`
            globalState.hanselGretel.push({ name: category.toString(), url: `/guides/${ category }` })
            globalState.hanselGretel.push({ name: page.toString(), url: `/guides/${ category }/${ page }` })
        } else {
            file = `/g/${ category }/index.md`
            globalState.hanselGretel.push({ name: category.toString(), url: `/guides/${ category }` })
        }
    } else {
        file = `/g/index.md`
        globalState.hanselGretel = [{ name: 'Guides', url: '/guides' }]
    }

    if (file !== "") {
        let markdown = emojify(md.render(await getFileContents(file)))
        pageData.value = markdown
    }
}

// FIXME move to lib/index.ts
const tocHighlightHandler = () => {
    let tocLinks = document.querySelectorAll<HTMLAnchorElement>('a[type=toc]')
    let temp = ""

    Array.from(tocLinks).reverse().forEach((link: HTMLAnchorElement, index: number) => {
        let heading = document.getElementById(link.id.slice(5))
        let top = heading?.getBoundingClientRect().top || 0

        if (window.scrollY !== 0) {
            // Check if on screen
            if (top > 0 && top < globalState.windowSize.height) {
                link.classList.remove("bg-base", "text-mauve")
                link.classList.add("bg-mantle")

                // Check if at top (override)
                if (top >= 0 && top < 180 && temp !== "") {
                    link.classList.remove("bg-mantle")
                    link.classList.add("bg-base", "text-mauve")
                    temp = link.id.slice(5)

                    let links = Array.from(tocLinks).reverse()
                    if (index - 1 >= 0) {
                        links[index - 1].classList.remove("bg-base", "text-mauve")
                        links[index - 1].classList.add("bg-mantle")
                    }
                }
            } else {
                link.classList.remove("bg-base", "text-mauve", "bg-mantle")
            }

            // Check if at top
            if (top < 180 && temp === "") {
                link.classList.remove("bg-mantle")
                link.classList.add("bg-base", "text-mauve")
                temp = link.id.slice(5)
            }
        } else {
            link.classList.remove("bg-base", "text-mauve", "bg-mantle")
        }
    })
}

const bookNav = () => {
    let block = document.getElementById('booknav')
    let navLinks = document.querySelectorAll<HTMLAnchorElement>('a.router-prev, a.router-next')

    if (block) {
        let prev = ""
        // let center = "" // TODO Add this feature maybe?
        let next = ""

        if (navLinks.length > 0) {
            Array.from(navLinks).forEach((link: HTMLAnchorElement) => {
                if (link.classList.contains('router-prev')) {
                    prev = `
                        <a class="grow row flex w-50 p-md justify-start align-stretch bghover-surface0 gap-md text-surface2" id="booknav-prev" href="${ link.href }">
                            <span class="row flex align-center"><svg class="icon-xl" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 256a208 208 0 1 1 416 0A208 208 0 1 1 48 256zm464 0A256 256 0 1 0 0 256a256 256 0 1 0 512 0zM217.4 376.9c4.2 4.5 10.1 7.1 16.3 7.1c12.3 0 22.3-10 22.3-22.3V304h96c17.7 0 32-14.3 32-32V240c0-17.7-14.3-32-32-32H256V150.3c0-12.3-10-22.3-22.3-22.3c-6.2 0-12.1 2.6-16.3 7.1L117.5 242.2c-3.5 3.8-5.5 8.7-5.5 13.8s2 10.1 5.5 13.8l99.9 107.1z"/></svg></span>
                            <span class="row flex align-center text-lg">${ link.innerText }</span>
                        </a>
                    `
                }

                if (link.classList.contains('router-next')) {
                    next = `
                        <a class="grow row flex w-50 p-md justify-end align-stretch bghover-surface0 gap-md text-surface2" id="booknav-next" href="${ link.href }">
                            <span class="row flex align-center text-lg">${ link.innerText }</span>
                            <span class="row flex align-center"><svg class="icon-xl" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1c-4.2-4.5-10.1-7.1-16.3-7.1C266 128 256 138 256 150.3V208H160c-17.7 0-32 14.3-32 32v32c0 17.7 14.3 32 32 32h96v57.7c0 12.3 10 22.3 22.3 22.3c6.2 0 12.1-2.6 16.3-7.1l99.9-107.1c3.5-3.8 5.5-8.7 5.5-13.8s-2-10.1-5.5-13.8L294.6 135.1z"/></svg></span>
                        </a>
                    `
                }

                if (link.parentElement) {
                    link.parentElement.outerHTML = ''
                }
            })
        }

        block.outerHTML = `<div class="bg-mantle flex row justify-start border-thinner border-crust my-md">${ prev }${ next }</div>`

      return
    }
}

onMounted(() => {
    const category = route.params.category || ""
    const page = route.params.page || ""

    buildPage(category.toString(), page.toString())
    linkify(pageContent.value!, $router)
    fixTables(pageContent.value!)
    tocContent.value = buildTOC(pageContent.value!)
    bookNav()

    document.onscroll = () => {
        tocHighlightHandler()
    }
})

watch(() => route.params, (newParams) => {
    if (newParams.category) {
        buildPage(newParams.category.toString(), newParams.page.toString())
    } else {
        buildPage("", "")
    }
})

watch(() => pageData.value, () => {
    nextTick(() => {
        linkify(pageContent.value!, $router)
        fixTables(pageContent.value!)
        tocContent.value = buildTOC(pageContent.value!)
        bookNav()
    })
})

</script>

<template>
<div class="grow row gap-lg align-start justify-center" :class="globalState.windowSize.width < 1024 ? 'w-100 p-md' : 'w-90 p-md'">
    <div class="paper-torn border-none gutters-v shadow-low rounded-t-xxs font-retina p-md grow max-w-100" ref="pageContent" v-html="pageData"></div>
    <div v-if="globalState.windowSize.width >= 1280" class="bg-crust text-subtext0 gutters-v rounded-xxs p-md sticky t-md border-thin border-base flex column" style="min-width: 240px; width: 240px; max-width: 240px;">
        <template v-for="tocLink in tocContent">
            <a
                class="text-sm font-retina gap-xs flex row p-xxs hover-green"
                :href="`#${ tocLink.url }`"
                type="toc"
                :id="`href#${ tocLink.url }`"
            >
                <template v-if="tocLink.level > 1"><span v-html="generateTab(tocLink.level)"></span><span>{{ tocLink.text }}</span></template>
                <template v-else>{{ tocLink.text }}</template>
            </a>
        </template>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';
</style>