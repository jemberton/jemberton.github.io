<script setup lang="ts">

const props = defineProps<{
    text?: string
}>()

</script>

<template>
<div class="bg-blue rounded-xs text-mantle text-sm button m-sm">
    <span class="p-xs">{{ props.text }}</span>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';
</style>