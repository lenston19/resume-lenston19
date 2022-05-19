<template>
  <q-page class="star-wars__bg">
    <ResumeIntro style="margin-bottom: 500px" v-for="n in 10" :key="n" />
  </q-page>
</template>

<script setup>
import ResumeIntro from "src/components/ResumeIntro.vue";
</script>
