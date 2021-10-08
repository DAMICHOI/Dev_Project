<template>
  <!-- <main-page /> -->
  <!-- <company-page /> -->
  <!-- <my-page /> -->
  <!-- <sign-in-page /> -->
  <sign-up-page />
</template>

<script>
// import MainPage from "./pages/main-page/main-page.vue";
// import CompanyPage from "./pages/company-page/company-page.vue";
// import MyPage from "./pages/my-page/my-page.vue";
// import SignInPage from "./pages/sign-in-page/sign-in-page.vue";
import SignUpPage from "./pages/sign-up-page/sign-up-page.vue";

export default {
  name: "App",
  components: {
    // MainPage,
    // CompanyPage,
    // MyPage,
    // SignInPage,
    SignUpPage,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
