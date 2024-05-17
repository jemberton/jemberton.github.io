<script setup lang="ts">
import { ref } from 'vue'
import { useWindowSize } from '@vueuse/core'

const windowSize = ref(useWindowSize())

const navigation = [
    {
        title: "home",
        icon: "fa-solid fa-house fa-fw",
        url: "/"
    },
    {
        title: "guides",
        icon: "fa-solid fa-book-bookmark fa-fw",
        url: "/guides"
    },
    {
        title: "projects",
        icon: "fa-solid fa-folder-tree fa-fw",
        url: "/projects"
    },
    {
        title: "contact",
        icon: "fa-solid fa-address-card fa-fw",
        url: "/contact"
    }
]

const breadcrumb = ref([])

const HanselGretel = () => {
    if (breadcrumb.value.length > 0) {
        return breadcrumb.value
    }

    return ""
}

// const addCrumb = () => {
//     breadcrumb.value.push({ url: 'wee', text: 'woo' })
// }

</script>

<template>
<div class="container">
    <div class="left" v-if="windowSize.width >= 1024">
        <div class="branding p-md">
            <font-awesome-icon :icon="['fas', 'code']" class="text-xl" />
        </div>
        <div class="nav grow">
            <template v-for="navitem of navigation">
                <RouterLink
                    :to="navitem.url"
                    class="nav-item p-sm"
                >
                    <div v-if="navitem.icon !== ''">
                        <font-awesome-icon :icon="navitem.icon" />
                    </div>
                    <div>{{ navitem.title }}</div>
                </RouterLink>
            </template>
        </div>
        <div class="text-lg p-md foot">
            <a href="https://github.com/jemberton" title="jemberton's github">
                <font-awesome-icon icon="fa-brands fa-github" />
            </a>
        </div>
    </div>
    <div class="bg-crust row justify-start align-center" v-else>
        <div class="p-lg px-xl row gap-lg grow">
            <font-awesome-icon icon="fa-solid fa-code" class="text-xl" />
            <span class="grow"></span>
            <font-awesome-icon icon="fa-solid fa-bars" class="text-xl" />
        </div>
    </div>
    <div class="right grow">
        <div class="menu p-md text-sm">{{ HanselGretel() }} $HanselGretel</div>
        <div class="main grow">
            <RouterView />
        </div>
        <div class="foot p-md">$footer</div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import './assets/styles/_global.scss';
</style>
