<script setup lang="ts">
import { Ref, nextTick, onMounted, ref, watch } from 'vue';
import { useGlobalState } from '../stores/globalState'
import { useRoute, useRouter } from 'vue-router'

const $router = useRouter()

import { IMarkdownPost, linkify, parse } from '../lib'

const route = useRoute()

const globalState = useGlobalState()
globalState.navigationPanel = false
globalState.screenOverlayPanel = false

const pageContent: Ref<HTMLElement | null> = ref(null)
const pageData = ref(<string | IMarkdownPost> "")

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
        let markdown = await parse(file)
        pageData.value = markdown
    }
}

onMounted(async () => {
    const category = route.params.category || ""
    const page = route.params.page || ""

    await buildPage(category.toString(), page.toString())
    linkify(pageContent.value!, $router)
})

watch(() => route.params, (newParams) => {
    if (newParams.category) {
        buildPage(newParams.category.toString(), newParams.page.toString())
    } else {
        buildPage("", "")
    }
})

watch(() => pageData.value, () => {
    nextTick(() => linkify(pageContent.value!, $router))
})

</script>

<template>
<div class="grow" :class="globalState.windowSize.width < 1024 ? 'w-100 p-md' : 'w-80 p-md'">
    <div class="paper-torn border-none gutters-v shadow-low rounded-t-xs font-retina p-md" ref="pageContent" v-html="pageData"></div>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';
</style>