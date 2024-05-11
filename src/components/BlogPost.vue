<script setup lang="ts">

const props = defineProps<{
    post: {
        title: string,
        body: string,
        timestamp: number,
        image: string,
        files: any[],
        avatar: string,
        author: string,
        username: string,
        link: string
    }
}>()

const parseDate = (datestamp: number) => {
    let parsedObject = new Date(datestamp)
    return parsedObject.toISOString()
}

</script>

<template>
<div class="font-retina card rounded-sm shrink shadow">
    <div v-if="props.post.image" class="post-image filter-bw">
        <img :src="props.post.image" />
    </div>

    <template v-if="props.post.avatar">
        <div class="post-avatar p-md">
            <img :src="props.post.avatar" class="round" />
            <div class="post-metadata">
                <div class="post-author text-lg"><strong>{{ props.post.author }}</strong></div>
                <div class="post-username">
                    <template v-if="props.post.link">
                        <a :href="props.post.link">{{ props.post.username }}</a>
                    </template>
                    <template v-else>{{ props.post.username }}</template>
                </div>
            </div>
        </div>
    </template>
    <template v-else>
        <div class="post-metadata p-xl">
            <div class="post-author text-lg"><strong>{{ props.post.author }}</strong></div>
            <div class="post-username">
                <template v-if="props.post.link">
                    <a :href="props.post.link">{{ props.post.username }}</a>
                </template>
                <template v-else>{{ props.post.username }}</template>
            </div>
        </div>
    </template>

    <div class="post-data p-lg">
        <div class="post-title text-subtext1 text-lg">{{ props.post.title }}</div>
        <div class="post-timestamp text-subtext0 text-sm">{{ parseDate(props.post.timestamp) }}</div>
        <div class="post-body gutters-v text-text">{{ props.post.body }}</div>
        <div class="post-actions">
            <template v-for="file in props.post.files">
                <div class="post-file bg-blue p-xs rounded-sm text-mantle">{{ file }}</div>
            </template>
        </div>
    </div>
</div>

</template>

<style lang="scss" scoped>
@import '../assets/styles/_global.scss';

.post-image {
    img {
        max-width: 100%;
        border-top-left-radius: 0.5em;
        border-top-right-radius: 0.5em;

        &.round {
            clip-path: circle(40%);
        }
    }
}

.post-avatar {
    flex-direction: row;
    justify-content: start; align-items: center;
    gap: 1em;

    img {
        max-width: 64px; max-height: 64px;

        &.round {
            clip-path: circle(40%);
        }
    }
}

.post-metadata {
    justify-content: start; align-items: start;
}

.post-data {
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    border-top: 2px solid rgba(0,0,0,0.1);
}

.post-author { color: $text; }
.post-username { color: $overlay1; }
// .post-title { color: $subtext1; }
// .post-body { color: salmon; }
// .post-timestamp { color: turquoise; }

.post-actions {
    flex-direction: row;
    gap: 0.5em;
}
</style>