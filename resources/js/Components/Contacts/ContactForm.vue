<script setup>
import { Link, useForm } from '@inertiajs/vue3';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import TextArea from '@/Components/TextArea.vue';

const props = defineProps({
    propertyId: {
        type: Number,
        required: false,
    },
});

const form = useForm({
    name: '',
    email: '',
    subject: '',
    message: '',
    property_id: props.propertyId,
});

const submit = () => {
    form.post(route('contacts.store'), {
        onFinish: () => form.reset(...Object.keys(form)),
    });
};
</script>

<template>
    <form @submit.prevent="submit" class="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div :class="{'col-span-2': propertyId}">
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

        <div :class="{'col-span-2': propertyId}">
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
            <InputLabel for="subject" value="Subject" />
            <TextInput
                id="subject"
                v-model="form.subject"
                type="text"
                class="mt-1 block w-full"
                required
                autocomplete="subject"
            />
            <InputError class="mt-2" :message="form.errors.subject" />
        </div>

        <div class="col-span-2">
            <InputLabel for="message" value="Message" />
            <TextArea
                id="message"
                v-model="form.message"
                type="text"
                class="mt-1 block w-full"
                required
            />
            <InputError class="mt-2" :message="form.errors.message" />
        </div>

        <div class="">
            <PrimaryButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Send Message
            </PrimaryButton>
        </div>
    </form>
</template>
