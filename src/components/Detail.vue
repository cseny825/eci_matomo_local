<template>
  <div class="detail-container">
    <h1>Product Detail</h1>
    <div class="product-detail">
      <h2>{{ product.name }}</h2>
      <p>{{ product.description }}</p>
      <button @click="buy(product)">Buy</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const product = ref({})

onMounted(() => {
  const productId = route.query.productUniqueKey
  console.log('productId:', productId)
  // Fetch product details based on the productId
  // For simplicity, we use hardcoded data here
  const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 100 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 200 },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 300 }
  ]
  product.value = products.find(p => p.id == productId) || {}
})

const buy = (product) => {
  const _paq = window._paq = window._paq || []
  _paq.push(['addEcommerceItem',
    product.id, // (required) SKU: Product unique identifier
    product.name, // (optional) Product name
    product.price, // (Recommended) Product Price
    1 // (Optional - Defaults to 1)
  ]);
  _paq.push(['trackEcommerceOrder',
    Math.floor(Math.random() * 1000000).toString(), // (Required) orderId
    product.price, // (Required) grandTotal (revenue)
  ]);
  console.log('Product purchased:', product)
}
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
