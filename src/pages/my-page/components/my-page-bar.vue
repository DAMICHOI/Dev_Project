<template>
  <div class="row2">
    <ul class="top-menu">
      <li><a class="menus">Home</a></li>
      <li><a class="menus">Company</a></li>
      <li><a class="menus">Mypage</a></li>
      <li><a class="menus">Logout</a></li>
    </ul>
  </div>
</template>

<style>
.row2 {
  border: 1px solid;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  position:fixed;
  width:100%;
  top:110px;
}
.row3 {
  overflow: auto;
}
@media screen and (max-width: 768) {
  .row2 {
    flex-direction: column;
  }
  .top-menu {
    flex-direction: column;
  }
  .li {
    padding: 0px 30px;
  }
}
.top-menu {
  display: flex;
  justify-content: center;
  text-align: center;
  vertical-align: middle;

  list-style-type: none;
  float: left;
  line-height: 30px;

  margin: 5px auto;
  padding: 0;
}
.top-menu li {
  text-decoration: none;
  color: black;
  padding-right: 60px;
  width: 150px;
  font-size: 15px;
  font-weight: bold;
  display: inline;
}
</style>
