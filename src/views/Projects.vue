<script setup lang="ts">
import { useGlobalState } from '../stores/globalState'

const globalState = useGlobalState()
globalState.hanselGretel = [{ name: 'Projects', url: '/projects' }]
</script>

<template>
<div class="sheet" :class="globalState.windowSize.width < 1024 ? 'w-full px-xxl py-md' : 'w-80 p-md'">
    <div class="code row gap-md p-md rounded-xs bg-crust">
        <span class="text-green">jemberton@github ~$</span>
        <span>echo $PROJECTS</span>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';
</style>