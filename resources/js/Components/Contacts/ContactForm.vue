<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import TextArea from '@/Components/TextArea.vue';

const form = useForm({
    name: '',
    email: '',
    title: '',
    description: '',
    terms: false,
});

const submit = () => {
    form.post(route('register'), {
        onFinish: () => form.reset('title', 'description'),
    });
};
</script>

<template>
    <form @submit.prevent="submit" class="grid grid-cols-1 lg:grid-cols-2 gap-4">
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

        <div>
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

        <div class="col-span-2">
            <InputLabel for="title" value="Title" />
            <TextInput
                id="title"
                v-model="form.title"
                type="text"
                class="mt-1 block w-full"
                required
                autocomplete="title"
            />
            <InputError class="mt-2" :message="form.errors.title" />
        </div>

        <div class="col-span-2">
            <InputLabel for="description" value="Description" />
            <TextArea
                id="description"
                v-model="form.description"
                type="text"
                class="mt-1 block w-full"
                required
            />
            <InputError class="mt-2" :message="form.errors.description" />
        </div>

        <div class="">
            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Send Message
            </PrimaryButton>
        </div>
    </form>
</template>
