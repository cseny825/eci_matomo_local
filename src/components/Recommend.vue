<template>
  <div>
    <h1>Product Recommendations</h1>
    <div class="card-container">
      <el-card
          v-for="(route, index) in routes"
          :key="index"
          class="route-card"
          shadow="always"
          @click="goToSearch(route)"
      >
        <div class="card-header">
          <h2>{{ route.origin }} - {{ route.destination }}</h2>
        </div>
        <div class="card-body">
          <p><strong>Start:</strong> {{ route.origin }}</p>
          <p><strong>Destination:</strong> {{ route.destination }}</p>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goToSearch = (route) => {
  router.push({ path: '/search', query: { origin: route.origin, destination: route.destination } })
}

const routes = ref([
  { origin: 'New York', destination: 'Los Angeles' },
  { origin: 'San Francisco', destination: 'Chicago' },
  { origin: 'Miami', destination: 'Houston' },
  // 添加更多航线信息
])
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.route-card {
  width: 300px;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: #fff;
  border: 1px solid #ff0000;
  cursor: pointer;
}

.route-card:hover {
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
