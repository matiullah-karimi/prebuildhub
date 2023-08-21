<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Hero from '@/Components/Common/Hero.vue';
import PropertyList from '@/Components/Properties/PropertyList.vue';
import ListTitle from '@/Components/Properties/ListTitle.vue';
import FeaturedBuilders from '@/Components/Builders/FeaturedBuilders.vue'
import FeaturedCities from '@/Components/Cities/FeaturedCities.vue'
import ContactForm from '@/Components/Contacts/ContactForm.vue'

const props = defineProps({
    properties: Object,
    builders: Array,
    cities: Array,
})

const sections = [
    {
        title: 'Featured Projects',
        description: 'A great plateform to buy, sell and rent your properties without any agent or commisions.',
        data: props.properties.featured
    },
    {
        title: 'Upcoming Projects',
        description: 'A great plateform to buy, sell and rent your properties without any agent or commisions.',
        data: props.properties.upcoming
    },
    {
        title: 'Sold Out Projects',
        description: 'A great plateform to buy, sell and rent your properties without any agent or commisions.',
        data: props.properties.sold
    },
]
</script>

<template>
    <AppLayout title="Home">
        <Hero />
        <div class="container px-16 max-w-7xl mx-auto">
            <div class="mt-16" v-for="section in sections" :key="section.title">
                <ListTitle :title="section.title" :description="section.description"/>
                <PropertyList :data="section.data"/>
            </div>
            <div class="mt-16">
                <FeaturedBuilders />
            </div>
            <div class="mt-16">
                <FeaturedCities />
            </div>
            <div class="container mt-16 pb-4">
                <div class="grid grid-cols-1">
                    <h3 class="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-medium text-black dark:text-white">Have Question ? Get in touch!</h3>
                
                    <div class="mt-6 w-2/4 text-left">
                        <ContactForm />
                    </div>
                </div><!--end grid-->
            </div>
        </div>
    </AppLayout>
</template>

<style>
</style>
