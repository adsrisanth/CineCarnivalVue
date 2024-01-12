<script setup>
import { EventsData } from '@/data/events'
import { onMounted } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter()

onMounted(()=>{
    document.title = 'Events - Cine Carnival'
    document.querySelector('.event-list-container').scrollIntoView( {behavior:'instant'} )
})

</script>

<template>
    <div class="min-h-[100vh] event-list-container bg-[rgb(0,0,0)] flex flex-col gap-8 justify-center py-4 ssm:pb-12 px-8">
        <button @click="router.back()" :to="{ name: 'home', params: { to: 'group' } }" class="arrow-icon-prev fixed top-5 left-5 duration-500">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" class="text-gray-300 hover:text-gray-100 w-8 h-8">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
        </button>
        <span class="text-center font-montserrat text-[#6cb9b2] font-extrabold tracking-wide text-[40px] sm:text-[46px] relative mt-[74px]">Cine Carnival Events</span>
        <div class="flex justify-center max-md:gap-8 max-ssm:md-6 md:gap-12 flex-wrap sm:mt-12">
            <div v-for="event in EventsData" :key="event.index" class="card relative w-[380px] h-[480px] rounded-3xl overflow-hidden shadow-md">
                <div class="poster relative top-0 left-0 w-full h-full overflow-hidden">
                    <img :src="event.image" :alt="event.title" class="md:w-[280px] md:h-[380px] object-contain" />
                </div>
                <div class="details flex flex-col justify-center gap-4 py-2 pb-4">
                    <div class="flex flex-col text-center font-montserrat">
                        <span class="py-1 text-gray-200 tracking-wide">{{ event.title }}</span>
                        <span class="py-1 text-gray-300 tracking-wide">{{ event.category }}</span>
                    </div>
                    <div class="flex justify-center">
                        <button class="view-btn px-5 font-bold font-montserrat py-2 rounded-3xl text-gray-300 hover:text-gray-100 tracking-wide transition-all hover:transition-all flex justify-center relative text-center w-min">
                            <RouterLink :to="{ name:'single-event', params:{ index:event.index, title:event.title } }">View</RouterLink>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card{
    position: relative;
}

.poster::before{
    content: '';
    position: absolute;
    bottom: -45%;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    transition: .5s;
}

.card:hover .poster::before{
    bottom: 0;
}

.poster img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: fill;
    transition: .5s;
}

.card:hover .poster img{
    transform: scale(1.1);
}

.details{
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: auto;
    background: #00000067;
    backdrop-filter: blur(16px) saturate(150%);
    transition: .5s;
    color: #fff;
    z-index: 2;
}

.card:hover .details{
    bottom: 0;
}

.view-btn{
    border: 1.5px solid rgba(255 255 255 / 0.4);
}

.arrow-icon-prev{
    animation: left-right 1000ms infinite;
}

@keyframes left-right {
    0% {
        transform: translateX(0);
    }
    50% {
        transform: translateX(-5px);
    }
    100% {
        transform: translateX(0);
    }
}

</style>