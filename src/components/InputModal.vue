<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper" @click="$emit('close')">
        <div class="modal-container" :class="size" @click.stop="">
          <div class="close" @click="$emit('close')">
            <button class="modal-default-button">X</button>
          </div>
          <div class="modal-header">
            <slot name="header">default header</slot>
          </div>

          <div class="modal-body">
            <slot name="body">default body</slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <!-- default footer -->
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
const props = defineProps({
  show: Boolean,
});
const emit = defineEmits(["close"]);
</script>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.38s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 19rem;
  margin: 1.5rem auto auto auto;
  margin-top: 1.5rem;
  padding: 1.5rem 1rem;
  border-style: solid;
  border-color: rgb(0, 88, 4);
  border-width: 0.007pt;
  background-color: rgb(255, 255, 255);
  border-radius: 0.125rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: rgb(185, 66, 102);
  display: none;
}

.modal-body {
  margin: 1.25rem 0;
  color: rgb(185, 66, 102);
  font-weight: 600;
}
.modal-body h4 {
  color: rgb(66, 185, 82);
}

.modal-footer {
  margin: 0;
}

.modal-default-button {
  padding: 0.2rem 0.6rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: rgb(255, 255, 255);
  border-style: none;
  background-color: rgb(255, 0, 0);
}
.close {
  position: relative;

  display: flex;
  flex-flow: row-reverse;
  margin-right: -1rem;
  margin-top: -1.5rem;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
