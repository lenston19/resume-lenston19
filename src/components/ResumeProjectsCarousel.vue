<template>
  <q-carousel
    v-model="slide"
    swipeable
    animated
    :control-type="controlType"
    control-color="yellow"
    navigation
    padding
    arrows
    infinite
    height="300px"
    class="text-yellow bg-transparent"
  >
    <q-carousel-slide name="style" class="column no-wrap flex-center">
      <div class="row justify-end">
        <div class="col-6">
          <div class="q-mt-md text-center text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel atque
            deserunt labore inventore nulla sit excepturi rem? Quibusdam laborum
            dignissimos itaque, ducimus vero ratione hic! Accusamus et
            repellendus odit nemo!
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="tv" class="column no-wrap flex-center">
      <div class="row justify-end">
        <div class="col-6">
          <div class="q-mt-md text-center text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel atque
            deserunt labore inventore nulla sit excepturi rem? Quibusdam laborum
            dignissimos itaque, ducimus vero ratione hic! Accusamus et
            repellendus odit nemo!
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="layers" class="column no-wrap flex-center">
      <div class="row justify-end">
        <div class="col-6">
          <div class="q-mt-md text-center text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel atque
            deserunt labore inventore nulla sit excepturi rem? Quibusdam laborum
            dignissimos itaque, ducimus vero ratione hic! Accusamus et
            repellendus odit nemo!
          </div>
        </div>
      </div>
    </q-carousel-slide>
    <q-carousel-slide name="map" class="column no-wrap flex-center">
      <div class="row justify-end">
        <div class="col-6">
          <div class="q-mt-md text-center text-white">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel atque
            deserunt labore inventore nulla sit excepturi rem? Quibusdam laborum
            dignissimos itaque, ducimus vero ratione hic! Accusamus et
            repellendus odit nemo!
          </div>
        </div>
      </div>
    </q-carousel-slide>
  </q-carousel>
</template>

<script setup>
import { ref } from "vue";

const slide = ref("style");
const controlType = ref("outline");
</script>
