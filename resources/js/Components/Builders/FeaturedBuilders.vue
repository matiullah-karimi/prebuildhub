<script setup>
import BuilderItem from '@/Components/Builders/BuilderItem.vue'
import ListTitle from '@/Components/Properties/ListTitle.vue'

defineProps({
    builders: Array
})

</script>

<template>
    <div class="container">
        <ListTitle title="Search by Builder" description="Search for your preconstruction projects by best builders in the town" url="/builders"/>
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-6">
            <BuilderItem  v-for="builder in builders" :builder="builder" :key="builder.name"/>
        </div>
        <div class="lg:hidden mt-4 flex justify-center">
            <a class="text-blue-600 text-lg cursor-pointer" href="/builders">View All</a>
        </div>
    </div>
</template>