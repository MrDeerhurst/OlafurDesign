<script setup>
import TheHeader from "@/components/TheHeader.vue";
import HeroSection from "@/components/HeroSection.vue";
import Value from "@/components/Value.vue";
import Impact from "@/components/Impact.vue";
import Onboarding from "@/components/Onboarding.vue";
import Roadmap from "@/components/Roadmap.vue";
import ContactSection from "@/components/ContactSection.vue";
import TheFooter from "@/components/TheFooter.vue";
</script>

<template>
  <TheHeader />
  <main>
    <HeroSection />
    <Value />
    <Impact />
    <Onboarding />
    <Roadmap />
    <ContactSection />
  </main>
  <TheFooter />
</template>
