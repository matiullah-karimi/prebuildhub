<script setup>
    import PropertyItem from '@/Components/Properties/PropertyItem.vue';
    import PropertySearch from '@/Components/Properties/PropertySearch.vue';
    import AppLayout from '@/Layouts/AppLayout.vue';
    import Pagination from '@/Components/Common/Pagination.vue';

    defineProps({
        properties: {
            type: Object,
            required: true,
        },
    });
</script>

<template>
    <app-layout title="Properties List">
        <div class="mt-4">
            <PropertySearch />
        </div>
        <section class="px-4 py-4 bg-gray-200 lg:px-20">
            <div class="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:mt-20">
                <div v-for="property in properties.data" :key="property.id">
                    <PropertyItem :property="property"/>
                </div>
            </div>
            <pagination :links="properties.links"/>
        </section>
    </app-layout>
</template>
