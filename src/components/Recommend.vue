<template>
  <div class="content-wrapper">
    <div class="title-container">
      <h1>Global Product Recommendations</h1>
    </div>
    <div class="card-container">
      <Card
          v-for="(route, index) in routes"
          :key="index"
          :route="route"
      />
    </div>
  </div>
  <button @click="navigateToSearchQuote({ from: 'Dashboard', to: 'Search Quote' })" class="btn">
    Dashboard -> Search Quote
  </button>
  <button @click="addProduct()" class="btn">
    Add Product
  </button>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Card from './Card.vue'; // 引入 Card 组件

const router = useRouter()
const goToSearch = (route) => {
  const query = {
    origin: route.origin,
    destination: route.destination,
    pk_abe: 'recommendFunction',
    pk_abv: route.pk_abv,
    matomo_campaign: 'search_condition'
  }
  router.push({ path: '/search', query })
}

const routes = ref([
  { origin: 'New York', destination: 'Los Angeles', pk_abv: 'precise' },
  { origin: 'San Francisco', destination: 'Chicago', pk_abv: 'original' },
  { origin: 'Miami', destination: 'Houston', pk_abv: 'precise' },
  // 添加更多航线信息
]);

const navigateToSearchQuote = (route) => {
  router.push({
    path: '/digital/product/search-quote',
    query: { from: route.from, to: route.to }
  });
};

const addProduct = () => {
  // Push Product View Data to Matomo - Populate parameters dynamically
  _paq.push(['setEcommerceView',
    "2", // (Required) productSKU
    "Product 2", // (Optional) productName
    "Category 2", // (Optional) categoryName
    200 // (Optional) price
  ]);
  _paq.push(['trackPageView']);
  // _paq.push(['setEcommerceView',
  //   false, // Product name is not applicable for a category view.
  //   false, // Product SKU is not applicable for a category view.
  //   "Category 1", // (Optional) Product category, or array of up to 5 categories
  // ]);
  // _paq.push(['trackPageView']);
};

onMounted(() => {
  routes.value.forEach(route => {
    trackImpression(getTrackContent(route), null, getTrackTarget(route));
  });
});

const getTrackContent = (route) => {
  return `${route.origin} -> ${route.destination}`;
};

const getTrackTarget = (route) => {
  return 'Search';
};

const trackImpression = (contentName, contentPiece, contentTarget) => {
  const _paq = window._paq = window._paq || [];
  _paq.push(['trackContentImpression', "Global Product Recommendations", contentName, contentTarget]);
};
</script>

<style scoped>


.content-wrapper {
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.title-container {
  text-align: center;
  margin-bottom: 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  max-width: 80%;
}

.btn {
  margin: 10px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
}
</style>
