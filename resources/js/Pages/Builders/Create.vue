<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import AppLayout from '@/Layouts/AppLayout.vue'
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const form = useForm({
    name: '',
    email: '',
    password: '',
    image: '',
});

const submit = () => {
    form.post(route('builders.store'), {
        onFinish: () => form.reset('password'),
    });
};
</script>

<template>
    <AppLayout title="Add Builder">
        <div class="max-w-7xl mx-auto px-16 py-8">
            <form @submit.prevent="submit" class="w-1/2 mx-auto">
                <div>
                    <InputLabel for="name" value="Name" />
                    <TextInput
                        id="name"
                        v-model="form.name"
                        type="text"
                        class="mt-1 block w-full"
                        required
                        autofocus
                        autocomplete="name"
                    />
                    <InputError class="mt-2" :message="form.errors.name" />
                </div>
    
                <div class="mt-4">
                    <InputLabel for="email" value="Email" />
                    <TextInput
                        id="email"
                        v-model="form.email"
                        type="email"
                        class="mt-1 block w-full"
                        required
                        autocomplete="username"
                    />
                    <InputError class="mt-2" :message="form.errors.email" />
                </div>
    
                <div class="mt-4">
                    <InputLabel for="password" value="Password" />
                    <TextInput
                        id="password"
                        v-model="form.password"
                        type="password"
                        class="mt-1 block w-full"
                        required
                        autocomplete="new-password"
                    />
                    <InputError class="mt-2" :message="form.errors.password" />
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
                        Register
                    </PrimaryButton>
                </div>
            </form>
        </div>
    </AppLayout>
</template>
