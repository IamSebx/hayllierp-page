<template>
  <div class="haylli-cta-banner">
    <h2>Comienza a experimentar hoy mismo</h2>
    <p>
      Explora las funcionalidades de nuestro ERP en tu negocio y comienza a optimizar tus procesos para maximizar tus ingresos.
    </p>
    <div class="haylli-cta-price">Desde S/. 59,00</div>
    
    <div class="haylli-cta-buttons">
      <a href="#" class="haylli-btn-dark">Demostración gratis</a>
      <a href="#" class="haylli-btn-dark">Personalizar plan</a>
    </div>
  </div>
</template>

<style scoped>
.haylli-cta-banner {
  background-color: var(--h-blue-primary);
  border-radius: 20px;
  padding: 60px 40px;
  text-align: center;
  color: #ffffff;
  max-width: 1000px;
  margin: 40px auto;
  box-shadow: 0 10px 30px rgba(0, 112, 187, 0.2);
}

.haylli-cta-banner h2 {
  color: #ffffff;
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  line-height: 1.3;
}

.haylli-cta-banner p {
  font-size: 18px;
  line-height: 1.6;
  margin: 0 auto 25px auto;
  font-weight: 400;
  max-width: 750px;
  color: #f1f5f9;
}

.haylli-cta-price {
  font-size: 26px;
  font-weight: 800;
  margin-bottom: 35px;
  color: #ffffff;
}

.haylli-cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.haylli-btn-dark {
  background-color: var(--h-navy);
  color: #ffffff;
  border: 2px solid #ffffff;
  padding: 14px 35px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  transition: all 0.3s ease;
}

.haylli-btn-dark:hover {
  background-color: #ffffff;
  color: var(--h-navy);
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .haylli-cta-banner { padding: 40px 20px; }
  .haylli-cta-banner h2 { font-size: 26px; }
  .haylli-cta-banner p { font-size: 16px; }
  .haylli-btn-dark { width: 100%; text-align: center; }
}
</style>