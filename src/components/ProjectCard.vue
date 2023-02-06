<template>
  <q-card class="bg-glass">
    <q-card-section class="text-black text-center">
      <div class="text-body1">
        <span v-html="project.name"></span>
      </div>
    </q-card-section>
    <q-separator />
    <q-card-section class="q-pb-none">
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label>
              <div class="text-subtitle1">
                {{ project.content.description }}
              </div>
            </q-item-label>
            <q-item-label class="q-py-sm">
              <div class="text-body2">Вклад в проект:</div>
              <div class="text-caption">
                {{ project.content.contribution }}
              </div>
            </q-item-label>
            <q-item-label overline>
              {{ project.content.technologies }}
            </q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card-section>
    <q-card-actions align="right">
      <q-btn
        size="1rem"
        flat
        rounded
        icon="las la-link"
        :href="project.content.url"
        target="_blank"
      />

      <q-btn
        :disable="project.content.github === ''"
        size="1rem"
        flat
        rounded
        icon="lab la-github"
        :href="project.content.github"
        target="_blank"
      />
    </q-card-actions>
  </q-card>
</template>

<script setup>
defineProps({
  project: Object,
});
</script>
