<template>
  <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
    <PropertyItem v-for="property in data" :key="property.id" :property="property"/>
  </div>
</template>

<script setup>
import PropertyItem from '@/Components/Properties/PropertyItem.vue'
defineProps({
  data: Object
})
</script>

<style>

</style>