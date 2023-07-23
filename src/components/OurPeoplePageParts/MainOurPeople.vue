<script>
  
    export default {
       
    }

</script>

<template>
        <main class="mt-4 mb-64">             
                <div class="md:container md:mx-auto px-5">
                    <div class="video-ourBlock flex flex-col justify-center items-center text-center md:grid md:place-items-center md:justify-start md:text-left">
                        <div class="mt-8">
                            <h1 class="text-white text-4xl md:text-7xl leading-tight font-bold">Our People</h1>
                            <p class="text-xl text-white font-semibold mt-4 leading-loose md:w-11/12">This is our team, a lot of smiling happy people who work hard to empower your brands.</p>
                        </div>
                        <div class="video-block mt-8">
                            <video controls >
                                <source src="/images/Main/mainVideo.mp4" type="video/mp4">
                            </video>
                        </div>
                    </div>
                    <div class="text-block grid place-items-center mt-20">
                        <p class="text-xl text-center text-gray-600 w-9/12">INCREDEVENT is an event management SaaS tool focusing on event ticketing, pre-production and production tools, guest lists, and VIP. The platform offers unique services to buyers, planners and promoters with second-to-none customer support rated 5 stars by our clients and their customers.</p>
                    </div>
        
                    <div class="mt-20 md:w-3/4 m-auto">
                        <h3 class="title text-white text-4xl font-semibold text-center">Who is INCREDEVENT For?</h3>
                        <hr class="who-block__line border-gray-700 border-2 rounded mt-12">
        
                        <div class="card flex mt-8 flex-col justify-center items-center text-center md:text-left md:flex-row md:justify-between">
                            <h2 class="text-blue-400 text-3xl font-semibold md:w-3/12">Buyer</h2>
                            <p class="text-sm text-white md:w-9/12 mt-4 md:mt-0">Buyers are offered a no nonsense, fair fee buying system with continually evolving scalper and price gouging proof tools. Our mission is to democratize event management and crush junk fees.</p>
                        </div>
                        <hr class="who-block__line w-100 border-gray-700 border-2 rounded mt-12">
        
                        <div class="card flex mt-8 flex-col justify-center items-center text-center md:text-left md:flex-row md:justify-between">
                            <h2 class="text-green-600 text-3xl font-semibold md:w-3/12">Planner</h2>
                            <p class="text-sm text-white md:w-9/12 mt-4 md:mt-0">Planners can access dozens of features and essentially run their in-person, virtual and hybrid Incredible Events from their dashboard; email, ticketing, seating, guest lists and VIP, promoter management, and many other features round out our unique platform built by event planners for event planners.</p>
                        </div>
                        <hr class="who-block__line w-100 border-gray-700 border-2 rounded mt-12">
        
                        <div class="card flex mt-8 flex-col justify-center items-center text-center md:text-left md:flex-row md:justify-between">
                            <h2 class="text-orange-500 text-3xl font-semibold md:w-3/12">Promoter</h2>
                            <p class="text-sm text-white md:w-9/12 mt-4 md:mt-0">Promoters can finally do away with the often ambiguous relationship they have with planners. Cash codes, custom links, commission tables, reciprocal payout systems, and promotions tools offer promoters, influencers, affiliates, and vendors the tracking needed to find success working for planners.</p>
                        </div>
                        <hr class="who-block__line w-100 border-gray-700 border-2 rounded mt-12">
        
                        <div class="description text-center text-gray-600 mt-8">
                            <p class="description-text">If you're looking for a new take on an old industry, INCREDEVENT will take your Incredible Events to new heights. As an alternative to TicketMaster, EventBrite and other event management platforms, we strive to create a community for event planners and buyers with tools that matter and constantly evolve.</p>
                        </div>
        
                        <div class="title-block mt-8 grid place-items-center">
                            <h2 class="text-white text-2xl text-center"><span class="uppercase">INCREDEVENT</span> Incredible Events Hosted Here.</h2>
                            <button class="px-3.5 bg-[#29ABE2] text-white py-2 leading-none rounded-full text-xs mt-8">Get Started</button>
                        </div>
                    </div>
                </div>
            </main>   
</template>   
<style>

@media (max-width:767.98px)  {
    video {
        position: relative;
    }
}
    .video-ourBlock {
        color:#29ABE2;
        display: grid;
        grid-template-columns: 1fr 1.25fr;
    }
</style>