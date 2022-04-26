<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-transparent text-black" height-hint="98">
      <q-toolbar>
        <q-space />
        <q-btn size="1.5rem" dense flat round icon="menu">
          <q-menu>
            <q-list>
              <q-item to="/" clickable active-class="menu-link">
                <q-item-section>Резюме</q-item-section>
              </q-item>
              <q-item to="/projects" clickable active-class="menu-link">
                <q-item-section>Проекты</q-item-section>
              </q-item>
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container style="padding-top: 0">
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup></script>
