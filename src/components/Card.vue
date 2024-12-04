<template>
  <div
      class="custom-card"
      @click="handleClick"
      @mouseover="handleMouseOver"
  >
    <div class="card-header">
      <h2>{{ route.origin }} - {{ route.destination }}</h2>
    </div>
    <div class="card-body">
      <p><strong>Start:</strong> {{ route.origin }}</p>
      <p><strong>Destination:</strong> {{ route.destination }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps({
  route: {
    type: Object,
    required: true
  }
});

const router = useRouter();

const handleClick = () => {
  const category = 'globalCard';
  const action = 'Click';
  const name = getTrackContent(props.route);
  router.push({ path: '/digital/product/search-result', query: { origin: props.route.origin, destination: props.route.destination} });
  _paq.push(['trackEvent', 'abtesting', 'recommendFunction', props.route.pk_abv]);
  trackEvent(category, action, name);
  _paq.push(['trackContentInteraction', 'cardClicked', "Global Product Recommendations", getTrackContent(props.route), getTrackTarget(props.route)]);
};

const getTrackContent = (route) => {
  return `${route.origin} -> ${route.destination}`;
};

const getTrackTarget = (route) => {
  return 'Search';
};

const trackEvent = (category, action, name) => {
  const _paq = window._paq = window._paq || [];
  _paq.push(['trackEvent', category, action, name]);
  _paq.push(['logAllContentBlocksOnPage']);
};

const handleMouseOver = () => {
  // _paq.push(['trackEvent', "Card", 'Card MouseOver', props.route.origin + '_' + props.route.destination]);
};
</script>

<style scoped>
.custom-card {
  width: 300px;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: #fff;
  border: 1px solid #ff0000;
  cursor: pointer;
}

.custom-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-header {
  background-color: #ff0000;
  color: #fff;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.card-body {
  padding: 10px;
}

.card-body p {
  margin: 5px 0;
}
</style>
