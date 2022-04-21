<template>
  <div class="text-h5 text-center text-uppercase text-purple-9 q-my-md">
    {{ title }}
  </div>
  <q-card class="bg-glass">
    <q-card-section>
      <slot> </slot>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  title: String,
});
</script>
