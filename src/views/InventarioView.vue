<script setup lang="ts">
import HeroInventario from '../components/sections/inventario/HeroInventario.vue';
import FuncionalidadesInventario from '../components/sections/inventario/FuncionalidadesInventario.vue';
import IntegracionesBar from '../components/sections/general/IntegracionesBar.vue';
import CtaInicio from '../components/sections/general/CtaInicio.vue';
import TrustedCompanies from '../components/sections/general/TrustedCompanies.vue';
</script>

<template>
  <main>
    <HeroInventario />
    <IntegracionesBar />
    <FuncionalidadesInventario />
    <TrustedCompanies />
    <CtaInicio />
  </main>
</template>