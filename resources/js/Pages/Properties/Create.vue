<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import TextArea from '@/Components/TextArea.vue';
import { computed } from 'vue';

const form = useForm({
    title: '',
    price: '',
    description: '',
    address_line_1: '',
    address_line_2: '',
    city_id: '',
    zip_code: '',
    province_id: '',
    area: '',
    bedroom: '',
    bathroom: '',
    floor: '',
    images: [],
    aminities: [],
    property_status_id: '',
    property_type_id: '',
    featured: false,
    upcoming: false,
});

const props = defineProps({
    aminities: Array,
    types: Array,
    statuses: Array,
    provinces: Array,
})

const province = computed(() => {
    return props.provinces.find(province => province.id == form.province_id);
});

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
                    <InputLabel for="bedrooms" value="Bedrooms" />
                    <TextInput id="bedrooms" v-model="form.bedroom" type="number" class="mt-1 block w-full" required autofocus autocomplete="bedrooms" />
                    <InputError class="mt-2" :message="form.errors.bedroom" />
                </div>

                <div>
                    <InputLabel for="bathrooms" value="Bathrooms" />
                    <TextInput id="bathrooms" v-model="form.bathroom" type="number" class="mt-1 block w-full" required autofocus autocomplete="bathrooms" />
                    <InputError class="mt-2" :message="form.errors.bathroom" />
                </div>

                <div>
                    <InputLabel for="price" value="Price" />
                    <TextInput id="price" v-model="form.price" type="number" class="mt-1 block w-full" required autofocus autocomplete="price" />
                    <InputError class="mt-2" :message="form.errors.price" />
                </div>

                <div>
                    <InputLabel for="area" value="Area(sqft)" />
                    <TextInput id="area" v-model="form.area" type="number" class="mt-1 block w-full" required autofocus autocomplete="area" />
                    <InputError class="mt-2" :message="form.errors.area" />
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
                    <InputLabel for="province_id" value="Province" />
                    <select v-model="form.province_id" class="rounded border-gray-300 w-full mt-1">
                        <option value="">Select Province</option>
                        <option v-for="province in provinces" :key="province.id" :value="province.id">{{ province.name }}</option>
                    </select>
                    <InputError class="mt-2" :message="form.errors.province_id" />
                </div>

                <div v-if="province">
                    <InputLabel for="city_id" value="City" />
                    <select v-model="form.city_id" class="rounded border-gray-300 w-full mt-1">
                        <option value="">Select City</option>
                        <option v-for="city in province.cities" :key="city.id" :value="city.id">{{ city.name }}</option>
                    </select>
                    <InputError class="mt-2" :message="form.errors.city_id" />
                </div>

                <div>
                    <InputLabel for="zip_code" value="Zip Code" />
                    <TextInput id="zip_code" v-model="form.zip_code" type="text" class="mt-1 block w-full" required autofocus autocomplete="zip_code" />
                    <InputError class="mt-2" :message="form.errors.zip_code" />
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
                    <InputLabel for="property_type_id" value="Property Type" />
                    <select id="property_type_id" v-model="form.property_type_id" class="mt-1 block w-full border-gray-300 rounded" required autofocus>
                        <option value="">Select Type</option>
                        <option v-for="type in types" :key="type.id" :value="type.id">{{ type.title }}</option>
                    </select>
                    <InputError class="mt-2" :message="form.errors.property_type_id" />
                </div>

                <div>
                    <InputLabel for="property_status_id" value="Property Status" />
                    <select id="property_status_id" v-model="form.property_status_id" class="mt-1 block w-full border-gray-300 rounded" required autofocus>
                        <option value="">Select Status</option>
                        <option v-for="status in statuses" :key="status.id" :value="status.id">{{ status.title }}</option>
                    </select>
                    <InputError class="mt-2" :message="form.errors.property_status_id" />
                </div>

                <div>
                    <InputLabel for="featured" value="Featured" />
                    <Checkbox id="featured" v-model="form.featured" type="checkbox" /> 
                    <InputError class="mt-2" :message="form.errors.featured" />
                </div>

                <div>
                    <InputLabel for="upcoming" value="Upcoming" />
                    <Checkbox id="upcoming" v-model="form.upcoming" type="checkbox" /> 
                    <InputError class="mt-2" :message="form.errors.upcoming" />
                </div>

                <div>
                    <InputLabel for="aminities" value="Aminities" />
                    <div class="flex gap-2 flex-wrap">
                        <div v-for="aminitiy of aminities" :key="aminitiy.id" class="flex gap-1 items-center">
                            <input type="checkbox" :value="`${aminitiy.id}`" id="aminities" v-model="form.aminities" /> 
                            <span class="text-sm">{{ aminitiy.title }}</span>
                        </div>
                    </div>
                    <InputError class="mt-2" :message="form.errors.aminities" />
                </div>

                <div class="flex items-center justify-end mt-4 col-span-2">
                    <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                        Create
                    </PrimaryButton>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
