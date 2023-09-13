<script setup>
    import PrimaryButton from '@/Components/PrimaryButton.vue';
    import TextInput from '@/Components/TextInput.vue';
</script>

<template>
    <div class="flex justify-start items-center py-4 relative gap-2">
        <TextInput class="px-4 h-14 w-full" type="text" placeholder="Ex: 2104 Charmaine Lane Amarillo" />
        <PrimaryButton class="h-14">Search</PrimaryButton>
    </div>
</template>