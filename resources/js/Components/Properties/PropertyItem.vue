<script setup>
    import { Link } from '@inertiajs/vue3';

    defineProps({
        property: {
            type: Object,
            required: true,
        },
    })
</script>

<template>
    <div class="group rounded-xl bg-white dark:bg-slate-900 shadow hover:shadow-xl dark:hover:shadow-xl dark:shadow-gray-700 dark:hover:shadow-gray-700 overflow-hidden ease-in-out duration-500">
        <div class="relative">
            <img :src="property.images[0]" alt="">

            <div class="absolute top-4 end-4">
                <a href="javascript:void(0)" class="btn btn-icon bg-white dark:bg-slate-900 shadow dark:shadow-gray-700 rounded-full text-slate-100 dark:text-slate-700 focus:text-red-600 dark:focus:text-red-600 hover:text-red-600 dark:hover:text-red-600"><i class="mdi mdi-heart mdi-18px"></i></a>
            </div>
        </div>

        <div class="p-6">
            <div class="pb-6">
                <Link :href="`/properties/${property.id}`" class="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{{ property.title }}</Link>
            </div>

            <ul class="py-6 border-y border-slate-100 dark:border-gray-800 flex items-center list-none">
                <li class="flex items-center me-4">
                    <i class="uil uil-compress-arrows text-2xl me-2 text-green-600"></i>
                    <span>{{ property.area }} sqft</span>
                </li>

                <li class="flex items-center me-4">
                    <i class="uil uil-bed-double text-2xl me-2 text-green-600"></i>
                    <span>{{ property.bedroom }} Beds</span>
                </li>

                <li class="flex items-center">
                    <i class="uil uil-bath text-2xl me-2 text-green-600"></i>
                    <span>{{ property.bathroom }} Baths</span>
                </li>
            </ul>

            <ul class="pt-6 flex justify-between items-center list-none">
                <li>
                    <span class="text-slate-400">Price</span>
                    <p class="text-lg font-medium">${{ property.price }}</p>
                </li>

                <li>
                    <span class="text-slate-400">Rating</span>
                    <ul class="text-lg font-medium text-amber-400 list-none">
                        <li class="inline"><i class="mdi mdi-star"></i></li>
                        <li class="inline"><i class="mdi mdi-star"></i></li>
                        <li class="inline"><i class="mdi mdi-star"></i></li>
                        <li class="inline"><i class="mdi mdi-star"></i></li>
                        <li class="inline"><i class="mdi mdi-star"></i></li>
                        <li class="inline text-black dark:text-white">5.0(30)</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>