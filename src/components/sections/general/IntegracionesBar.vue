<script setup lang="ts">
import Heroku from '../../../assets/Integraciones/Heroku.png'
import HubSpot from '../../../assets/Integraciones/HubSpot.png'
import Jira from '../../../assets/Integraciones/Jira.png'
import DigitalOcean from '../../../assets/Integraciones/DigitalOcean.png'
</script>

<template>
  <div class="integrations-bar">
    <div class="logos-container">
      <img :src="Heroku" alt="Heroku" class="integration-logo">
      <img :src="HubSpot" alt="HubSpot" class="integration-logo">
      <img :src="Jira" alt="Jira" class="integration-logo">
      <img :src="DigitalOcean" alt="DigitalOcean" class="integration-logo">
    </div>
  </div>
</template>

<style scoped>
.integrations-bar {
  background-color: #ffffff;
  border-top: 1px solid #e2e8f0;
  border-bottom: 1px solid #e2e8f0;
  padding: 30px 20px;
  position: relative;
  z-index: 10;
}

.logos-container {
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
}

.integration-logo {
  height: 100px;
  width: auto;
  object-fit: contain;
  opacity: 0.7;
  transition: opacity 0.3s ease;
}

.integration-logo:hover {
  opacity: 1;
} 

@media (max-width: 900px) {
  .logos-container {
    justify-content: center;
  }
}
</style>