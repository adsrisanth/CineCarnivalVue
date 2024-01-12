<script setup></script>
<template>
    <div class="app-container flex justify-center relative mt-24 max-md:gap-6 max-xl:gap-12 gap-24 flex-wrap place-items-center">
      <img class="md:w-[40%] max-ssm:w-[85%] w-[70%]" src="https://i.ibb.co/m6xQ9fC/them12e.png" alt="temp"/>
      <div class="overlay-box2 lg:w-[40%]  md:w-[50%] max-md:px-4 max-sm:w-[90%] max-vsm:w-[95%] w-[75%] mb-3">
          <h2 class="overlay-heading2 font-extrabold font-montserrat text-left text-[50px] pb-8 max-sm:pb-4 max-lg:pb-4 max-sm:text-[55px] max-ssm:text-[45px] max-vsm:text-[35px] max-vvsm:text-[30px]">
            Theme
          </h2>
          <p class="mb-3 font-montserrat flex justify-center text-[18px] max-sm:text-[18px] max-ssm:text-[16px] max-vsm:text-[16px]">The theme for this contest is "Sustainable Development." Participants are
          encouraged to explore various dimensions of sustainable development, including
          but not limited to poverty, education, healthcare, environment, community devel-
          opment, and social inclusion<br><br>
          </p>
          <p class="mb-3 font-montserrat flex justify-left text-[18px] max-sm:text-[18px] max-ssm:text-[16px] max-vsm:text-[16px]">SUSTAINABLE DEVELOPMENT GOALS<br><br>
          1. Quality Education (SDG 4)<br>
          2. Gender Equality (SDG 5)<br>
          3. Clean Water and Sanitation (SDG 6)<br>
          4. Affordable and Clean Energy (SDG 7)<br>
          5. Sustainable Cities and Communities (SDG 11)<br>
          </p>
        </div>
      </div>
</template>

<style scoped>
.app-container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  margin: 0;
  background-color: rgb(0, 0, 0);
}
.overlay-box2{
  background-color: transparent;
  border-radius: 10px;
  text-align: left;
  color: #fff;
}

.overlay-box2 p {
  letter-spacing: 1px;
}

.overlay-heading2 {
  margin-bottom: 10px;
  font-family: 'Montserrat', sans-serif;
}

</style>