<template>
  <body>
    <the-search></the-search>
    <the-menu></the-menu>
    <company-user-list :UserCompanys="UserCompanys"></company-user-list>
    <company-main-list :companys="companys"></company-main-list>
  </body>
</template>

<script src="./company-page.js"></script>

<style>
body {
  width: 100%;
  height: 100%;
  margin-left: 0;
  margin-right: 0;
}
</style>
