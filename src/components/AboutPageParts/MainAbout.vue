<script>

    export default {
       
    }

</script>

<template>
    <main class="mt-4">
        <div class="md:container md:mx-auto px-5">
            <div class="mainPicture__block grid place-items-center">
                <img src="/images/Main/mainPicture.jpg" alt="">
            </div>
            <div class="title-block grid place-items-center mt-8 text-center">
                <h3 class="title text-white text-xl font-semibold">Our People</h3>
                <p class="title-text text-sm text-gray-400 font-semibold mt-4">This is our team, a lot of smiling happy people who work hard to empower your teams.</p>
                <hr class="title-line w-64 border-blue-300 border-2 rounded mt-4">
            </div>
            <div class="video-block grid place-items-center mt-8">
                <video controls >
                    <source src="/images/Main/mainVideo.mp4" type="video/mp4">
                </video>
            </div>
            <div class="text-block grid place-items-center mt-8">
                <p class="text text-center text-gray-600">INCREDEVENT is an event management SaaS tool focusing on event ticketing, pre-production and production tools, guest lists, and VIP. The platform offers unique services to buyers, planners and promoters with second-to-none customer support rated 5 stars by our clients and their customers.</p>
            </div>

            <div class="who-block  mt-16">
                <h3 class="title text-white text-xl font-semibold text-center">Who is INCREDEVENT For?</h3>
                <hr class="who-block__line w-100 border-gray-700 border-2 rounded mt-12">

                <div class="card flex mt-10 flex-col justify-center items-center text-center md:text-left md:flex-row md:justify-between">
                    <h2 class="text-center text-blue-400 text-xl font-semibold md:w-3/12">For the Buyer</h2>
                    <p class="text-white md:w-9/12 mt-4 md:mt-0">Buyers are offered a no nonsense, fair fee buying system with continually evolving scalper and price gouging proof tools. Our mission is to democratize event management and crush junk fees.</p>
                </div>
                <hr class="who-block__line w-100 border-gray-700 border-2 rounded mt-12">

                <div class="card flex mt-10 flex-col justify-center items-center text-center md:text-left md:flex-row md:justify-between">
                    <h2 class="text-center text-green-600 text-xl font-semibold md:w-3/12">For the Planner</h2>
                    <p class="text-white md:w-9/12 mt-4 md:mt-0">Planners can access dozens of features and essentially run their in-person, virtual and hybrid Incredible Events from their dashboard; email, ticketing, seating, guest lists and VIP, promoter management, and many other features round out our unique platform built by event planners for event planners.</p>
                </div>
                <hr class="who-block__line w-100 border-gray-700 border-2 rounded mt-12">

                <div class="card flex mt-10 flex-col justify-center items-center text-center md:text-left md:flex-row md:justify-between">
                    <h2 class="text-center text-orange-500 text-xl font-semibold md:w-3/12">For the Promoter</h2>
                    <p class="text-white md:w-9/12 mt-4 md:mt-0">Promoters can finally do away with the often ambiguous relationship they have with planners. Cash codes, custom links, commission tables, reciprocal payout systems, and promotions tools offer promoters, influencers, affiliates, and vendors the tracking needed to find success working for planners.</p>
                </div>
                <hr class="who-block__line w-100 border-gray-700 border-2 rounded mt-12">

                <div class="description text-center text-gray-600 mt-8">
                    <p class="description-text">If you're looking for a new take on an old industry, INCREDEVENT will take your Incredible Events to new heights. As an alternative to TicketMaster, EventBrite and other event management platforms, we strive to create a community for event planners and buyers with tools that matter and constantly evolve.</p>
                </div>

                <div class="title-block mt-8">
                    <h2 class="text-white text-xl text-center"><span class="gradient">INCREDEVENT</span>; Incredible Events Hosted Here.</h2>
                </div>
            </div>
        </div>
    </main>   
</template>

<style>

/* z-index to hide video tag in the burger-menu */
video {
    z-index: -10;
}
/* gradient-text */
.gradient {
    background: -webkit-linear-gradient(#2BACD9, #05CC80);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
</style>