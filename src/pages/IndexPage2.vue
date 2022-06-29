<template>
  <q-page>
    <div class="fullpage-container">
      <section class="fullpage">
        <ResumeIntro />
      </section>
      <section class="fullpage">
        <ResumeBeginningText />
      </section>
      <section class="fullpage">
        <ResumeProjectsCarousel />
      </section>
    </div>
  </q-page>
</template>

<script setup>
import ResumeIntro from "src/components/ResumeIntro.vue";
import ResumeBeginningText from "src/components/ResumeBeginningText.vue";
import ResumeProjectsCarousel from "src/components/ResumeProjectsCarousel.vue";
</script>

<style>
.fullpage-container {
  scroll-snap-type: y mandatory !important;
  overflow-y: scroll;
  height: 100vh;
}
.fullpage {
  height: 100vh;
  scroll-snap-align: start;
}
</style>
