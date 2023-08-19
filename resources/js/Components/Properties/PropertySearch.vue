<script setup>

</script>

<template>
    <div class="m-4 lg:m-0">
        <div class="py-2 px-2 bg-white">
            <form class="flex gap-2">
                <div class="w-full">
                    <select class="w-full p-2 border border-gray-400 rounded outline-none focus:ring-2">
                        <option>Type</option>
                        <option>Apartment</option>
                        <option>Apartment</option>
                        <option>House</option>
                        <option>Villa</option>
                        <option>Hotel</option>
                    </select>
                </div>
                <div class="w-full">
                    <input type="text" class="w-full p-2 border border-gray-400 rounded outline-none focus:ring-2" Placeholder="Location" />
                </div>
                <div class="w-full">
                    <input type="number" class="w-full p-2 border border-gray-400 rounded outline-none focus:ring-2" placeholder="Budget" />
                </div>
                <div>
                    <button class="px-8 py-2 text-gray-100 bg-green-500 rounded">
                        Search
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style></style>
