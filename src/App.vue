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
<div
    v-if="globalState.screenOverlayPanel && globalState.windowSize.width < 1024" class="screen-overlay z-2"
    @click="() => { globalState.navigationPanel = !globalState.navigationPanel; globalState.screenOverlayPanel = globalState.navigationPanel }"
/>
<div
    v-if="globalState.windowScroll.y > 0"
    class="screen-scroll rounded-full pointer hover-mauve bg-surface0 shadow-high justify-center align-center z-1"
    @click="() => globalState.windowScroll.y = 0"
    title="Scroll to top"
    v-motion-fade
>
    <font-awesome-icon icon="fa-solid fa-caret-up fa-fw" class="text-xxl" />
</div>
<div class="container">
    <div
        v-if="globalState.navigationPanel && globalState.windowSize.width < 1024"
        class="fixed z-9 t-0 b-0 l-0 bg-crust border-r-thick border-mantle nav-width"
        v-motion-slide-left
    >
        <span
            @click="() => { globalState.navigationPanel = !globalState.navigationPanel; globalState.screenOverlayPanel = globalState.navigationPanel }"
            class="py-lg px-xl"
        >
            <font-awesome-icon icon="fa-solid fa-bars" class="text-xl pointer" />
        </span>
        <div class="p-none mt-xxl grow">
            <template v-for="navitem of navigation">
                <RouterLink
                    :to="navitem.url"
                    class="flex row p-sm gap-md border-l-thicker justify-start align-center nav-link"
                >
                    <div v-if="navitem.icon !== ''">
                        <font-awesome-icon :icon="navitem.icon" />
                    </div>
                    <div>{{ navitem.title }}</div>
                </RouterLink>
            </template>
        </div>
    </div>
    <div class="left" v-if="globalState.windowSize.width >= 1024">
        <div class="py-lg px-xl">
            <font-awesome-icon icon="fa-solid fa-code" class="text-xl text-lavender" />
        </div>
        <div class="p-none grow mt-xxl">
            <template v-for="navitem of navigation">
                <RouterLink
                    :to="navitem.url"
                    class="flex row p-sm gap-md border-l-thicker justify-start align-center nav-link"
                >
                    <div v-if="navitem.icon !== ''">
                        <font-awesome-icon :icon="navitem.icon" />
                    </div>
                    <div>{{ navitem.title }}</div>
                </RouterLink>
            </template>
        </div>
        <div class="text-lg p-md justify-center align-center">
            <a href="https://github.com/jemberton" title="jemberton's github" class="text-text">
                <font-awesome-icon icon="fa-brands fa-github" />
            </a>
        </div>
    </div>
    <div class="bg-crust row justify-start align-center" v-else>
        <div class="py-lg px-xl row gap-lg grow align-center">
            <span @click="() => { globalState.navigationPanel = !globalState.navigationPanel; globalState.screenOverlayPanel = globalState.navigationPanel }">
                <font-awesome-icon icon="fa-solid fa-bars" class="text-xl pointer" />
            </span>
            <span class="grow"></span>
            <font-awesome-icon icon="fa-solid fa-code" class="text-xl text-lavender" />
            <span class="grow"></span>
            <a href="https://github.com/jemberton" title="jemberton's github" class="flex text-text">
                <font-awesome-icon icon="fa-brands fa-github" class="svg-sm" />
            </a>
        </div>
    </div>
    <div class="right grow graph-paper">
        <div v-if="globalState.prideRainbow" class="rainbow"></div>
        <div class="menu p-md text-sm row gap-xs align-center border-none border-b-thin border-crust">
            <font-awesome-icon icon="fa-solid fa-location-arrow fa-fw" class="text-md text-overlay2" />
            <template v-for="(item, index) in globalState.hanselGretel">
                <RouterLink v-if="item.url" :to="item.url" :title="item.name" class="text-text capitalize ">{{ item.name }}</RouterLink>
                <div v-else :title="item.name">{{ item.name }}</div>
                <div v-if="index < globalState.hanselGretel.length - 1">
                    <font-awesome-icon icon="fa-solid fa-arrow-right-long fa-fw" class="text-surface1" />
                </div>
            </template>
        </div>
        <div class="main grow">
            <RouterView />
        </div>
        <div class="bg-mantle text-overlay1 p-md border-none border-t-thin border-crust">
            <div>footer</div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import './assets/styles/_global.scss';
</style>
