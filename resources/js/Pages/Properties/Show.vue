<script setup>
    import AppLayout from '@/Layouts/AppLayout.vue'
    import ContactForm from '@/Components/Contacts/ContactForm.vue'
    import ImageGallary from '@/Components/Common/ImageGallary.vue'

    const props = defineProps({
        property: {
            type: Object,
            required: true
        }
    })

    const cards = [
        {
            title: 'Bedrooms',
            value: props.property.bedroom
        },
        {
            title: 'Bathrooms',
            value: props.property.bathroom
        },
        {
            title: 'Area',
            value: props.property.area
        },
        {
            title: 'Floor',
            value: props.property.floor
        }
    ]
</script>

<template>
    <AppLayout :title="property.title">
        <div class="container max-w-7xl mx-auto p-16">
            <div class="grid grid-cols-3 gap-8">
                <div class="col-span-2">
                    <div class="flex justify-between">
                        <div>
                            <h1 class="text-3xl font-bold m2-4">{{ property.title }}</h1>
                            <h2 class="text-lg text-gray-500">{{ property.address }}</h2>
                        </div>
                        <div class="font-bold text-2xl mb-4">${{ property.price }}</div>
                    </div>
                    <ImageGallary :images="property.images" />
                    <div class="grid grid-cols-4 gap-4 mt-8">
                        <div v-for="card in cards" :key="card.title" class="border border-gray-200 rounded-lg py-2">
                            <div class="text-gray-600 text-center">{{ card.title }}</div>
                            <div class="font-bold text-2xl mt-2 text-center">{{ card.value }}</div>
                        </div>
                    </div>
                    <div class="text-gray-600 my-4">{{ property.description }}</div>
                    <div v-for="feature in property.features" :key="feature">
                        <input class="rounded" type="checkbox" :checked="true" disabled> {{ feature.title }}
                    </div>
                </div>
                <div class="col-span-1">
                    <div class="bg-white p-8 rounded-lg shadow">
                        <div class="font-bold text-lg mb-4">Interested in this property?</div>
                        <ContactForm :property-id="property.id"/>
                    </div>
                </div>
            </div>
        </div>
    </AppLayout>
</template>