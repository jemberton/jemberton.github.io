<script setup lang="ts">
import { useGlobalState } from './stores/globalState'
const globalState = useGlobalState()

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

</script>

<template>
<div class="container">
    <div
        v-if="globalState.navigationPanel && globalState.windowSize.width < 1024"
        class="fixed z-9 t-0 b-0 l-0 py-lg px-xl bg-crust"
    >
        <span @click="() => { globalState.navigationPanel = !globalState.navigationPanel }" class="z-10">
            <font-awesome-icon icon="fa-solid fa-bars" class="text-xl pointer" />
        </span>
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
    <div class="left" v-if="globalState.windowSize.width >= 1024">
        <div class="branding p-md">
            <font-awesome-icon icon="fa-solid fa-code" class="text-xl" />
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
        <div class="py-lg px-xl row gap-lg grow align-center">
            <span @click="() => { globalState.navigationPanel = !globalState.navigationPanel }">
                <font-awesome-icon icon="fa-solid fa-bars" class="text-xl pointer" />
            </span>
            <span class="grow"></span>
            <font-awesome-icon icon="fa-solid fa-code" class="text-xl text-lavender" />
            <span class="grow"></span>
            <a href="https://github.com/jemberton" title="jemberton's github" class="flex">
                <font-awesome-icon icon="fa-brands fa-github" class="svg-sm" />
            </a>
        </div>
    </div>
    <div class="right grow">
        <div class="menu p-md text-sm row gap-sm align-center">
            <font-awesome-icon icon="fa-solid fa-location-arrow fa-fw" class="text-md text-overlay2" />
            <template v-for="(item, index) in globalState.hanselGretel">
                <a v-if="item.url" :href="item.url" :title="item.name" class="text-text">{{ item.name }}</a>
                <div v-else :title="item.name">{{ item.name }}</div>
                <div v-if="index < globalState.hanselGretel.length - 1">
                    <font-awesome-icon icon="fa-solid fa-arrow-right-long fa-fw" class="text-surface1" />
                </div>
            </template>
        </div>
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
