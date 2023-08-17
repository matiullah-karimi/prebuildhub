<script setup>
defineProps({
    title: String,
    description: String
})
</script>


<template>
    <div class="grid grid-cols-1 pb-8 text-center">
        <h3 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">{{ title }}</h3>

        <p class="text-slate-400 max-w-xl mx-auto">{{ description }}</p>
    </div>
</template>