<script setup>
import { onMounted, ref } from 'vue';
import { useRouter ,useRoute } from 'vue-router';
import { EventsData } from '@/data/events'
import EventRegisterBtnVue from '../components/buttons/EventRegisterBtn.vue';


const routes = useRoute()
const router = useRouter()

const eventIndex = ref(0)
const eventTitle = ref('')
const eventData = ref({})

const imageSrc = ref('');

const conditionsAccepted = ref(false)

onMounted(() => {
  document.querySelector('.event-container').scrollIntoView({ behavior: 'smooth' });
});

onMounted(()=>{
    eventIndex.value = routes.params.index
    eventTitle.value = routes.params.title
    eventData.value = EventsData[eventIndex.value]
    document.title = `${eventTitle.value} - Cine Carnival`
})

</script>

<template>
    <div class="min-h-[100vh] event-container bg-[rgb(0,0,0)] flex flex-col ssm:pb-12">
        <div class="flex flex-col justify-center">
            <div class="poster-data flex flex-col h-full sm:gap-32 gap-12 place-items-start flex-wrap max-sm:flex-col justify-between sm:px-12 sm:pl-[125px] px-8 sm:py-10 py-8">
              <img :src="eventData.image" :alt="eventData.title" class="w-[30%] min-h-[40px] max-xl:min-h-[600px] max-md:min-h-[300px] max-sm:min-h-[400px] max-vsm:min-h-[200px] max-xl:min-w-[600px] max-md:min-w-[400px] max-sm:min-w-[380px] max-vsm:min-w-[200px]" />
                <button @click="router.back()" :to="{ name: 'home', params: { to: 'group' } }" class="arrow-icon-prev z-50 absolute float-right right-10 -mt-4 duration-500 max-md:right-5">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-300 hover:text-gray-100 w-10 h-10 xl:w-12 xl:h-12">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier">
                            <path d="M16 8L8 16M12 12L16 16M8 8L10 10" class="stroke-gray-200" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </g>
                    </svg>
                </button>
                <div class="flex tracking-wider">
                    <div class="flex flex-col gap-10 ">
                        <div class="flex flex-col">
                            <span class="font-semibold font-robotoslab text-[30px] opacity-90" style="filter: drop-shadow(0 0 15px rgb(255, 255, 255))">{{ eventData.club_name }} </span>
                            <span class="font-bold font-merriweather md:text-[52px] sm:text-[47px] max-ssm:text-[42px] text-[35px]" style="filter: drop-shadow(0 0 23px rgb(255, 255, 255))">{{ eventData.title }}</span>
                            <span class="opacity-85 font-montserrat text-[25px]" style="filter: drop-shadow(0 0 23px rgb(255, 255, 255))">{{ eventData.type }}</span>
                            <span class="opacity-85 font-montserrat text-[25px]">{{ eventData.category }}</span><br>
                            <span class="opacity-85 font-semibold font-montserrat text-[30px]" style="filter: drop-shadow(0 0 23px rgb(255, 255, 255))">{{ eventData.date }}</span>
                        </div>
                        <div class="flex flex-col gap-12">
                            <div class="flex flex-col gap-1">
                                <span class="font-bold text-[25px] sm:text-[30px] tracking-wide font-merriweather">Description</span>
                                <span class="pl-4 text-[18px] max-ssm:text-[16px]">
                                    {{ eventData.description }}
                                </span>
                            </div>

                            <div class="guidelines flex flex-col gap-1">
                                <span class="font-bold text-[25px] tracking-wide sm:text-[30px] font-merriweather">Guidelines</span>
                                <span class="pl-4 text-[18px] max-ssm:text-[16px]">
                                    <ul class="list-disc pl-4">
                                        <li v-for="guideline in eventData.guidelines" :key="guideline">
                                            {{ guideline }}
                                        </li>
                                    </ul>
                                </span>
                            </div>
                            <div class="flex justify-center flex-col gap-4">
                                <div class="flex gap-3 text-center">
                                  <div class="checkbox-wrapper-12">
                                      <div class="cbx">
                                          <input :checked="conditionsAccepted" v-model="conditionsAccepted" type="checkbox" id="cbx-12">
                                          <label for="cbx-12"></label>
                                          <svg fill="none" viewBox="0 0 15 14" height="14" width="15">
                                              <path d="M2 8.36364L6.23077 12L13 2"></path>
                                          </svg>
                                      </div>
                                      <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                                          <defs>
                                              <filter id="goo-12">
                                                  <feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic"></feGaussianBlur>
                                                  <feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur"></feColorMatrix>
                                                  <feBlend in2="goo-12" in="SourceGraphic"></feBlend>
                                              </filter>
                                          </defs>
                                      </svg>
                                  </div>
                                  <button @click="conditionsAccepted = !conditionsAccepted" class="text-lg relative -mt-0.5 font-montserrat text-gray-300">I agree to the guidelines</button>
                                </div>
                                <div v-if="conditionsAccepted" class="pt-2">
                                    <EventRegisterBtnVue />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.poster{
    background-color: #000;
}

.event-container {
    background-image: linear-gradient(
    130deg,
    hsl(243deg 91% 5%) 0%,
    hsl(205deg 46% 19%) 101%,
    hsl(191deg 45% 32%) 100%
    );
}

.poster-data{
    height: 100%;
}


.checkbox-wrapper-12 {
  position: relative;
}

.checkbox-wrapper-12 > svg {
  position: absolute;
  top: -130%;
  left: -170%;
  width: 110px;
  pointer-events: none;
}

.checkbox-wrapper-12 * {
  box-sizing: border-box;
}

.checkbox-wrapper-12 input[type="checkbox"] {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  margin: 0;
}

.checkbox-wrapper-12 input[type="checkbox"]:focus {
  outline: 0;
}

.checkbox-wrapper-12 .cbx {
  width: 24px;
  height: 24px;
  top: calc(100px - 12px);
  left: calc(100px - 12px);
}

.checkbox-wrapper-12 .cbx input {
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  border: 2px solid #bfbfc0;
  border-radius: 50%;
}

.checkbox-wrapper-12 .cbx label {
  width: 24px;
  height: 24px;
  background: none;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transform: trasnlate3d(0, 0, 0);
  pointer-events: none;
}

.checkbox-wrapper-12 .cbx svg {
  position: absolute;
  top: 5px;
  left: 4px;
  z-index: 1;
  pointer-events: none;
}

.checkbox-wrapper-12 .cbx svg path {
  stroke: #fff;
  stroke-width: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-dasharray: 19;
  stroke-dashoffset: 19;
  transition: stroke-dashoffset 0.3s ease;
  transition-delay: 0.2s;
}

.checkbox-wrapper-12 .cbx input:checked + label {
  animation: splash-12 0.6s ease forwards;
}

.checkbox-wrapper-12 .cbx input:checked + label + svg path {
  stroke-dashoffset: 0;
}

@-moz-keyframes splash-12 {
  40% {
    background: #b82640;
    box-shadow: 0 -18px 0 -8px #b82640, 16px -8px 0 -8px #b82640, 16px 8px 0 -8px #b82640, 0 18px 0 -8px #b82640, -16px 8px 0 -8px #b82640, -16px -8px 0 -8px #b82640;
  }

  100% {
    background: #b82640;
    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
  }
}

@-webkit-keyframes splash-12 {
  40% {
    background: #b82640;
    box-shadow: 0 -18px 0 -8px #b82640, 16px -8px 0 -8px #b82640, 16px 8px 0 -8px #b82640, 0 18px 0 -8px #b82640, -16px 8px 0 -8px #b82640, -16px -8px 0 -8px #b82640;
  }

  100% {
    background: #b82640;
    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
  }
}

@-o-keyframes splash-12 {
  40% {
    background: #b82640;
    box-shadow: 0 -18px 0 -8px #b82640, 16px -8px 0 -8px #b82640, 16px 8px 0 -8px #b82640, 0 18px 0 -8px #b82640, -16px 8px 0 -8px #b82640, -16px -8px 0 -8px #b82640;
  }

  100% {
    background: #b82640;
    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
  }
}

@keyframes splash-12 {
  40% {
    background: #b82640;
    box-shadow: 0 -18px 0 -8px #b82640, 16px -8px 0 -8px #b82640, 16px 8px 0 -8px #b82640, 0 18px 0 -8px #b82640, -16px 8px 0 -8px #b82640, -16px -8px 0 -8px #b82640;
  }

  100% {
    background: #b82640;
    box-shadow: 0 -36px 0 -10px transparent, 32px -16px 0 -10px transparent, 32px 16px 0 -10px transparent, 0 36px 0 -10px transparent, -32px 16px 0 -10px transparent, -32px -16px 0 -10px transparent;
  }
}
</style>