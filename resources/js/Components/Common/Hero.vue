
<script setup>
import SearchBar from '@/Components/Common/SearchBar.vue';
</script>

<template>
    <div class="bg-white bg-cover bg-center" style="background-image:url('/images/hero1.jpg')">
        <div class="relative isolate px-6 pt-12 lg:px-8 backdrop-brightness-50">
            <div class="mx-auto max-w-2xl py-12">
                <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div class="relative rounded-full px-3 py-1 text-sm leading-6 text-white ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        A hub for finding your new property. <a href="#" class="font-semibold text-orange-600"></a>
                    </div>
                </div>
                <div class="text-center">
                    <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">Your Hub For Your Preconstruction Projects</h1>
                    <p class="mt-6 text-lg leading-8 text-white">A great plateform to buy, sell and rent your properties without any agent or commisions.</p>
                </div>
            </div>
            <div class="w-full lg:w-1/2 mx-auto">
                <SearchBar />
            </div>
            <div class="mt-12">_</div>
        </div>
    </div>
</template>

<style></style>