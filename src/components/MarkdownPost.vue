<script setup lang="ts">
// import Button from './Button.vue'

// const props = defineProps<{
//     post: {
//         title: string,
//         body: string,
//         timestamp: number,
//         image: string,
//         caption: string,
//         files: any[],
//         avatar: string,
//         author: string,
//         username: string,
//         link: string
//     }
// }>()

const postData = defineProps<{
    title?: string,
    author?: string,
    avatar?: string,
    date?: string,
    email?: string[],
    github?: string[],
    body?: string
}>()

// const parseDate = (datestamp: number) => {
//     let parsedObject = new Date(datestamp)
//     return parsedObject.toISOString()
// }

</script>

<template>
{{ postData ? postData : "" }}
</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';
</style>