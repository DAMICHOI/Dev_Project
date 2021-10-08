<template>
  <body>
    <the-search></the-search>
    <the-menu></the-menu>
    <company-my-list :UserMyPage="UserMyPage"></company-my-list>
    <cardnews-user-list></cardnews-user-list>
    <!-- <my-page-logo :UserMyPage="UserMyPage"></my-page-logo>
    <my-page-cardnews> </my-page-cardnews> -->
  </body>
</template>

<style>
body {
  width: 100%;
  height: 100%;
  margin-left: 0;
  margin-right: 0;
}
</style>

<script src="./my-page.js"></script>
