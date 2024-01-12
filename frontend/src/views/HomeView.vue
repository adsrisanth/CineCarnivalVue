<script setup>
import PageOneView from '@/views/PageOneView.vue'
import PageTwoView from '@/views/PageTwoView.vue'
import PageThreeView from '@/views/PageThreeView.vue'
import PageSevenView from './PageSevenView.vue';
import FooterView from './FooterView.vue';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import CarouselEventsView from './CarouselEventsView.vue'

const routes = useRoute()

const to = computed(() => {
  return routes.params.to || ''
})

onMounted(()=>{
  if(to.value == 'group'){
    document.getElementById('team-view').scrollIntoView({ behavior: 'smooth' });
  }
  else if(to.value == 'intro'){
    document.getElementById('intro-view').scrollIntoView({ behavior: 'smooth' });
  }
  else if(to.value == 'about'){
    document.getElementById('about-view').scrollIntoView({ behavior: 'smooth' });
  }
  else if(to.value == 'theme'){
    document.getElementById('theme-view').scrollIntoView({ behavior: 'smooth' });
  }
  else if(to.value == 'footer'){
    document.getElementById('footer-view').scrollIntoView({ behavior: 'smooth' });
  }
  else if(to.value == 'partners'){
    document.getElementById('partners-view').scrollIntoView({ behavior: 'smooth' });
  }
  else if(to.value == 'events-carousel')
    document.getElementById('events-carousel').scrollIntoView({ behavior: 'smooth' });
})

</script>

<template>
  <div class="flex flex-col w-full h-full overflow-y-auto" style="scroll-snap-type: y mandatory;scroll-behavior: smooth;">
    <div class="home-child" id="intro-view">
      <PageOneView  ref="homeChild" />
    </div>
    <div class="home-child"  id="about-view">
      <PageTwoView  ref="homeChild"/>
    </div>
    <div class="home-child"  id="theme-view">
      <PageThreeView  ref="homeChild"/>
    </div>
    <div class="home-child bg-[#000] max-w-[100vw] overflow-hidden"  id="events-carousel">
      <CarouselEventsView ref="homeChild" />
    </div>
    <div class="home-child" id="team-view partners-view">
      <PageSevenView  ref="homeChild"/>
    </div>
    <div class="home-child"  id="footer-view">
      <FooterView  ref="homeChild" />
    </div>
  </div>
</template>

<style scoped>
.home-child {
  scroll-snap-align: start;
  scroll-behavior: smooth;
}

</style>
