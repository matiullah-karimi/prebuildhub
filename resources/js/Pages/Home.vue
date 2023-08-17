<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import Hero from '@/Components/Common/Hero.vue';
import PropertyList from '@/Components/Properties/PropertyList.vue';
import ListTitle from '@/Components/Properties/ListTitle.vue';
import FeaturedBuilders from '@/Components/Builders/FeaturedBuilders.vue'

const sections = [
    {
        title: 'Featured Projects',
        description: 'A great plateform to buy, sell and rent your properties without any agent or commisions.'
    },
    {
        title: 'Upcoming Projects',
        description: 'A great plateform to buy, sell and rent your properties without any agent or commisions.'
    },
    {
        title: 'Sold Out Projects',
        description: 'A great plateform to buy, sell and rent your properties without any agent or commisions.'
    },
]
</script>

<template>
    <AppLayout title="Home">
        <Hero />
        <div class="container px-16 max-w-7xl">
            <div class="mt-12" v-for="section in sections" :key="section.title">
                <ListTitle :title="section.title" :description="section.description"/>
                <PropertyList />
            </div>
            <div class="mt-12">
                <FeaturedBuilders />
            </div>
        </div>
    </AppLayout>
</template>

<style>
</style>
