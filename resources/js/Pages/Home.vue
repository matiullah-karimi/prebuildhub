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
        data: props.properties.featured,
        url: '/properties?featured=1'
    },
    {
        title: 'Upcoming Projects',
        description: 'A great plateform to buy, sell and rent your properties without any agent or commisions.',
        data: props.properties.upcoming,
        url: '/properties?upcoming=1'
    },
    {
        title: 'Sold Out Projects',
        description: 'A great plateform to buy, sell and rent your properties without any agent or commisions.',
        data: props.properties.sold,
        url: '/properties?sold=1'
    },
]
</script>

<template>
    <AppLayout title="Home">
        <Hero />
        <div class="container px-4 lg:px-16 lg:max-w-7xl mx-auto">
            <div class="mt-8 lg:mt-16" v-for="section in sections" :key="section.title">
                <ListTitle :title="section.title" :description="section.description" :url="section.url"/>
                <PropertyList :data="section.data"/>
                <a class="lg:hidden text-blue-600 text-lg cursor-pointer mt-4" :href="section.url">View All</a>
            </div>
            <div class="mt-16">
                <FeaturedBuilders :builders="builders"/>
            </div>
            <div class="mt-16">
                <FeaturedCities :cities="cities"/>
            </div>
            <div class="container mt-16 pb-4">
                <div class="grid grid-cols-1">
                    <ListTitle title="Have any Question?" description="Please contact us by filling the below form and we’ll get back to you as soon as possible."/>

                    <div class="mt-6 w-full lg:w-2/4 text-left">
                        <ContactForm />
                    </div>
                </div><!--end grid-->
            </div>
        </div>
    </AppLayout>
</template>

<style>
</style>
