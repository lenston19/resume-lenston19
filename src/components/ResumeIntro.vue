<template>
  <div class="container intro mh-100">
    <div class="row justify-center">
      <q-intersection
        once
        transition-duration="1500"
        transition="fade"
        class="intro__item"
      >
        <div class="col-12">
          <div class="text-h5 intro__title">
            A long time ago in a galaxy far, <br />far away....
          </div>
        </div>
      </q-intersection>
    </div>

    <q-icon
      class="intro__next-step"
      name="las la-sort-down"
      color="white"
      size="2rem"
    />
  </div>
</template>

<script setup></script>
