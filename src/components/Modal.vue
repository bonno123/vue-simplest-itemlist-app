<script>
export default {
  props: {
    show: Boolean
  }
}
</script>

<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="close">
            <button
            class="modal-default-button"
            @click="$emit('close')"
            >X</button>  
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
  /* margin: 0px auto; */
  margin: 1.5rem auto auto auto;
  padding: 1.25rem 1rem;
  border-style: solid;
  border-color: rgb(0, 88, 4);
  border-width: 0.007pt;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header h3 {
  margin-top: 0;
  color: #b94266;
  display: none;
}

.modal-body {
  margin: 20px 0;
  color: #b94266;
  font-weight: 600;
}
.modal-body h4 {
  /* margin-top: 0; */
  color: #42b952;
}

.modal-footer {
  margin: 0;
}

.modal-default-button {
  /* float: right; */
  padding: 0.2rem .6rem;
  font-size: 0.8rem;
  font-weight: bold;
  color: white;
  border-style: none;
  background-color: red;
}
.close{
  
  position: relative;
  /* top: 0; */
  /* right: 0; */
  /* font-size: 18px; */
  display:flex;
  flex-flow: row-reverse;
  margin-right: -1.124rem;
  margin-top: -1.312rem;
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