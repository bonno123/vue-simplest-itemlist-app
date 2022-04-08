<template>
  <div class="lang-change">
    <span :class="{ active: !localeValue }">EN</span
    ><label class="switch">
      <input v-model="localeValue" type="checkbox" @change="setLocale" />
      <span class="slider"></span> </label
    ><span :class="{ active: localeValue }">BN</span>
  </div>
</template>

<script>
// import { ref } from "vue";

// const localeValue = ref(false);

// function setLocale() {
//   if (localeValue.value) {
//     this.$i18n.locale = "bn";
//   } else {
//     this.$i18n.locale = "en";
//   }
// }

export default {
  data() {
    return {
      localeValue: false,
    };
  },
  methods: {
    setLocale() {
      if (this.localeValue) {
        this.$i18n.locale = "bn";
      } else {
        this.$i18n.locale = "en";
      }
    },
  },
};
</script>

<style>
.active {
  color: rgb(255, 0, 131);
}
.lang-change {
  display: flex;
  min-width: 7rem;
  justify-content: space-between;
  align-items: center;
}
.switch {
  position: relative;
  display: inline-block;
  width: 3.125rem;
  height: 1.5rem;
}

.switch input {
  width: 0;
  height: 0;
  opacity: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgb(255, 255, 255);
  transition: 0.4s;
  border-radius: 50%;
  box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.68);
}

.slider:before {
  content: "";
  position: absolute;
  height: 1.219rem;
  width: 1.219rem;
  background: rgba(101, 100, 100, 0.91);
  left: 0.313rem;
  bottom: 0.156rem;
  border-radius: 3.125rem;
  transition: 0.3s cubic-bezier(0.42, 0, 0, 1.68);
}

input:checked + .slider {
  background-color: rgb(33, 150, 243);
}

input:checked + .slider:before {
  transform: translateX(1.118rem);
  background: rgb(255, 255, 0);
}

input:checked + span {
  color: rgb(154, 205, 50);
}
</style>
