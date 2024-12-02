<template>
  <div class="detail-container">
    <h1>Product Detail</h1>
    <div class="product-detail">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref({})

onMounted(() => {
  const productId = route.params.productUniqueKey
  // Fetch product details based on the productId
  // For simplicity, we use hardcoded data here
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1' },
    { id: 2, name: 'Product 2', description: 'Description of Product 2' },
    { id: 3, name: 'Product 3', description: 'Description of Product 3' },
  ]
  product.value = products.find(p => p.id == productId) || {}
})
</script>

<style scoped>
.detail-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ff0000;
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.product-detail {
  text-align: center;
}

.product-detail h2 {
  color: #ff0000;
  margin-bottom: 10px;
}

.product-detail p {
  color: #333;
}
</style>
