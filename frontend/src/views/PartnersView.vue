<script setup>
import {PartnersData} from '../data/partners'
</script>

<template>
  <div class="min-h-[100vh] flex flex-col px-12 gap-12 w-full bg-[rgb(0,0,0)]">
    <span class="font-extrabold text-center font-montserrat py-8 max-sm:pb-4 max-lg:pb-4 text-[50px] max-sm:text-[50px] max-ssm:text-[45px] max-vsm:text-[35px] max-vvsm:text-[35px]">Partners</span>
    <div class="flex flex-col justify-center w-full">
      <div class="main-sponsor w-full flex flex-col relative place-items-center justify-center">
        <img src="https://media.collegedekho.com/media/img/news/K._L_University_compressed_600_1.jpg" alt="main-sponsor"
          class="object-contain md:w-[500px] md:h-[280px]"
        />
        <span class="text-center py-4 text-[20px] font-inter tracking-wider">Main Sponsor Name</span>
      </div>
      <div class="sub-sponsor w-full py-32 flex justify-center gap-14 flex-wrap">
        <div class="" v-for="sponsor in PartnersData" :key="sponsor.name">
          <div class="w-full flex flex-col relative place-items-center justify-center">
            <img :src="sponsor.img" alt="main-sponsor"
            class="object-contain max-sm:w-[350px] max-sm:h-[180px] max-md:w[380px] max-md:h-[200px] md:w-[430px] md:h-[220px] "
            />
            <span class="text-center py-4 w-full font-inter tracking-wider text-[18px]">{{ sponsor.name }}</span>
          </div>
          
        </div>
      </div>
    </div>
    
  </div>
</template>