<template>
  <div class="search-container">
    <h1>Recent Searches</h1>
    <div class="card-container">
      <Card
          v-for="(route, index) in recentSearcheList"
          :key="index"
          :route="route"
          cardCategory='Recent Searches'
      />
    </div>

    <h1>Product Search</h1>
    <form class="search-form">
      <label for="origin">Start:</label>
      <input type="text" id="origin" v-model="origin" />
      <label for="destination">Destination:</label>
      <input type="text" id="destination" v-model="destination" />
      <button type="button" @click="searchProducts">Search</button>
    </form>
    <h1>Recommended For You</h1>
    <div class="card-container">
      <Card
          v-for="(route, index) in recommendedForYouList"
          :key="index"
          :route="route"
          cardParam="Recommended For You"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import Card from "@/components/Card.vue";

const router = useRouter()
const route = useRoute()

const origin = ref(route.query.origin || 'default origin')
const destination = ref(route.query.destination || 'default destination')
const products = ref([])

const searchProducts = () => {

  // const query = `${encodeURIComponent(origin.value)},${encodeURIComponent(destination.value)},CY,CY`;
  const query = `${encodeURIComponent(origin.value)} -> ${encodeURIComponent(destination.value)}`;
  if (origin.value.trim() && destination.value.trim()) {
    router.push({
      path: '/digital/product/search-result'
    });

    _paq.push(['trackSiteSearch', query, "Input", 1]);

    // var searchCount = 15; // set this value when rendering the search result page
    // _paq.push(['setCustomUrl', document.URL + '&search_count=' + searchCount]);
    // _paq.push(['setCustomUrl', document.URL]);
    // _paq.push(['trackPageView']);
  } else {
    alert('Please enter both start and destination.');
  }
}

const recentSearcheList = ref([
  { origin: 'New York', destination: 'Los Angeles', pk_abv: 'precise' },
  { origin: 'San Francisco', destination: 'Chicago', pk_abv: 'original' },
  { origin: 'Miami', destination: 'Houston', pk_abv: 'precise' },
  // 添加更多航线信息
]);

const recommendedForYouList = ref([
  { origin: 'New York', destination: 'Los Angeles', pk_abv: 'precise' },
  { origin: 'San Francisco', destination: 'Chicago', pk_abv: 'original' },
  { origin: 'Miami', destination: 'Houston', pk_abv: 'precise' },
  // 添加更多航线信息
]);

const goToDetail = (id) => {
  router.push(`/detail/${id}`)
}

onMounted(() => {
  recentSearcheList.value.forEach(route => {
    trackImpression('Recent Searches', getTrackContent(route), null, getTrackTarget(route));
  });
  recommendedForYouList.value.forEach(route => {
    trackImpression("Recommended For You", getTrackContent(route), null, getTrackTarget(route));
  });
});
const trackImpression = (category, contentName, contentPiece, contentTarget) => {
  const _paq = window._paq = window._paq || [];
  _paq.push(['trackContentImpression', category, contentName, contentTarget]);
};

const getTrackContent = (route) => {
  return `${route.origin} -> ${route.destination}`;
};

const getTrackTarget = (route) => {
  return 'Search';
};
</script>

<style scoped>
@import '../assets/styles/CardContainer.css';

.search-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ff0000;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.search-form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
}

.search-form label {
  font-weight: bold;
  color: #ff0000;
}

.search-form input {
  padding: 10px;
  border: 1px solid #ff0000;
  border-radius: 5px;
}

.search-form button {
  padding: 10px 20px;
  background-color: #ff0000;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.search-form button:hover {
  background-color: #cc0000;
}

.product-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.product-card {
  padding: 10px;
  background-color: #fff;
  border: 1px solid #ff0000;
  border-radius: 5px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.product-card h3 {
  margin: 0;
  color: #ff0000;
}

.product-card p {
  margin: 5px 0 0;
}
</style>
