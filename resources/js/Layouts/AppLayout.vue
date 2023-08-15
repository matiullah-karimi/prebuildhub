<script setup>
import { ref } from 'vue';
import { Head, Link, router } from '@inertiajs/vue3';
import Banner from '@/Components/Banner.vue';
import Header from '@/Components/Common/Header.vue';

defineProps({
    title: String,
});


const logout = () => {
    router.post(route('logout'));
};
</script>

<template>
    <div>
        <Head :title="title" />

        <Banner />

        <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
            <Header />
            <!-- Page Content -->
            <main>
                <slot />
            </main>
        </div>
    </div>
</template>
