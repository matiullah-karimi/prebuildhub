<script setup>
import { computed } from 'vue';
import VuePictureSwipe from 'vue3-picture-swipe';

const props = defineProps({
    images: {
        type: Array,
        required: true
    }
})

const items = computed(() => {
    return props.images.map(image => {
        return {
            src: image,
            thumbnail: image,
            w: 1200,
            h: 900,
            alt: 'Property Image'
        }
    })
})

</script>
<template>
    <!-- <vue-picture-swipe :items="items"></vue-picture-swipe> -->
    <div class="container grid grid-cols-3 gap-2 mx-auto py-4">
        <div v-for="image in images" :key="image" class="first:col-span-3">
            <img class="rounded" :src="image" alt="image">
        </div>
    </div>
</template>