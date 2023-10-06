<script setup>
import Banner from '@/Components/Banner.vue';
import Header from '@/Components/Common/Header.vue';
import Footer from '@/Components/Common/Footer.vue';
import { Head } from '@inertiajs/vue3';


defineProps({
    title: String,
});

</script>

<template>
    <div>
        <Head :title="title" />

        <Banner />

        <div class="min-h-screen bg-gray-100">
            <Header />
            <!-- Page Content -->
            <main>
                <slot />
            </main>
            <Footer />
        </div>
    </div>
</template>
