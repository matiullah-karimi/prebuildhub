<script setup>
    import TextInput from '@/Components/TextInput.vue';
    import PrimaryButton from '@/Components/PrimaryButton.vue';
    import { useForm } from '@inertiajs/vue3';

    defineProps({
        types: Array,
    });

    const form = useForm({
        type: null,
        location: null,
        budget: null,
    });

    const search = () => {
        form.get(route('properties.index'));
    };
</script>

<template>
    <div class="m-4 lg:m-0">
        <div class="py-2 px-2">
            <form class="flex gap-2" @submit.prevent="search">
                <div class="w-full">
                    <div>
                        <select id="property_type_id" v-model="form.type" class="block w-full border-gray-300 rounded" required autofocus>
                            <option :value="null">Property Type</option>
                            <option v-for="type in types" :key="type.id" :value="type.id">{{ type.title }}</option>
                        </select>
                    </div>
                </div>
                <div class="w-full">
                    <TextInput v-model="form.location" type="text" class="w-full" Placeholder="Location" />
                </div>
                <div class="w-full">
                    <TextInput v-model="form.budget" type="number" class="w-full" placeholder="Budget" />
                </div>
                <div>
                    <PrimaryButton class="h-10" type="submit">Search</PrimaryButton>
                </div>
            </form>
        </div>
    </div>
</template>

<style></style>
