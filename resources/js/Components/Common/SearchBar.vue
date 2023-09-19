<script setup>
    import PrimaryButton from '@/Components/PrimaryButton.vue';
    import TextInput from '@/Components/TextInput.vue';
</script>

<template>
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-2">
        <TextInput class="px-4 h-14 lg:col-span-3" type="text" placeholder="Ex: 2104 Charmaine Lane Amarillo" />
        <PrimaryButton class="h-14 text-center">Search</PrimaryButton>
    </div>
</template>