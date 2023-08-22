<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import CityItem from '@/Components/Cities/CityItem.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';

defineProps({
    cities: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <AppLayout title="Cities">
        <div class="max-w-7xl mx-auto px-16 py-8">
            <div class="flex justify-between">
                <h2 class="text-2xl font-bold">Cities</h2>
                <PrimaryButton @click="$inertia.visit(route('cities.create'))">Create</PrimaryButton>
            </div>
            <div class="mt-8">
                <div class="grid grid-cols-4 gap-4">
                    <CityItem v-for="city in cities.data" :key="city.id" :city="city"/>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
