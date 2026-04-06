<script setup lang="ts">
import HeroInicio from '../components/sections/inicio/HeroInicio.vue'
import BeneficiosCards from '../components/sections/inicio/BeneficiosCards.vue'
import FeatureDetalle from '../components/sections/inicio/FeatureDetalle.vue'
import TrustedCompanies from '../components/sections/general/TrustedCompanies.vue'
import RubrosCarousel from '../components/sections/inicio/RubrosCarousel.vue'
import FaqInicio from '../components/sections/inicio/FaqInicio.vue'
import CtaInicio from '../components/sections/general/CtaInicio.vue'
</script>

<template>
  <main>
    <HeroInicio />
    <BeneficiosCards />
    <FeatureDetalle />
    <RubrosCarousel />
    <CtaInicio />
    <TrustedCompanies />
    <FaqInicio />
  </main>
</template>