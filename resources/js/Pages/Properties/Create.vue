<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import TextArea from '@/Components/TextArea.vue';

const form = useForm({
    title: '',
    price: '',
    description: '',
    addres_line_1: '',
    addres_line_2: '',
    city: '',
    zip_code: '',
    area: '',
    bedrooms: '',
    bathrooms: '',
    images: [],
    aminities: [],
});

defineProps({
    aminities: Array,
    types: Array,
    statuses: Array,
})

const submit = () => {
    form.post(route('properties.store'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <AppLayout title="Add Property">
        <div class="container px-16 py-8 max-w-7xl mx-auto">
            <h2 class="text-lg font-semibold">Create Property</h2>
            <form @submit.prevent="submit" class="grid grid-cols-2 gap-4 mt-8">
                <div>
                    <InputLabel for="title" value="Title" />
                    <TextInput id="title" v-model="form.title" type="text" class="mt-1 block w-full" required autofocus autocomplete="title" />
                    <InputError class="mt-2" :message="form.errors.title" />
                </div>

                <div>
                    <InputLabel for="price" value="Price" />
                    <TextInput id="price" v-model="form.price" type="number" class="mt-1 block w-full" required autofocus autocomplete="price" />
                    <InputError class="mt-2" :message="form.errors.price" />
                </div>
                
                <div class="col-span-2">
                    <InputLabel for="description" value="Description" />
                    <TextArea id="description" v-model="form.description" type="number" class="mt-1 block w-full" required autofocus autocomplete="description" />
                    <InputError class="mt-2" :message="form.errors.description" />
                </div>

                <div>
                    <InputLabel for="address_line_1" value="Address Line 1" />
                    <TextInput id="address_line_1" v-model="form.address_line_1" type="text" class="mt-1 block w-full" required autofocus autocomplete="address_line_1" />
                    <InputError class="mt-2" :message="form.errors.address_line_1" />
                </div>

                <div>
                    <InputLabel for="address_line_2" value="Address Line 2" />
                    <TextInput id="address_line_2" v-model="form.address_line_2" type="text" class="mt-1 block w-full" required autofocus autocomplete="address_line_2" />
                    <InputError class="mt-2" :message="form.errors.address_line_2" />
                </div>

                <div>
                    <InputLabel for="city" value="City" />
                    <TextInput id="city" v-model="form.city" type="text" class="mt-1 block w-full" required autofocus autocomplete="city" />
                    <InputError class="mt-2" :message="form.errors.city" />
                </div>

                <div>
                    <InputLabel for="zip_code" value="Zip Code" />
                    <TextInput id="zip_code" v-model="form.zip_code" type="text" class="mt-1 block w-full" required autofocus autocomplete="zip_code" />
                    <InputError class="mt-2" :message="form.errors.zip_code" />
                </div>

                <div>
                    <InputLabel for="area" value="Area(sqft)" />
                    <TextInput id="area" v-model="form.area" type="number" class="mt-1 block w-full" required autofocus autocomplete="area" />
                    <InputError class="mt-2" :message="form.errors.area" />
                </div>

                <div>
                    <InputLabel for="bedrooms" value="Bedrooms" />
                    <TextInput id="bedrooms" v-model="form.bedrooms" type="number" class="mt-1 block w-full" required autofocus autocomplete="bedrooms" />
                    <InputError class="mt-2" :message="form.errors.bedrooms" />
                </div>

                <div>
                    <InputLabel for="bathrooms" value="Bathrooms" />
                    <TextInput id="bathrooms" v-model="form.bathrooms" type="number" class="mt-1 block w-full" required autofocus autocomplete="bathrooms" />
                    <InputError class="mt-2" :message="form.errors.bathrooms" />
                </div>

                <div>
                    <InputLabel for="images" value="Images" />
                    <label class="mt-1 flex items-center px-4 py-2 bg-white text-gray-800 rounded-lg border border-gray-300 cursor-pointer">
                        <input id="images" @input="form.images = $event.target.files" accept="image/jpeg,image/jpg,image/png" type="file" class="hidden" multiple required/>
                        <span>Upload Images</span>
                    </label>
                    <InputError class="mt-2" :message="form.errors.images" />
                </div>

                <div>
                    <InputLabel for="aminities" value="Aminities" />
                    <div class="flex gap-2 flex-wrap">
                        <div v-for="aminitiy of aminities" :key="aminitiy.id" class="flex gap-1 items-center">
                            <Checkbox :value="`${aminitiy.id}`" id="aminities" v-model="form.aminities" type="checkbox" /> 
                            <span class="text-sm">{{ aminitiy.title }}</span>
                        </div>
                    </div>
                    <InputError class="mt-2" :message="form.errors.aminities" />
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
