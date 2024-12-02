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
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
import Card from './Card.vue'; // 引入 Card 组件

const router = useRouter();
const routes = ref([
  { origin: 'New York', destination: 'Los Angeles' },
  { origin: 'San Francisco', destination: 'Chicago' },
  { origin: 'Miami', destination: 'Houston' },
  // 添加更多航线信息
]);

const navigateToSearchQuote = (route) => {
  router.push({
    path: '/digital/product/search-quote',
    query: { from: route.from, to: route.to }
  });
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
