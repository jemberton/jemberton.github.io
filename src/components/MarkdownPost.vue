<script setup lang="ts">
const postData = defineProps<{
    data: {
        title?: string,
        author?: string,
        avatar?: string,
        date?: string,
        email?: string[],
        github?: string[],
        body?: string
    }
}>()

</script>

<template>
    <template v-if="postData.data.body">
        <div class="bg-mantle rounded border-thinner border-crust shadow gutters-v pb-sm">
            <template v-if="postData.data.author || postData.data.date">
                <div class="md-header">
                    <div class="row align-center gap-md p-md border-thinner border-b-crust">
                        <template v-if="postData.data.avatar">
                            <img :src="postData.data.avatar" class="avatar circle"/>
                        </template>
                        <div class="justify-center align-start gap-xxs">
                            <template v-if="postData.data.author">
                                <div class="author text-lg">{{ postData.data.author }}</div>
                            </template>
                            <div class="row align-center gap-md">
                                <template v-if="postData.data.github">
                                    <div v-if="postData.data.github.length > 1" class="text-xl">
                                        <a :href="postData.data.github[1]" :title="'Github : ' + postData.data.github[0]" class="text-green">
                                            <font-awesome-icon icon="fa-brands fa-square-github" />
                                        </a>
                                    </div>
                                    <div v-else class="text-sm text-subtext1">{{ postData.data.github }}</div>
                                </template>
                                <template v-if="postData.data.email">
                                    <div v-if="postData.data.email.length > 1" class="text-lg">
                                        <a :href="'mailto:' + postData.data.email[1]" :title="postData.data.email[0]" class="text-rosewater">
                                            <font-awesome-icon icon="fa-solid fa-paper-plane" />
                                        </a>
                                    </div>
                                    <div v-else></div>
                                </template>
                            </div>
                            <template v-if="postData.data.date">
                                <div class="datetime text-overlay1 text-md">{{ postData.data.date }}</div>
                            </template>
                        </div>
                    </div>
                    <div class="p-md">
                        <div class="title font-bold text-xxl">{{ postData.data.title }}</div>
                    </div>
                </div>
            </template>
            <div v-html="postData.data.body"></div>
        </div>
    </template>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';
</style>