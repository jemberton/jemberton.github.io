<script setup lang="ts">
import { useGlobalState } from '../stores/globalState'

const globalState = useGlobalState()
globalState.hanselGretel = [{ name: 'Projects', url: `/projects` }]
globalState.navigationPanel = false
globalState.screenOverlayPanel = false
</script>

<template>
<div class="grow" :class="globalState.windowSize.width < 1024 ? 'w-100 p-md' : 'w-80 p-md'">
    <div class="code row gap-md p-md rounded-xs bg-crust">
        <span class="text-green">jemberton@github ~$</span>
        <span>echo $PROJECTS</span>
    </div>
    <div class="mt-md">projects</div>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';
</style>