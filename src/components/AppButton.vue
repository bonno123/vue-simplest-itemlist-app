<template>
  <button class="btn" :class="buttonClass">
    <slot />
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: { type: String, default: "" },
});

const buttonClass = computed(() => {
  if (props.variant === "delete") {
    return "btn--delete";
  }
  if (props.variant === "cancel") {
    return "btn--cancel";
  }
  if (props.variant === "save") {
    return "btn--save";
  }
  if (props.variant === "add-item") {
    return "btn--add-item";
  }
  return "";
});
</script>
<style>
.btn--add-item {
  background: linear-gradient(180deg, rgb(50, 232, 141), rgb(0, 255, 0));
  color: rgb(255, 255, 255);
  margin-right: -4rem !important;
  border: none;
}
.btn--delete {
  box-sizing: border-box;
  border-style: solid;
  color: rgb(0, 0, 0);

  padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  border-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  border-width: 1pt;
  background-color: rgba(255, 86, 34, 0.97);
}
.btn--delete:hover {
  background-color: rgba(255, 86, 34, 0.84);
  transition: all 0.3s;
}

.btn--cancel {
  color: red;
}
.btn--save {
  border: none;
  background: linear-gradient(180deg, rgb(50, 138, 232), rgb(8, 0, 255));
  color: white;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.79);
  height: 2.563rem;
  width: 7.563rem;
}

.btn--save:hover {
  background: linear-gradient(90deg, rgb(8, 0, 255), rgb(50, 138, 232));
}

.btn {
  border-radius: 0.188rem;
  margin: auto 0;

  flex-shrink: 0;
  cursor: pointer;
  font-size: 0.9rem;
  letter-spacing: 0.031rem;
  transition: all 0.1s ease-in;
}
.btn:hover {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.79);
}

.btn[disabled] {
  background: linear-gradient(0deg, rgb(96, 95, 128), rgb(68, 93, 119));
  cursor: not-allowed;
}

.btn[disabled]:hover {
  background: linear-gradient(1800deg, rgb(78, 76, 121), rgb(50, 88, 129));
}
</style>
