<template>
  <button class="btn" :class="buttonClass">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: {
    variant: { type: String, default: "" },
  },
  computed: {
    buttonClass() {
      if (this.variant === "delete") {
        return "btn--delete";
      }
      if (this.variant === "cancel") {
        return "btn--cancel";
      }
      if (this.variant === "save") {
        return "btn--save";
      }
      if (this.variant === "add-item") {
        return "btn--add-item";
      }
      return "";
    },
  },
};
</script>
<style>
.btn--add-item {
  background: linear-gradient(180deg, #32e88d, #00ff00);
  color: rgb(255, 255, 255);

  border: none;
}
.btn--delete {
  box-sizing: border-box;
  border-style: solid;
  color: rgb(0, 0, 0);

  padding: 0.1rem 0.2rem 0.1rem 0.2rem;
  border-color: #ffffff;
  color: rgb(255, 255, 255);
  border-width: 1pt;
  background-color: #ff5622d5;
}
.btn--delete:hover {
  background-color: #ff5622f8;
  transition: all 0.3s;
}

.btn--cancel {
  color: red;
}
.btn--save {
  border: none;
  background: linear-gradient(180deg, #328ae8, #0800ff);
  color: white;
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.79);
}

.btn--save:hover {
  background: linear-gradient(90deg, #0800ff, #328ae8);
}

.btn {
  border-radius: 3px;
  margin: auto 0;

  flex-shrink: 0;
  cursor: pointer;
  font-size: 0.9rem;
  letter-spacing: 0.5px;
  transition: all 0.1s ease-in;
}
.btn:hover {
  box-shadow: 0px 0px 0px 0px rgba(0, 0, 0, 0.79);
}

.btn[disabled] {
  background: linear-gradient(0deg, #605f80, #445d77);
  cursor: not-allowed;
}

.btn[disabled]:hover {
  background: linear-gradient(1800deg, #4e4c79, #325881);
}
</style>
