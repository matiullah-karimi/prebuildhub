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
    name: '',
    email: '',
    password: '',
    password_confirmation: '',
    terms: false,
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>
    <AppLayout>
        <div class="container px-16 max-w-7xl mx-auto">
            <form @submit.prevent="submit" class="grid grid-cols-2 gap-8">
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
                    <InputLabel for="addres_line_1" value="addres_line_1" />
                    <TextInput id="addres_line_1" v-model="form.addres_line_1" type="text" class="mt-1 block w-full" required autofocus autocomplete="addres_line_1" />
                    <InputError class="mt-2" :message="form.errors.addres_line_1" />
                </div>

                <div>
                    <InputLabel for="addres_line_2" value="addres_line_2" />
                    <TextInput id="addres_line_2" v-model="form.addres_line_2" type="text" class="mt-1 block w-full" required autofocus autocomplete="addres_line_2" />
                    <InputError class="mt-2" :message="form.errors.addres_line_2" />
                </div>

                <div>
                    <InputLabel for="city" value="city" />
                    <TextInput id="city" v-model="form.city" type="text" class="mt-1 block w-full" required autofocus autocomplete="city" />
                    <InputError class="mt-2" :message="form.errors.city" />
                </div>

                <div>
                    <InputLabel for="zip_code" value="zip_code" />
                    <TextInput id="zip_code" v-model="form.zip_code" type="text" class="mt-1 block w-full" required autofocus autocomplete="zip_code" />
                    <InputError class="mt-2" :message="form.errors.zip_code" />
                </div>

                <div>
                    <InputLabel for="area" value="Area(sqft)" />
                    <TextInput id="area" v-model="form.area" type="text" class="mt-1 block w-full" required autofocus autocomplete="area" />
                    <InputError class="mt-2" :message="form.errors.area" />
                </div>

                <div>
                    <InputLabel for="bedrooms" value="bedrooms" />
                    <TextInput id="bedrooms" v-model="form.bedrooms" type="text" class="mt-1 block w-full" required autofocus autocomplete="bedrooms" />
                    <InputError class="mt-2" :message="form.errors.bedrooms" />
                </div>

                <div>
                    <InputLabel for="bathrooms" value="bathrooms" />
                    <TextInput id="bathrooms" v-model="form.bathrooms" type="text" class="mt-1 block w-full" required autofocus autocomplete="bathrooms" />
                    <InputError class="mt-2" :message="form.errors.bathrooms" />
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
