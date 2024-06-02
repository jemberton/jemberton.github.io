<script setup lang="ts">
import { IMarkdownPost } from '../lib'

const postData = defineProps<{
    data: IMarkdownPost
}>()

</script>

<template>
    <template v-if="postData.data.body">
        <div class="paper-torn border-none gutters-v shadow-low rounded-t-xs font-retina">
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
                            <div class="row align-center gap-md" v-if="postData.data.github || postData.data.email">
                                <template v-if="postData.data.github">
                                    <div v-if="postData.data.github.length > 1" class="text-xl">
                                        <a :href="postData.data.github[1]" :title="'Github : ' + postData.data.github[0]" class="text-green">
                                            <font-awesome-icon icon="fa-brands fa-square-github" />
                                        </a>
                                    </div>
                                    <div v-else></div>
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
                    <div class="p-md pb-none">
                        <div class="title font-bold text-xxl m-font mb-none">{{ postData.data.title }}</div>
                    </div>
                </div>
            </template>
            <div v-html="postData.data.body" class="p-md"></div>
        </div>
    </template>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';
</style>