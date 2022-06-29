<template>
  <q-page>
    <section class="fullpage"><ResumeIntro /></section>
    <section class="fullpage"><ResumeBeginningText /></section>
    <section class="fullpage"><ResumeProjectsCarousel /></section>
  </q-page>
</template>

<script setup>
import ResumeIntro from "src/components/ResumeIntro.vue";
import ResumeBeginningText from "src/components/ResumeBeginningText.vue";
import ResumeProjectsCarousel from "src/components/ResumeProjectsCarousel.vue";
import { onMounted, onUnmounted, ref } from "vue";

const inMove = ref(false);
const activeSection = ref(0);
const offsets = ref([]);
const touchStartY = ref(0);

const calculateSectionOffsets = () => {
  let sections = document.getElementsByTagName("section");
  let length = sections.length;
  for (let i = 0; i < length; i++) {
    let sectionOffset = sections[i].offsetTop;
    offsets.value.push(sectionOffset);
  }
};

const scrollToSection = (id, force = false) => {
  if (inMove.value && !force) return false;
  activeSection.value = id;
  inMove.value = true;
  document.getElementsByTagName("section")[id].scrollIntoView({
    behavior: "smooth",
  });
  setTimeout(() => {
    inMove.value = false;
  }, 400);
};

const handleMouseWheel = (e) => {
  if (e.wheelDelta < 30 && !inMove.value) {
    moveUp();
  } else if (e.wheelDelta > 30 && !inMove.value) {
    moveDown();
  }
  e.preventDefault();
  return false;
};

const moveDown = () => {
  inMove.value = true;
  activeSection.value--;
  if (activeSection.value < 0) activeSection.value = offsets.value.length - 1;
  scrollToSection(activeSection.value, true);
};

const moveUp = () => {
  inMove.value = true;
  activeSection.value++;
  if (activeSection.value > offsets.value.length - 1) activeSection.value = 0;
  scrollToSection(activeSection.value, true);
};

const touchStart = (e) => {
  e.preventDefault();
  touchStartY.value = e.touches[0].clientY;
};
const touchMove = (e) => {
  if (inMove.value) return false;
  e.preventDefault();
  const currentY = e.touches[0].clientY;
  if (touchStartY.value < currentY) {
    moveDown();
  } else {
    moveUp();
  }
  touchStartY.value = 0;
  return false;
};

window.addEventListener("mousewheel", handleMouseWheel, {
  passive: false,
}); // Other browsers
window.addEventListener("touchstart", touchStart, {
  passive: false,
}); // mobile devices
window.addEventListener("touchmove", touchMove, {
  passive: false,
}); // mobile devices

onMounted(() => {
  calculateSectionOffsets();
});

onUnmounted(() => {
  window.removeEventListener("mousewheel", handleMouseWheel, {
    passive: false,
  }); // Other browsers

  window.removeEventListener("touchstart", touchStart); // mobile devices
  window.removeEventListener("touchmove", touchMove); // mobile devices
});
</script>

<style>
.fullpage {
  height: 100vh;
  width: 100%;
}
</style>
