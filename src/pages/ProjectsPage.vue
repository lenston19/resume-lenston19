<template>
  <q-page class="projects q-py-md">
    <div class="q-container projects__container">
      <q-card class="q-pa-md projects-card waves">
        <q-card-section class="row q-mb-md">
          <div class="col-12 text-center">
            <div class="text-h3 text-weight-medium">Проекты</div>
          </div>
        </q-card-section>
        <q-card-section class="row q-col-gutter-md q-py-none">
          <template
            v-for="project in projectList"
            :key="project.id"
          >
            <div class="col-12 col-md-6 col-lg-6">
              <ProjectCard :project="project" />
            </div>
          </template>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ProjectCard from 'components/ProjectCard.vue';
import type { IProject } from 'models'


const projectList = <IProject[]>[
  {
    id: 1,
    name: "Международная научно-практическая конференция <br/> 'Язык и коммуникация в контексте культуры'",
    content: {
      url: 'https://ioc2022.rsue.ru/',
      github: '',
      description: 'Мультиязычный сайт для регистрации участников конференции.',
      contribution: 'Полная логика приложения, написание всего кода клиента',
      technologies: 'Django, Django-i18n, Vue2, Splidejs.',
    },
  },
  {
    id: 2,
    name: 'Специализированный фонд управления целевым капиталом для развития РГЭУ (РИНХ)',
    content: {
      url: 'https://fond.rsue.ru/',
      github: '',
      description:
        'Фонд выполняет функцию дополнительного финансирования Университета.',
      contribution:
        'Верстка страниц, создание темы отображения для сайта (Новый год и т.д.), реализация частичной логики приложения.',
      technologies: 'Django, Vue2.',
    },
  },
  {
    id: 3,
    name: 'Олимпиада РГЭУ(РИНХ) для школьников',
    content: {
      url: 'https://olympiada.rsue.ru/',
      github: '',
      description: 'Cайт для регистрации участников олимпиады.',
      contribution: 'Реализация анимаций, верстка страниц',
      technologies: 'Django, Vue2.',
    },
  },
  {
    id: 4,
    name: 'Абитуриенту РГЭУ(РИНХ)',
    content: {
      url: 'https://abit.rsue.ru/',
      github: '',
      description:
        'Информационный сайт для абитурентов Ростовского Государственного Экономического Университета',
      contribution: 'Верстка страниц, реализация частичной логики приложения.',
      technologies: 'Django, Vue2.',
    },
  },
  {
    id: 5,
    name: 'Профессорский клуб РГЭУ(РИНХ)',
    content: {
      url: 'https://profclub.rsue.ru/',
      github: '',
      description:
        'Сайт предназначен для информирования пользователей о профессорском клубе РГЭУ(РИНХ)',
      contribution: 'Верстка страниц, реализация частичной логики приложения.',
      technologies: 'Django, Vue3, Quasar Framework, TypeScript.',
    },
  },
  {
    id: 6,
    name: 'Повышенная стипендия РГЭУ(РИНХ)',
    content: {
      url: 'https://stipend.rsue.ru/',
      github: '',
      description:
        'Сайт предназначенный для проведения рейтинга студентов по разным направлениям. На его основе студентам выплачиваются дополнительная стипендия',
      contribution: 'Верстка страниц, реализация частичной логики приложения.',
      technologies: 'Django, Vue3, Nuxt, Vuetify, TypeScript.',
    },
  },
];
</script>
