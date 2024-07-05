<script setup lang="ts">
import { useGlobalState } from '../stores/globalState'

const globalState = useGlobalState()
globalState.hanselGretel = [{ name: 'Projects', url: `/projects` }]
globalState.navigationPanel = false
globalState.screenOverlayPanel = false

const dummyCards: { text: string, description?: string }[]= [
    { text: "Card 1", description: "This is card number 1" },
    { text: "Card 2", description: "This is card number 2" },
    { text: "Card 3", description: "This is card number 3" },
    { text: "Card 4", description: "This is card number 4" },
    { text: "Card 5", description: "This is card number 5" },
    { text: "Card 6", description: "This is card number 6" },
    { text: "Card 7", description: "This is card number 7" },
    { text: "Card 8", description: "This is card number 8" },
    { text: "Card 9", description: "This is card number 9" },
    { text: "Card 10", description: "This is card number 10" },
    { text: "Card 11", description: "This is card number 11" },
    { text: "Card 12", description: "This is card number 12" },
    { text: "Card 13", description: "This is card number 13" },
    { text: "Card 14", description: "This is card number 14" }
]

</script>

<template>
<div class="grow" :class="globalState.windowSize.width < 1024 ? 'w-100 p-md' : 'w-90 p-md'">
    <div class="mt-md flex row gap-xl flex-wrap justify-center">
        <div v-for="card in dummyCards" class="bg-base border-thin border-crust flex column shadow-none" style="max-width: 300px;">
            <div class="bg-red text-mantle">card top</div>
            <div class="bg-blue text-mantle">
                <span>{{ card.text }}</span>
                <span>{{ card.description }}</span>
            </div>
            <div class="bg-red text-mantle">card bottom</div>
        </div>
    </div>
</div>
</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';
</style>