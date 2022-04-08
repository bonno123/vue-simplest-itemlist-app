<template>
  <app-nav-bar />

  <div @load="checkItemList">
    <AppHeader
      :item-list="reversedItemArr"
      @delete-signal="removeItem"
      @toggle-purchase="togglePurchase"
      @open="openModal"
      @new-item="addItem"
    />

    <div>
      <Teleport to="body">
        <input-modal :show="showModal" @close="showModal = false">
          <template #header>
            <h3>custom header</h3>
          </template>

          <template #body>
            <input-field @new-item="addItem"></input-field>
          </template>

          <template #footer> </template>
        </input-modal>
      </Teleport>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";

import InputField from "./components/InputField.vue";
import AppHeader from "./components/AppHeader.vue";
import InputModal from "./components/InputModal.vue";
import AppNavBar from "./components/AppNavBar.vue";

const set_id = ref(1);
const showModal = ref(false);
const items = ref([]);

function addItem(e) {
  let newItem = {
    id: set_id.value++,
    itemName: e.itemName,
    priority: e.priority,
    itemType: e.itemType,
    itemPackageType: e.itemPackageType,
    itemPurchesed: false,
  };
  items.value.push(newItem);
  localStorage.setItem(newItem.id, JSON.stringify(newItem));
}

function removeItem(e) {
  items.value.splice(
    items.value.findIndex((x) => x.id === e),
    1
  );
  localStorage.removeItem(e);
}

function togglePurchase(e) {
  items.value.find((x) => x.id === e).itemPurchesed = !items.value.find(
    (x) => x.id === e
  ).itemPurchesed;
  localStorage.setItem(e, JSON.stringify(items.value.find((x) => x.id === e)));
}
function openModal() {
  showModal.value = true;
}

function checkItemList() {
  if (localStorage.length > 0) {
    // const items = ref([]);
    const key_list = [];
    for (let i = 0; i < localStorage.length; i++) {
      var Item = JSON.parse(localStorage.getItem(localStorage.key(i)));
      key_list.push(Item.id);
      if (Item.id != null) {
        items.value.push({
          id: Item.id,
          itemName: Item.itemName,
          priority: Item.priority,
          itemType: Item.itemType,
          itemPackageType: Item.itemPackageType,
          itemPurchesed: Item.itemPurchesed,
        });
      }
    }
    set_id.value = Math.max(...key_list) + 1;
  } else {
    for (let i = 0; i < items.value.length; i++) {
      localStorage.setItem(items[i].id, JSON.stringify(items[i]));
    }
  }
}

const reversedItemArr = computed(() => {
  return [...items.value].reverse();
});
onMounted(() => {
  checkItemList();
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #fff;
  padding: 1rem 2rem 1rem 2rem;
  margin: 5.3rem 1rem 1rem 1rem;
  border-radius: 0.188rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  width: 80%;
  max-width: 56.25rem;
}

.expanded-app-items {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.app-m-sm {
  margin: 1.5rem;
}
.app-p-sm {
  padding: 0.5rem 0.75rem;
}
</style>
