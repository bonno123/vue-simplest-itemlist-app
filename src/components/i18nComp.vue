<template>
  <!-- <div>
    <button @click="setLocale('en')">english</button>
    <button @click="setLocale('bn')">Bengali</button>
  </div> -->
  <div class="lang-change">
    <span :class="{ active: !localeValue }">EN</span
    ><label class="switch">
      <input v-model="localeValue" type="checkbox" @change="setLocale" />
      <span class="slider"></span> </label
    ><span :class="{ active: localeValue }">BN</span>
  </div>
</template>

<script>
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
  width: 50px;
  height: 24px;
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
  background: #fff;
  transition: 0.4s;
  border-radius: 50%;
  box-shadow: -1px 1px 6px 0px rgba(0, 0, 0, 0.68);
}

.slider:before {
  content: "";
  position: absolute;
  height: 19.5px;
  width: 19.5px;
  background: #656464e8;
  left: 5px;
  bottom: 2.5px;
  border-radius: 50px;
  transition: 0.3s cubic-bezier(0.42, 0, 0, 1.68);
}

input:checked + .slider {
  background-color: #2196f3;
}

input:checked + .slider:before {
  transform: translateX(19px);
  background: yellow;
}

input:checked + span {
  color: yellowgreen;
}
</style>
