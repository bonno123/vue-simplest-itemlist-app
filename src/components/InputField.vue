<template>
  <form class="input-form" @submit.prevent="sendNewItem">
    <div class="input-form-top">
      <div class="input-field">
        <input
          v-model="newItem"
          type="text"
          :placeholder="$t('input-placeholder')"
          maxlength="50"
        />
        <p class="counter">{{ charcount }}</p>
      </div>
    </div>

    <div class="input-form-priority">
      <label for="id-priority">
        <h4 style="margin-right: 1rem">
          {{ $t("input-label-priority") }}
        </h4>
      </label>
      <label>
        <select id="id-priority" v-model="newItemPriority">
          <option value="true">{{ $t("input-priority-options.high") }}</option>
          <option value="false">
            {{ $t("input-priority-options.low") }}
          </option>
        </select>
      </label>
    </div>
    <div>
      <label for="id-item-type">
        <h4>{{ $t("input-label-item-type") }}</h4>
      </label>

      <label id="id-item-type">
        <label>
          <input v-model="newItemType" type="radio" value="true" />
          {{ $t("input-item-type-options.paperback") }}
        </label>

        <label>
          <input v-model="newItemType" type="radio" value="false" />
          {{ $t("input-item-type-options.ebook") }}
        </label>
      </label>
    </div>
    <div class="input-form-bottom">
      <label for="id-pakegging">
        <h4>
          {{ $t("input-label-packaging") }}
          <span>*</span>
        </h4>
      </label>

      <label id="id-pakegging">
        <label v-for="i in itemPackageTypeDict" :key="i.id">
          <input :id="i" type="checkbox" @click="sinkItemPackageType(i)" />
          {{ $t("input-packaging-options.check1") }}
        </label>
      </label>
    </div>

    <div class="save-button-posititon">
      <slot name="footer-btn"></slot>
      <AppButton class="app-p-sm" :disabled="isDisabled" variant="save">
        {{ $t("buttons.save-item") }}
      </AppButton>
    </div>

    {{ newItem.length }} {{ newItemPackageType }}
  </form>
</template>

<script setup>
import { computed } from "@vue/reactivity";
import { ref } from "vue";
import AppButton from "./AppButton.vue";
const emit = defineEmits(["newItem"]);

const newItem = ref("");
const newItemPriority = ref(false);
const newItemType = ref("true");
const newItemPackageType = ref("");

const itemPackageTypeDict = ref(["check1", "check2", "check3", "check4"]);

const charcount = computed(() => {
  return 50 - newItem.value.length;
});

const isDisabled = computed(() => {
  return newItem.value.length < 4 || newItemPackageType.value.length == 0;
});

function sendNewItem() {
  if (newItem.value.length >= 4 && newItemPackageType.value.length != 0) {
    emit("newItem", {
      itemName: newItem.value,
      priority: newItemPriority.value,
      itemType: newItemType.value,
      itemPackageType: newItemPackageType.value,
    }),
      (newItem.value = "");
    newItemPriority.value = false;
    newItemType.value = "true";
    document.getElementById(newItemPackageType.value).checked = false;
    newItemPackageType.value = "";
  }
}

function sinkItemPackageType(packtype) {
  var sum_checked = false;

  for (let i in itemPackageTypeDict.value) {
    sum_checked =
      sum_checked ||
      document.getElementById(itemPackageTypeDict.value[i]).checked;
    if (sum_checked == false) {
      newItemPackageType.value = "";
    } else {
      newItemPackageType.value = packtype;
      for (let i in itemPackageTypeDict.value) {
        if (packtype != itemPackageTypeDict.value[i]) {
          document.getElementById(itemPackageTypeDict.value[i]).checked = false;
        }
      }
    }
  }
}
</script>

<style>
.save-button-posititon {
  float: right;
  margin: 0.5rem -1.07rem auto auto;
}

.input-field {
  display: flex;
  min-width: 80%;
  justify-content: flex-start;
  align-items: center;
}

.counter {
  font-size: 0.8rem;
  padding: 0.313rem 0.5rem;
  border-style: solid;
  border-color: rgba(64, 0, 82, 0.28);
  border-width: 1pt;
  cursor: text;
}

.input-field input {
  width: 85%;
  border-radius: 0.188;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 0.063 solid rgb(241, 245, 248);
  color: rgb(99, 117, 132);
  padding: 0.5rem 0.75rem;
  font-size: 1rem;
  letter-spacing: 0.031rem;
}

.input-form-priority {
  display: flex;
  align-items: center;
}
.input-form-bottom :first-child > span {
  /* display: flex wrap; */
  color: rgb(255, 0, 0);
  font-size: 1.125rem;
}
</style>
