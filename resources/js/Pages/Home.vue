<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import { Head, Link } from '@inertiajs/vue3';
import Hero from '@/Components/Common/Hero.vue';
import PropertyList from '@/Components/Properties/PropertyList.vue';
import ListTitle from '@/Components/Properties/ListTitle.vue';
import FeaturedBuilders from '@/Components/Builders/FeaturedBuilders.vue'
import FeaturedCities from '@/Components/Cities/FeaturedCities.vue'

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
        <div class="container px-16 max-w-7xl mx-auto">
            <div class="mt-16" v-for="section in sections" :key="section.title">
                <ListTitle :title="section.title" :description="section.description"/>
                <PropertyList />
            </div>
            <div class="mt-16">
                <FeaturedBuilders />
            </div>
            <div class="mt-16">
                <FeaturedCities />
            </div>
            <div class="container mt-16 pb-4">
                <div class="grid grid-cols-1 text-center">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Have Question ? Get in touch!</h3>

                    <p class="text-slate-400 max-w-xl mx-auto">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                
                    <div class="mt-6">
                        <a href="contact.html" class="px-4 py-2 inline-block bg-green-600 hover:bg-green-700 text-white rounded-md"><i class="uil uil-phone align-middle me-2"></i> Contact us</a>
                    </div>
                </div><!--end grid-->
            </div>
        </div>
    </AppLayout>
</template>

<style>
</style>
