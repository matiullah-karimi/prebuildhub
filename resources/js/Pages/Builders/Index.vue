<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import BuilderItem from '@/Components/Builders/BuilderItem.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import { useAuth } from '@/Composables/auth';

defineProps({
    builders: {
        type: Object,
        required: true,
    },
})

const { isAdmin } = useAuth();
</script>

<template>
    <AppLayout title="Builders">
        <div class="max-w-7xl mx-auto px-16 py-8">
            <div class="flex justify-between">
                <h2 class="text-2xl font-bold">Builders</h2>
                <PrimaryButton v-if="isAdmin" @click="$inertia.visit(route('builders.create'))">Create</PrimaryButton>
            </div>
            <div class="mt-8">
                <div class="grid grid-cols-4 gap-4">
                    <BuilderItem v-for="builder in builders.data" :key="builder.id" :builder="builder"/>
                </div>
            </div>
        </div>
    </AppLayout>
</template>
