<script setup>
defineProps({
    title: String,
    description: String,
    url: String,
})
</script>


<template>
    <div class="flex justify-between items-end">
        <div class="grid grid-cols-1 text-left">
            <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{{ title }}</h3>
            <p class="text-slate-400 max-w-xl">{{ description }}</p>
        </div>
        <div v-if="url">
            <a class="text-blue-600 text-lg cursor-pointer" :href="url">View All</a>
        </div>
    </div>
</template>