<template>
  <div id="nav">
    <i18n-comp />
  </div>
</template>

<script setup>
import I18nComp from "./I18nComp.vue";
</script>

<style>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 1.25rem 1.25rem 1.563rem 1.25rem;
  color: rgb(44, 62, 80);
  background: rgb(255, 255, 255);

  display: flex;
  align-items: center;
  justify-content: right;
  z-index: 2;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}
</style>
