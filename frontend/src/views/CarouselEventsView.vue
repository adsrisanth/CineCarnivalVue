<script setup>
import { EventsData } from '../data/events';
import { useRouter } from 'vue-router';

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const options = {
  rewind: true,
  perPage: 3,
  perMove: 1,
  gap: '2rem',
  type: 'slide',
  rewindSpeed: 3000,
  rewind: false,
  autoplayDelay: 300,
  arrows: false,
  pagination: false,
  interval: 1000,
  padding: '2rem',
  breakpoints: {
    725: { perPage:  EventsData.length>1 ?1 : EventsData.length , autoplay: EventsData.length > 1 },
    1056: { perPage: EventsData.length>2 ?2 : EventsData.length , autoplay: EventsData.length > 2},
    1350: { perPage: EventsData.length>3 ?3 : EventsData.length , autoplay: EventsData.length > 3},
    1700: { perPage: EventsData.length>4 ?4 : EventsData.length , autoplay: EventsData.length > 4},
    2000: { perPage: EventsData.length>5 ?5 : EventsData.length , autoplay: EventsData.length > 5},
    2500: { perPage: EventsData.length>5 ?5 : EventsData.length , autoplay: EventsData.length > 5},
    3500: { perPage: EventsData.length>6 ?6 : EventsData.length , autoplay: EventsData.length > 6},
    4500: { perPage: EventsData.length>7 ?7 : EventsData.length , autoplay: EventsData.length > 7},
    5500: { perPage: EventsData.length>8 ?8 : EventsData.length , autoplay: EventsData.length > 8},
    6500: { perPage: EventsData.length>9 ?9 : EventsData.length , autoplay: EventsData.length > 9},
    7500: { perPage: EventsData.length>10 ?10 : EventsData.length, autoplay: EventsData.length > 10},
  },
};
const router = useRouter()

</script>

<template>
  <div class="flex flex-col gap-5 max-sm:gap-4 sm:pb-10 pb-6 max-vsm:py-4 overflow-hidden">
    <div class="flex justify-between px-8">
      <button @click="router.push('/event/list')" class="text-center font-extrabold font-montserrat text-[45px] max-sm:text-[45px] max-ssm:text-[40px] max-vsm:text-[30px] max-vvsm:text-[30px]">Events</button>
      <button @click="router.push('/event/list')" class="flex place-items-end mb-2 relative">View All</button>
    </div>
    <div class="flex justify-center items-center">
      <Splide :options="options" class="flex justify-center">
        <SplideSlide v-for="(event,index) in EventsData" :key="index" class="flex rounded-2xl overflow-hidden justify-center lg:w-[380px] lg:h-[480px] max-lg:w-[350px] max-lg:h-[420px] max-md:w-[300px] max-md:h-[380px] ssm:w-[360px] ssm:h-[450px] vsm:w-[350px] vsm:h-[400px] max-vsm:w-[280px] max-vsm:h-[350px] max-vvsm:w-[220px] max-vvsm:h-[300px] bg-[#000]">
          <img @click="router.push({ name: 'single-event', params:{index: event.index , title: event.title} })"
            :src="event.image" :alt="event.title"
            class="flex justify-center active:cursor-grabbing cursor-grab"
          >
        </SplideSlide>
      </Splide>
    </div>
  </div>
</template>

<style scoped>

.splide{
  padding:20px;
}
.carousel-container-c {
  animation: carousel-scroll 17s linear infinite;
}

@keyframes carousel-scroll {
	0% { transform: translateX(0); }
	100% { transform: translateX(-21%)}
}

.image-slide:hover .carousel-container-c,
.carousel-container-c:hover
{
  animation-play-state: paused;
}
</style>
