<script setup>
import BuilderItem from '@/Components/Builders/BuilderItem.vue'
import { ref } from 'vue'

const builders = ref([
    { name: 'Builder 1' },
    { name: 'Builder 2' },
    { name: 'Builder 3' },
    { name: 'Builder 4' },
])
</script>

<template>
    <div class="container">
        <h2 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Search by Builder</h2>
        <div class="grid grid-cols-4 gap-4">
            <BuilderItem  v-for="builder in builders" :builder="builder" :key="builder.name"/>
        </div>
    </div>
</template>