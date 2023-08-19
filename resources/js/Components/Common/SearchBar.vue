<script setup>
    import PrimaryButton from '@/Components/PrimaryButton.vue';
</script>

<template>
    <div class="flex justify-start items-center py-4 relative gap-2">
        <input class="text-sm leading-none text-left text-gray-600 px-4 h-14 w-full border rounded-lg border-gray-300 outline-none" type="text" placeholder="Ex: 1 redimount Ave">
        <PrimaryButton class="h-14">Search</PrimaryButton>
    </div>
</template>