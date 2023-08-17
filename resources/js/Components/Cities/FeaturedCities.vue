<script setup>
import CityItem from '@/Components/Cities/CityItem.vue'
import { ref } from 'vue'

const cities = ref([
    { name: 'Toronto' },
    { name: 'Hamilton' },
    { name: 'Calgary' },
    { name: 'Whitby' },
])
</script>

<template>
    <div class="container">
        <h2 class="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">Search by City</h2>
        <div class="grid grid-cols-4 gap-4">
            <CityItem  v-for="city in cities" :city="city" :key="city.name"/>
        </div>
    </div>
</template>