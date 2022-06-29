<template>
  <div class="container mh-100 beginning-text">
    <div class="row justify-center">
      <q-intersection
        once
        transition-duration="1500"
        transition="fade"
        class="beginning-text__item"
      >
        <div class="col-12">
          <div class="beginning-text__caption">Episode VI</div>
          <div class="beginning-text__title text-weigth-bolder q-my-md">
            Return of the Jedi
          </div>
        </div>
        <q-intersection
          once
          transition-duration="2000"
          transition="fade"
          class="beginning-text__item"
        >
        </q-intersection>
        <div class="col-6">
          <div class="text-h6 beginning-text__description">
            Turmoil has engulfed the Galactic Republic. The taxation of trade
            routes to outlying star systems is in dispute. Hoping to resolve the
            matter with a blockade of deadly battleships, the greedy Trade
            Federation has stopped all shipping to the small planet of Naboo.
            While the congress of the Republic endlessly debates this alarming
            chain of events, the Supreme Chancellor has secretly dispatched two
            Jedi Knights, the guardians of peace and justice in the galaxy, to
            settle the conflict....
          </div>
        </div>
      </q-intersection>
    </div>
  </div>
</template>

<script setup></script>
