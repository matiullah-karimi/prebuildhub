<script setup>
    defineProps({
        builder: Object
    })
</script>
<template>
    <div class="rounded flex items-end bg-center bg-cover h-48 shadow hover:shadow-xl cursor-pointer" :style="{'background-image': `url(${builder.image}`}">
        <div class="p-4 w-full h-full backdrop-brightness-75 flex items-end rounded">
            <h3 class="text-gray-100 font-semibold text-lg w-full rounded text-center">{{ builder.name }}</h3>
        </div>
    </div>
</template>