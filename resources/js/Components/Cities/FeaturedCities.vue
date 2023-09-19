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
        <div class="grid grid-cols-4 gap-4 mt-6">
            <CityItem  v-for="city in cities" :city="city" :key="city.name"/>
        </div>
        <a class="mt-4 lg:hidden lg:mt-0 text-blue-600 text-lg cursor-pointer" :href="url">View All</a>
    </div>
</template>