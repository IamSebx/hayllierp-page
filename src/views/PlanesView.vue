<script setup lang="ts">
import PricingHero from '../components/sections/planes/PricingHero.vue'
import TrustedCompanies from '../components/sections/general/TrustedCompanies.vue'
import PricingGrid from '../components/sections/planes/PricingGrid.vue'
import ComparisonTable from '../components/sections/planes/ComparisonTable.vue'
import FormularioContacto from '../components/sections/general/FormularioContacto.vue'
import FaqSection from '../components/sections/planes/FaqSection.vue'
import ContactBanner from '../components/sections/planes/ContactBanner.vue'
import TestimonioClients from '../components/sections/general/TestimonioClients.vue'
</script>

<template>
  <main>
  <PricingHero />
  <PricingGrid />
  <ComparisonTable />
  <ContactBanner />
  <FormularioContacto />
  <TrustedCompanies />
  <TestimonioClients />
  <FaqSection />
  </main>
</template>
