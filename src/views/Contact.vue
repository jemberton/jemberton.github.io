<script setup lang="ts">
import { useGlobalState } from '../stores/globalState'

const globalState = useGlobalState()
globalState.hanselGretel = [{ name: 'Contact', url: '/contact' }]
globalState.navigationPanel = false
globalState.screenOverlayPanel = false
</script>

<template>
<div class="grow" :class="globalState.windowSize.width < 1024 ? 'w-100 p-md' : 'w-80 p-md'">
    <div class="code row gap-md p-md rounded-xs bg-crust border-thin border-base">
        <span class="text-green">jemberton@github ~$</span>
        <span>echo $CONTACT</span>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';
</style>