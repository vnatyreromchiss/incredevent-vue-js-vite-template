<script>
    
   




    export default {
       
    }

</script>
<!-- mt-64 -->
<template>
    <footer class="footer bg-[#191A1F]">
        <div class="md:container md:mx-auto px-5">
            <div class="wrapper  pt-8 grid md:grid-cols-5 md:grid-rows-1">
                <div class="logo-block">
                    <img src="/images/Header/Logo.png" alt="">
                </div>
                <div class="list">
                    <ul>
                        <li><a class="font-bold text-sm text-blue-300" href="#">Sitemap</a> </li>
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
                        <li><a class="font-bold text-sm text-blue-300" href="#">Assistance</a></li>
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
                        <li><a class="font-bold text-sm text-blue-300" href="#">Legal</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Terms of Use</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Privacy Policy</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Refunds & Returns</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Cookies Policy</a></li>
                        <li><a class="font-bold text-xs text-gray-400" href="#">Security</a></li>
                    </ul>
                </div>
                <div class="list ml-14 md:ml-0">
                    <a class="font-bold text-xs text-blue-300" href="#">Accepted Payment Methods</a>
                    <div class="payment-block grid grid-cols-3 grid-rows-3 gap-2 md:w-2/4 mt-2">
                        <div class=""><img src="../../../public/images/Footer/01.svg" alt=""></div>
                        <div class=""><img src="../../../public/images/Footer/02.svg" alt=""></div>
                        <div class=""><img src="../../../public/images/Footer/03.svg" alt=""></div>
                        <div class=""><img src="../../../public/images/Footer/04.svg" alt=""></div>
                        <div class=""><img src="../../../public/images/Footer/05.svg" alt=""></div>
                        <div class=""><img src="../../../public/images/Footer/06.svg" alt=""></div>
                        <div class=""><img src="../../../public/images/Footer/07.svg" alt=""></div>
                        <div class=""><img src="../../../public/images/Footer/08.svg" alt=""></div>
                    </div>
                </div>
            </div>
            <hr class="w-100 border-gray-700 border-2 rounded mt-12">
            <div class="text-block  mt-4 pb-8">
                <p class="text text-gray-600 text-xs text-center">All rights reserved. Use of this website signifies your agreement to our cookies policy, privacy policy, and terms of use. "Incredevent" is a trademark held by Sync Digital Solutions Inc.</p>
            </div>
        </div>
    </footer>

</template>

<style>
   
   
    /* .wrapper {
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-template-rows: 1fr;
        } */
    @media (max-width:767.98px) {
        .wrapper { 
            display: grid; 
            place-items: center;
            grid-template-columns: 2fr;
            grid-template-rows: repeat(3, 1fr);
        }
        .list {
            margin-top: 30px;
        }
    }
</style>


