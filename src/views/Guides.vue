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
    if (globalState.windowSize.width < 1280) return

    let tocLinks = document.querySelectorAll<HTMLAnchorElement>('a[type=toc]')
    let headings: { id: string, top: number }[] = []

    let temp = ""

    Array.from(tocLinks).reverse().forEach((link: HTMLAnchorElement) => {
        let heading = document.getElementById(link.id.slice(5))
        let top = heading?.getBoundingClientRect().top || 0
        let font = parseFloat(window.getComputedStyle(link, null).getPropertyValue('font-size'))

        if (window.scrollY !== 0) {
            if (top > 0 && top < globalState.windowSize.height) {
                link.classList.remove("bg-base", "text-mauve")
                link.classList.add("bg-mantle")
            } else {
                link.classList.remove("bg-base", "text-mauve", "bg-mantle")
            }

            if (top > 0 && top < 180) {
                link.classList.remove("bg-mantle")
                link.classList.add("bg-base", "text-mauve")
                temp = link.id.slice(5)
            } else if (top < 180 && temp === "") {
                link.classList.remove("bg-mantle")
                link.classList.add("bg-base", "text-mauve")
                temp = link.id.slice(5)
            }
        } else {
            link.classList.remove("bg-base", "text-mauve", "bg-mantle")
        }

        headings.push({ id: link.id.slice(5), top: top + font })
    })
}

onMounted(() => {
    const category = route.params.category || ""
    const page = route.params.page || ""

    buildPage(category.toString(), page.toString())
    linkify(pageContent.value!, $router)
    fixTables(pageContent.value!)
    tocContent.value = buildTOC(pageContent.value!)

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