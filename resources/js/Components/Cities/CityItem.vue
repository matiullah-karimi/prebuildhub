<script setup>
    import { Link } from '@inertiajs/vue3';

    defineProps({
        city: Object
    })
</script>
<template>
    <Link :href="`/cities/${city.id}`">
        <div class="rounded flex items-end bg-center bg-cover h-48" :style="{'background-image': `url(${city.image})`}">
            <div class="p-4 w-full h-full backdrop-brightness-75 flex items-end rounded">
                <h3 class="text-gray-100 font-semibold text-lg w-full rounded text-center">{{ city.name }}</h3>
            </div>
        </div>
    </Link>
</template>