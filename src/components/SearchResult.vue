<template>
  <div>
    <ul>
      <li v-for="result in searchResults" :key="result.productUniqueKey">
        <h3>{{ result.title }}</h3>
        <p>{{ result.description }}</p>
        <button @click="navigateToPreBook(result)" class="btn detail-btn">
          View Details ({{ result.from }} -> {{ result.to }})
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const searchResults = ref([
      {
        title: 'Flight from New York to Los Angeles',
        description: 'Direct flight, 6 hours',
        productUniqueKey: 1,
        from: 'New York',
        to: 'Los Angeles'
      },
      {
        title: 'Train from London to Paris',
        description: 'Eurostar, 2 hours 16 minutes',
        productUniqueKey: 2,
        from: 'London',
        to: 'Paris'
      },
      {
        title: 'Bus from Tokyo to Seoul',
        description: 'Overnight bus, 15 hours',
        productUniqueKey: 3,
        from: 'Tokyo',
        to: 'Seoul'
      },
    ]);

    const navigateToPreBook = (result) => {
      _paq.push(['trackEvent', 'viewDetail', 'product', result.title]);
      router.push({
        path: '/digital/product/pre-book',
        query: {
          productUniqueKey: result.productUniqueKey,
          from: result.from,
          to: result.to
        }
      });
    };

    return {
      searchResults,
      navigateToPreBook
    };
  }
};
</script>

<style scoped>
.detail-btn {
  /* Add your button styles here */
}
</style>

