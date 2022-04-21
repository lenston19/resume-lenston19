<template>
  <q-page class="resume q-py-md">
    <div class="q-container resume__container">
      <q-card class="q-pa-md resume-card">
        <q-card-section class="row">
          <div class="col-12 text-center">
            <div class="text-h3 text-weight-medium">Дмитрий Смолоногов</div>
            <div class="text-h4 text-weight-medium text-purple-9 q-mt-sm">
              Front-End Developer
            </div>
          </div>
        </q-card-section>
        <q-card-section class="row q-col-gutter-md q-py-none">
          <div class="col-12 col-sm-6 col-md-6">
            <ResumeCard title="About">About Text</ResumeCard>

            <ResumeCard title="Образование">
              <div class="q-mb-sm flex justify-between">
                <div class="text-h6">РГЭУ(РИНХ)</div>
                <div class="text-overline">(2018-2022)</div>
              </div>
              <p class="text-body2 q-mb-sm">
                Факультет компьютерных технологий и информационной безопасности
              </p>
              <p class="text-body2">Информационные системы и технологии</p>
            </ResumeCard>

            <ResumeCard title="Опыт работы">
              <q-list>
                <q-item
                  ><q-item-section>
                    <q-item-label overline>FullStack разработчик</q-item-label>
                    <q-item-label>РГЭУ (РИНХ)</q-item-label>
                    <q-item-label caption
                      >Март 2021 — настоящее время</q-item-label
                    >
                  </q-item-section></q-item
                >
              </q-list>
            </ResumeCard>

            <ResumeCard title="Языки">
              <q-list>
                <q-item>
                  <q-item-section>
                    <q-item-label lines="1">Русский</q-item-label>
                  </q-item-section>
                </q-item>
                <q-item
                  ><q-item-section>
                    <q-item-label lines="1">Английский</q-item-label>
                    <q-item-label caption>на уровне документации</q-item-label>
                  </q-item-section></q-item
                >
              </q-list>
            </ResumeCard>
          </div>

          <div class="col-12 col-sm-6 col-md-6">
            <ResumeCard title="Навыки">
              <q-list class="row">
                <q-item
                  v-for="skill in skillList"
                  :key="skill.name"
                  class="col-3"
                >
                  <q-img
                    width="70px"
                    :src="require(`assets/icons/${skill.src}`)"
                    :alt="skill.alt"
                  />
                </q-item>
              </q-list>
              <q-separator />
              <q-card-section>
                <ol class="text-body1">
                  <li>Создание лендингов</li>
                  <li>Реализация SPA приложений</li>
                  <li>Проектирование баз данных</li>
                  <li>Адаптивная верстка</li>
                  <li>Аналитическое мышление</li>
                  <li>Проактивность</li>
                </ol>
              </q-card-section>
            </ResumeCard>
            <ResumeCard title="Достижения">
              <q-list>
                <q-item-label header>Призер хакатонов:</q-item-label>
                <q-item v-for="hack in hackathonList" :key="hack.name">
                  <q-item-section>
                    <div class="text-body2">{{ hack.name }}</div>
                  </q-item-section>
                  <q-item-section side top>
                    <q-badge color="purple-9" :label="hack.year" />
                  </q-item-section>
                </q-item>
              </q-list>
            </ResumeCard>
          </div>
        </q-card-section>
        <q-card-section class="q-py-none">
          <div class="row">
            <div class="col-12">
              <ResumeCard title="Контакты">
                <q-list class="row">
                  <q-item
                    v-for="link in linkList"
                    :key="link.url"
                    clicable
                    class="col-12 col-sm-6"
                    target="_blank"
                    :href="`https://${link.url}`"
                  >
                    <q-item-section>
                      <div class="row items-center">
                        <q-icon size="2rem" :name="link.icon" class="q-mr-sm" />
                        <div class="text-body2">{{ link.url }}</div>
                      </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </ResumeCard>
            </div>
          </div>
        </q-card-section>
      </q-card>
    </div>
  </q-page>
</template>

<script setup>
import ResumeCard from "components/ResumeCard.vue";
const skillList = [
  {
    src: "html5.svg",
    alt: "HTML5",
  },
  {
    src: "sass.svg",
    alt: "Sass",
  },
  {
    src: "vue.svg",
    alt: "VueJS",
  },
  {
    src: "quasar.svg",
    alt: "Quasar Framework",
  },
  {
    src: "ts.svg",
    alt: "TypeScript",
  },
  {
    src: "git.svg",
    alt: "Git",
  },
  {
    src: "python.svg",
    alt: "Python",
  },
  {
    src: "django.svg",
    alt: "Django",
  },
];
const linkList = [
  {
    url: "t.me/lenston19",
    type: "url",
    icon: "lab la-telegram",
  },
  {
    url: "github.com/lenston19",
    type: "url",
    icon: "lab la-github",
  },
];
const hackathonList = [
  {
    name: "InvestTech",
    year: "2021",
  },
  {
    name: "Tender Hack",
    year: "2021",
  },
  {
    name: "Human Hack",
    year: "2022",
  },
];
</script>
