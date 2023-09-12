<script setup>
    import ApplicationLogo from '@/Components/ApplicationLogo.vue';
</script>
<template>
    <footer class="p-16 bg-[#EEEEEE] font-normal bg-no-repeat bg-center bg-cover" style="background-image: url('/images/footer.png');">
        <div class="lg:flex lg:justify-evenly">
            <div class="max-w-sm mt-6 text-center lg:mt-0">
                <ApplicationLogo />
                <div class="mt-2">
                    We’re here to help you find your perfect, new home.

                    <div class="flex flex-col mt-4">
                        <span>
                            123 Sheppard Avenue East
                        </span>

                        <span>
                            Box# 43
                        </span>

                        <span>
                            Toronto, Ontario
                        </span>

                        <span>
                            M2K1B6
                        </span>
                    </div>
                </div>
            </div>
            <div class="mt-6 text-center lg:mt-0">
                <h6 class="mb-4 font-semibold text-gray-700">Quick links</h6>
                <ul>
                    <li><a href="/" class="block py-2 text-gray-600">Home</a></li>
                    <li><a href="/properties" class="block py-2 text-gray-600">Listings</a></li>
                    <li>
                        <a href="/about-us" class="block py-2 text-gray-600">About Us</a>
                    </li>
                    <li>
                        <a href="/contact-us" class="block py-2 text-gray-600">Contact Us</a>
                    </li>
                </ul>
            </div>

            <div class="mt-6 text-center lg:mt-0">
                <h6 class="mb-4 font-semibold text-gray-700">Contact</h6>
                <ul>
                    <li>
                        <a href="" class="block py-2 text-gray-600">
                            <i class="fa fa-phone"></i>
                            +1 (647) 834-3672
                        </a>
                    </li>
                    <li>
                        <a href="" class="block py-2 text-gray-600">
                            <i class="fa fa-envelope"></i>
                            info@prebuildhub.com
                        </a>
                    </li>
                    <li class="flex justify-center gap-2">
                        <a href="" class="block py-2 text-gray-600">
                            <img class="w-6 h-6" src="/images/facebook.svg" alt="" srcset="">
                        </a>
                        <a href="" class="block py-2 text-gray-600">
                            <img class="w-6 h-6" src="/images/instagram.svg" alt="" srcset="">
                        </a>
                        <a href="" class="block py-2 text-gray-600">
                            <img class="w-6 h-6" src="/images/tiktok.svg" alt="" srcset="">
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>