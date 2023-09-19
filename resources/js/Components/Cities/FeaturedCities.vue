<script setup>
import CityItem from '@/Components/Cities/CityItem.vue'
import ListTitle from '@/Components/Properties/ListTitle.vue'

defineProps({
    cities: Array
})

</script>

<template>
    <div class="container">
        <ListTitle title="Search by City" description="Search for your preconstruction projects by city" url="/cities"/>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-6">
            <CityItem  v-for="city in cities" :city="city" :key="city.name"/>
        </div>
        <div class="lg:hidden mt-4 flex justify-center">
            <a class="text-blue-600 text-lg cursor-pointer" :href="url">View All</a>
        </div>
    </div>
</template>