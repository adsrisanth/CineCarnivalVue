<script setup>
import { EventsData } from '../data/events';
import { useRouter } from 'vue-router';

import { Splide, SplideSlide } from '@splidejs/vue-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

const options = {
  rewind: true,
  autoplay: 3000,
  perPage: 3,
  perMove: 1,
  gap: '1rem',
  type: 'loop',
  rewindSpeed: 3000,
  autoplayDelay: 300,
  arrows: false,
  pagination: false,
  extensions: { AutoScroll },
  interval: 1000,
  autoScroll: {
    speed: 800,
    pauseOnHover: true,
    pauseOnFocus: false,
  },
  breakpoints: {
    725: { perPage: 1 },
    1056: { perPage: 2 },
    1350: { perPage: 3 },
    1700: { perPage: 4 },
    2000: { perPage: 5 },
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
