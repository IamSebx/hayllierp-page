<script setup lang="ts">
import PricingHero from '../components/sections/planes/PricingHero.vue'
import TrustedCompanies from '../components/sections/general/TrustedCompanies.vue'
import PricingGrid from '../components/sections/planes/PricingGrid.vue'
// @ts-expect-error - local SFC module typing is not available for this file
import ComparisonTable from '../components/sections/planes/ComparisonTable.vue'
import FaqSection from '../components/sections/planes/FaqSection.vue'
import ContactBanner from '../components/sections/planes/ContactBanner.vue'
</script>

<template>
  <main>
  <PricingHero />
  <PricingGrid />
  <ComparisonTable />
  <ContactBanner />
  <TrustedCompanies />
  <FaqSection />
  </main>
</template>