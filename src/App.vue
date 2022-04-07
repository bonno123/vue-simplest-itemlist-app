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

<script>
import InputField from "./components/InputField.vue";
import AppHeader from "./components/AppHeader.vue";
import InputModal from "./components/InputModal.vue";
import AppNavBar from "./components/AppNavBar.vue";

export default {
  components: {
    InputField,
    AppHeader,
    InputModal,
    AppNavBar,
  },

  data() {
    return {
      set_id: 1,
      expandForm: false,
      showModal: false,
      items: [],
    };
  },
  computed: {
    filterPurchasedItems() {
      return [...this.items].filter((item) => !item.itemPurchesed);
    },
    reversedItemArr() {
      return [...this.items].reverse();
    },
  },
  mounted() {
    this.checkItemList();
  },
  methods: {
    addItem(e) {
      let newItem = {
        id: this.set_id++,
        itemName: e.itemName,
        priority: e.priority,
        itemType: e.itemType,
        itemPackageType: e.itemPackageType,
        itemPurchesed: false,
      };
      this.items.push(newItem);
      localStorage.setItem(newItem.id, JSON.stringify(newItem));
    },
    removeItem(e) {
      this.items.splice(
        this.items.findIndex((x) => x.id === e),
        1
      );
      localStorage.removeItem(e);
    },
    editForm() {
      this.expandForm = !this.expandForm;
    },
    togglePurchase(e) {
      this.items.find((x) => x.id === e).itemPurchesed = !this.items.find(
        (x) => x.id === e
      ).itemPurchesed;
      localStorage.setItem(
        e,
        JSON.stringify(this.items.find((x) => x.id === e))
      );
    },
    openModal() {
      this.showModal = true;
    },
    checkItemList() {
      if (localStorage.length > 0) {
        this.items = [];
        const key_list = [];
        for (let i = 0; i < localStorage.length; i++) {
          var Item = JSON.parse(localStorage.getItem(localStorage.key(i)));
          key_list.push(Item.id);

          if (Item.id != null) {
            this.items.push({
              id: Item.id,
              itemName: Item.itemName,
              priority: Item.priority,
              itemType: Item.itemType,
              itemPackageType: Item.itemPackageType,
              itemPurchesed: Item.itemPurchesed,
            });
          }
        }
        this.set_id = Math.max(...key_list) + 1;
      } else {
        for (let i = 0; i < this.items.length; i++) {
          localStorage.setItem(this.items[i].id, JSON.stringify(this.items[i]));
        }
      }
    },
  },
};
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
