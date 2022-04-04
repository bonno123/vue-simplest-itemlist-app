<template>
  <div class="header">
    <div class="header-upper">
      <h1>Shopping List App</h1>
      <div class="expand-form-btn">
        <button
          v-if="showForm == false"
          class="custom-btn btn-edit-items"
          @click="toggleForm"
        >
          <span>Expand Form</span><span>Edit List !</span>
        </button>
        <button
          v-if="showForm == true"
          class="custom-btn btn-edit-cancel"
          @click="toggleForm"
        >
          <span> Close Edit</span>
        </button>
      </div>

      <div class="show-modal-btn">
        <AppButton
          id="show-modal"
          class="app-p-sm"
          variant="add-item"
          @click="$emit('open')"
        >
          Add item</AppButton
        >
      </div>
    </div>

    <div class="header-lower">
      <Transition name="slide-fade">
        <div v-if="showForm" class="expanded-input-space" @load="timeOutFunc">
          <InputField @new-item="sendNewItemAgain"> </InputField>
        </div>
      </Transition>

      <div class="app-list-area">
        <AppList
          :item-list-for-app-list="itemList"
          @delete-signal="sendAnotherDeleteSignal"
          @toggle-purchase="sendAnotherTogglePurchaseSignal"
        >
        </AppList>
      </div>

      <Transition name="fade">
        <div v-if="showLogo" class="logo-container">
          <img alt="Vue logo" src="src\assets\logo.png" />
        </div>
      </Transition>
    </div>
  </div>
</template>
<script>
import AppList from "./AppList.vue";
import AppButton from "./AppButton.vue";
import InputField from "./InputField.vue";

export default {
  components: { AppList, AppButton, InputField },
  props: {
    itemList: { type: Array, required: true },
  },
  emits: ["editSignal", "open", "deleteSignal", "togglePurchase", "newItem"],
  data() {
    return {
      showForm: false,
      showLogo: true,
      showModal: false,
    };
  },
  methods: {
    toggleForm() {
      if (this.showForm == false) {
        this.showLogo = !this.showLogo;
        setTimeout(() => {
          this.showForm = !this.showForm;
        }, 540);
      } else {
        this.showForm = !this.showForm;
        setTimeout(() => {
          this.showLogo = !this.showLogo;
        }, 10);
      }
    },
    sendAnotherDeleteSignal(itemId) {
      this.$emit("deleteSignal", itemId);
    },
    sendAnotherTogglePurchaseSignal(itemId) {
      this.$emit("togglePurchase", itemId);
    },
    sendNewItemAgain(e) {
      this.$emit("newItem", e);
    },
    timeOutFunc() {
      window.setTimeout;
    },
  },
};
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.09s ease-in;
}
.slide-fade-leave-active {
  transition: all 0.01s ease-out;
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.1s ease-in;
}
.fade-leave-active {
  transition: all 0.03s ease-out;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateX(10px);
}

.logo-container {
  display: flex;
  align-self: center;

  width: 362px;
  justify-content: center;
  transition-delay: 0.5s;
}
.header {
  display: flex;
  flex-flow: column;
  margin: 2rem 3rem 2rem 3rem;
}
.header-upper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0rem 1rem 0rem 1rem;
}
.header-lower {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0rem;
  min-height: 40vh;
}

@media screen and (min-width: 1044px) {
  div .show-modal-btn {
    display: none;
  }
}
@media screen and (max-width: 1044px) {
  div .expand-form-btn,
  .expanded-input-space {
    display: none;
  }
  .header-upper {
    flex-direction: column;
    align-items: baseline;
    margin: 0rem auto 0rem auto;
  }
}

/*-------------------------------btn-edit-item----------------------------------------------------*/

.custom-btn {
  width: 130px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  padding: 10px 25px;
  font-family: "Lato", sans-serif;
  font-weight: 500;
  background: transparent;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  outline: none;
}

.btn-edit-items {
  position: relative;
  right: 20px;
  bottom: 20px;
  border: none;
  box-shadow: none;
  width: 130px;
  height: 40px;
  line-height: 42px;
  -webkit-perspective: 230px;
  perspective: 230px;
}
.btn-edit-items span {
  background: rgb(77, 196, 127, 0.696);
  background: linear-gradient(
    0deg,
    rgba(34, 37, 59, 0.696) 2%,
    rgba(77, 196, 127, 0.696) 95%
  );
  display: block;
  position: absolute;
  width: 130px;
  height: 40px;
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin: 0;
  text-align: center;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}
.btn-edit-items span:nth-child(1) {
  box-shadow: -7px -7px 20px 0px #fff9, -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002, 4px 4px 5px 0px #0001;
  -webkit-transform: rotateX(90deg);
  -moz-transform: rotateX(90deg);
  transform: rotateX(90deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-edit-items span:nth-child(2) {
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
  -webkit-transform-origin: 50% 50% -20px;
  -moz-transform-origin: 50% 50% -20px;
  transform-origin: 50% 50% -20px;
}
.btn-edit-items:hover span:nth-child(1) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  transform: rotateX(0deg);
}
.btn-edit-items:hover span:nth-child(2) {
  box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
    7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
  color: transparent;
  -webkit-transform: rotateX(-90deg);
  -moz-transform: rotateX(-90deg);
  transform: rotateX(-90deg);
}

/*-------------------------------btn-edit-cancel----------------------------------------------------*/

.btn-edit-cancel {
  background: linear-gradient(0deg, rgb(255, 136, 0) 0%, rgb(255, 0, 0) 100%);
  line-height: 42px;
  padding: 0;
  border: none;
}
.btn-edit-cancel span {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
}
.btn-edit-cancel:before,
.btn-edit-cancel:after {
  position: absolute;
  content: "";
  right: 0;
  bottom: 0;
  background: rgba(251, 75, 2, 1);
  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.28s ease;
}
.btn-edit-cancel:before {
  height: 0%;
  width: 2px;
}
.btn-edit-cancel:after {
  width: 0%;
  height: 2px;
}
.btn-edit-cancel:hover {
  color: rgba(251, 75, 2, 1);
  background: transparent;
}
.btn-edit-cancel:hover:before {
  height: 100%;
}
.btn-edit-cancel:hover:after {
  width: 100%;
}
.btn-edit-cancel span:before,
.btn-edit-cancel span:after {
  position: absolute;
  content: "";
  left: 0;
  top: 0;
  background: rgba(251, 75, 2, 1);
  box-shadow: -7px -7px 20px 0px rgba(255, 255, 255, 0.9),
    -4px -4px 5px 0px rgba(255, 255, 255, 0.9),
    7px 7px 20px 0px rgba(0, 0, 0, 0.2), 4px 4px 5px 0px rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}
.btn-edit-cancel span:before {
  width: 2px;
  height: 0%;
}
.btn-edit-cancel span:after {
  height: 2px;
  width: 0%;
}
.btn-edit-cancel span:hover:before {
  height: 100%;
}
.btn-edit-cancel span:hover:after {
  width: 100%;
}
</style>
