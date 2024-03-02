<script setup>
    import AppLayout from '@/Layouts/AppLayout.vue';
    import Pagination from '@/Components/Common/Pagination.vue';
    import axios from 'axios';
import { useForm } from '@inertiajs/vue3';

    defineProps({
        contacts: {
            type: Object,
            required: true,
        },
        categories: Array
    });

    const form = useForm({
        category: ''
    });

    const fields = [
        {
            key: 'name',
            label: 'Name',
        },
        {
            key: 'email',
            label: 'Email',
        },
        {
            key: 'phone',
            label: 'Phone'
        },
        {
            key: 'subject',
            label: 'Subject',
        }
    ];

    const updateCategory = (contact) => {
        axios.put(`/contacts/${contact.id}/category?category=${contact.category}`)
        .then(res => console.log)
    }

    const search = () => {
        form.get('/contacts')
    }
</script>

<template>
    <AppLayout title="Contacts">
        <div class="container max-w-7xl mx-auto p-16">
            <h1 class="text-2xl font-bold">Contacts List</h1>
            <select name="" id="" @change="search" v-model="form.category">
                <option :value="undefined">All</option>
                <option v-for="category in categories" :key="category.id" :value="category.name">{{ category.name }}</option>
            </select>
            <table class="border-collapse table-auto w-full text-sm mt-4">
                <thead>
                    <tr>
                        <th v-for="field in fields" :key="field.key" class="border-b dark:border-slate-600 font-medium p-4 text-left">{{ field.label }}</th>
                        <th class="border-b dark:border-slate-600 font-medium p-4 text-left">Category</th>
                    </tr>
                </thead>
                <tbody class="bg-white dark:bg-slate-800">
                    <tr v-for="contact in contacts.data" :key="contact.id">
                        <td v-for="field in fields" :key="field.key" class="border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400">{{ contact[field.key] }}</td>
                        <td>
                            <select v-model="contact.category" @change="updateCategory(contact)">
                                <option v-for="category in categories" :key="category.id" :value="category.name">{{ category.name }}</option>
                            </select>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="mt-4">
                <Pagination :links="contacts.links" />
            </div>
        </div>
    </AppLayout>
</template>