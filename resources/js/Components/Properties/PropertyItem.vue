<script setup>
    import { Link } from '@inertiajs/vue3';

    defineProps({
        property: {
            type: Object,
            requiorange: true,
        },
    })
</script>

<template>
    <div class="group rounded-xl bg-white shadow hover:shadow-xl overflow-hidden ease-in-out duration-500">
        <div class="relative">
            <img class="w-full h-56 object-cover object-center" :src="property.images[0]" alt="">

            <div class="absolute top-4 end-4">
                <a href="javascript:void(0)" class="btn btn-icon bg-white shadow rounded-full text-slate-100 focus:text-orange-600 hover:text-orange-600"><i class="mdi mdi-heart mdi-18px"></i></a>
            </div>
        </div>

        <div class="p-6">
            <div class="pb-6">
                <Link :href="`/properties/${property.id}`" class="text-lg hover:text-green-600 font-medium ease-in-out duration-500">{{ property.title }}</Link>
            </div>

            <ul class="py-6 border-y border-slate-100 flex items-center list-none">
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
                        <li class="inline text-black">5.0(30)</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>