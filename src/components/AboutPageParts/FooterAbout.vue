<script>

    export default {
       
    }

</script>

<template>
    <footer class="footer  mt-64 bg-[#191A1F]">
        <div class="md:container md:mx-auto px-5">
            <div class="wrapper  pt-8 grid md:grid-cols-5 md:grid-rows-1">
                <div class="logo-block">
                    <img src="/images/Header/Logo.png" alt="">
                </div>
                <div class="list">
                    <ul>
                        <li><a class="font-bold text-xs text-blue-300" href="#">Sitemap</a> </li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Browse Events</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">About Incredevent</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Roadmap</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Blogs</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Learn</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Log Out</a></li>
                    </ul>
                </div>
                <div class="list">
                    <ul>
                        <li><a class="font-bold text-xs text-blue-300" href="#">Assistance</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">FAQ</a> </li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Tutorials</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Contact Us</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Buyer Features</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Planner Features</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Promoter Features</a></li>
                    </ul>
                </div>
                <div class="list">
                    <ul>
                        <li><a class="font-bold text-xs text-blue-300" href="#">Legal</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Terms of Use</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Privacy Policy</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Refunds & Returns</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Cookies Policy</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Security</a></li>
                    </ul>
                </div>
                <div class="list flex">
                    <img class="block w-12 h-12" src="../../../public/images/Footer/01.svg" alt="">
                    <img class="block w-12 h-12 ml-2" src="../../../public/images/Footer/04.svg" alt="">
                </div>
            </div>
            <hr class="w-100 border-gray-700 border-2 rounded mt-12">
            <div class="text-block  mt-4 pb-8">
                <p class="text text-gray-600 text-xs">All rights reserved. Use of this website signifies your agreement to our cookies policy, privacy policy, and terms of use. "Incredevent" is a trademark held by Sync Digital Solutions Inc.</p>
            </div>
        </div>
    </footer>

</template>

<style>
  
   /* FOOTER for mobile devices */
    @media (max-width:767.98px) {
        .wrapper {
            display: grid;
            place-items: center;
            grid-template-columns: 1fr;
            grid-template-rows: repeat(5, 1fr);
        }
    }
</style>