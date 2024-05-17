<script setup lang="ts">
import { ref } from 'vue'

import Button from './components/Button.vue'

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
    <div class="left">
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
    <div class="right grow">
        <div class="menu p-md text-sm">{{ HanselGretel() }}</div>
        <div class="main grow">
            <RouterView />
        </div>
        <div class="foot p-md"></div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import './assets/styles/_global.scss';
</style>
