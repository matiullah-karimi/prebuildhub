<script setup>
import AppLayout from '@/Layouts/AppLayout.vue'
import { Head, Link, useForm } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

defineProps({
    provinces: Array,
});

const form = useForm({
    name: '',
    image: '',
    province_id: '',
});

const submit = () => {
    form.post(route('cities.store'), {
        onFinish: () => form.reset('name', 'image'),
    });
};
</script>

<template>
    <AppLayout title="Create City">
        <div class="max-w-7xl mx-auto px-16 py-8">
            <form @submit.prevent="submit" class="w-1/2 mx-auto">
                <div>
                    <InputLabel for="name" value="Name" />
                    <TextInput id="name" v-model="form.name" type="text" class="mt-1 block w-full" required autofocus autocomplete="name" />
                    <InputError class="mt-2" :message="form.errors.name" />
                </div>

                <div class="mt-4">
                    <InputLabel for="province_id" value="Province" />
                    <select v-model="form.province_id" class="rounded border-gray-300 w-full mt-1">
                        <option value="">Select Province</option>
                        <option v-for="province in provinces" :key="province.id" :value="province.id">{{ province.name }}</option>
                    </select>
                    <InputError class="mt-2" :message="form.errors.province_id" />
                </div>

                <div class="mt-4">
                    <InputLabel for="images" value="Image" />
                    <label class="mt-1 flex items-center px-4 py-2 bg-white text-gray-800 rounded-lg border border-gray-300 cursor-pointer">
                        <input id="images" @input="form.image = $event.target.files[0]" accept="image/jpeg,image/jpg,image/png" type="file" class="hidden" required/>
                        <span>Upload Image</span>
                    </label>
                    <InputError class="mt-2" :message="form.errors.image" />
                </div>

                <div class="flex items-center justify-end mt-4">
                    <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Create
                    </PrimaryButton>
                </div>
            </form>
        </div>
    </AppLayout>
</template>