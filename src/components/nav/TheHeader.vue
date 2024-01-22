<template>
  <header>
    <h1>
      <router-link to="/">Szulejmán étterem</router-link>
    </h1>
    <nav>
      <ul>
        <li>
          <router-link to="/products">Rendelés</router-link>
        </li>
        <li>
          <router-link to="/cart">Kosár</router-link>
          <base-badge mode="elegant">{{ cartQuantity }}</base-badge>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/admin">Admin</router-link>
        </li>
      </ul>
    </nav>
    <div>
      <button v-if="!isLoggedIn" @click="login">Belépés</button>
      <button v-if="isLoggedIn" @click="logout">Kilépés</button>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    cartQuantity() {
      return this.$store.getters['cart/quantity'];
    },
    isLoggedIn() {
      return this.$store.getters.isAuthenticated;
    },
  },
  methods: {
    login() {
      this.$store.dispatch('login');
    },
    logout() {
      this.$store.dispatch('logout');
    },
  },
};
</script>

<style scoped>
header {
  height: 6rem;
  background-color: #f0b800;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-self: center;
  align-items: center;
}

li {
  margin: 0 1rem;
}

a {
  text-decoration: none;
  color: #6a328a;
  font-weight: bold;
  border-bottom: 2px solid transparent;
  padding-bottom: 0.25rem;
}

a:hover,
a:active,
a.router-link-active {
  color: #45006d;
  border-color: #45006d;
}

button {
  font: inherit;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  border: 1px solid #45006d;
  background-color: #45006d;
  color: #f0b800;
  border-radius: 30px;
}

button:hover,
button:active {
  background-color: #6a328a;
}
</style>
