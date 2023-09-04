<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content="Search for your pre-construction projects. Search by address, city, neighborhood, project, or builder.">
        <meta property="og:title" content="Your hub for your next pre-construction home" />
        <meta name="twitter:title" content="Your hub for your next pre-construction home" />
        <meta property="og:site_name" content="PrebuildHub" />
        <meta name="twitter:site_name" content="PrebuildHub" />
        <meta property="og:description" content="Search for your pre-construction projects. Search by address, city, neighborhood, project, or builder." />
        <meta name="twitter:description" content="Search for your pre-construction projects. Search by address, city, neighborhood, project, or builder." />
        {{-- <link rel="image_src" href="https://e5397924c9dbacd40861047457291afe.cdn.bubble.io/f1669022731027x786630767490783400/logo.svg" />
        <meta property="og:image" content="https://e5397924c9dbacd40861047457291afe.cdn.bubble.io/f1669022731027x786630767490783400/logo.svg" />
        <meta name="twitter:image:src" content="https://e5397924c9dbacd40861047457291afe.cdn.bubble.io/f1669022731027x786630767490783400/logo.svg" /> --}}
        <meta property="og:url" content="https://prebuildhub.com/" />
        <meta property="og:type" content="website" />
        {{-- <meta name="twitter:card" content="summary_large_image" /> --}}
        <meta name="keywords" content="prebuildhub,pre constructions,preconstructions,pre homes,real estate,candada,toronto,kijiji,pre-homes" />

        <title inertia>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />

        <!-- Scripts -->
        @routes
        @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
        @inertiaHead
    </head>
    <body class="font-sans antialiased">
        @inertia
    </body>
</html>
