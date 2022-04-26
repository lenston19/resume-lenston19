<template>
  <q-page class="projects q-py-md">
    <div class="q-container projects__container">
      <q-card class="q-pa-md projects-card waves">
        <q-card-section class="row">
          <div class="col-12 text-center">
            <div class="text-h3 text-weight-medium">Проекты</div>
          </div>
        </q-card-section>
        <q-card-section class="row q-col-gutter-md q-py-none">
          <div class="col-12">
            <q-card class="bg-glass">
              <q-card-section>
                <div class="text-body1">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel
                  neque odio possimus tenetur asperiores, itaque voluptatibus
                  eum, ipsa sequi officiis architecto voluptas quae vitae
                  tempora dolorum, eveniet corporis optio eaque.
                </div>
              </q-card-section>
            </q-card>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
const projectList = [
  {
    url: "html5.svg",
    github: "",
    description: "HTML5",
  },
];
</script>
