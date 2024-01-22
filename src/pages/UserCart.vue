<template>
  <section>
    <h2>Kosarad</h2>
    <h3>
      Végösszeg: <base-badge mode="elegant">{{ cartTotal }} Forint</base-badge>
      <button @click="order" v-if="cartTotal >= 1">Rendelés</button>
    </h3>
    <ul>
      <cart-item
        v-for="item in cartItems"
        :key="item.productId"
        :prod-id="item.productId"
        :title="item.title"
        :image="item.image"
        :price="item.price"
        :qty="item.qty"
      ></cart-item>
    </ul>
  </section>
</template>

<script>
import CartItem from '../components/cart/CartItem.vue';

export default {
  components: {
    CartItem,
  },
  computed: {
    cartTotal() {
      return this.$store.getters['cart/totalSum'].toFixed(0);
    },
    cartItems() {
      return this.$store.getters['cart/products'];
    },
  },
  methods: {
    order() {
      return alert(
        'Sikeres rendelés! Csak Önnek, csak ma, ingyenes szállítással!'
      );
    },
  },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
}

h2 {
  color: #292929;
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 1rem;
}

h3 {
  text-align: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
button {
  font: inherit;
  border: 1px solid #8f0030;
  background-color: #8f0030;
  color: white;
  cursor: pointer;
  padding: 0.15rem 1.25rem;
  margin: 0 0.75rem;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #53001c;
  border-color: #53001c;
}
</style>
