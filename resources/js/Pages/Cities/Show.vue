<script setup>
    import AppLayout from '@/Layouts/AppLayout.vue';
    import PropertyList from '@/Components/Properties/PropertyList.vue';

    defineProps({
        city: {
            type: Object,
            required: true
        }
    })
</script>

<template>
    <AppLayout :title="city.name">
        <div class="container">
            <div class="bg-white bg-cover bg-center h-96 flex justify-center items-end p-16" :style="{'background-image': `url(${city.image})`}">
                <h1 class="text-5xl text-white font-extrabold">{{ city.name }}</h1>
            </div>
            <div class="max-w-7xl mx-auto px-16 py-8">
                <PropertyList :data="city.properties"/>
            </div>
        </div>
    </AppLayout>
</template>