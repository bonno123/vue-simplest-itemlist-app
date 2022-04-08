<template>
  <div class="container">
    <div>
      <h4>{{ $t("applist-header") }}</h4>
    </div>

    <div class="item-list">
      <div class="">
        <p v-if="itemListForAppList.length === 0">
          {{ $t("applist-empty-message") }}
        </p>

        <transition-group name="list" tag="ul">
          <li
            v-for="item in itemListForAppList"
            :key="item.id"
            class="item-list-element"
          >
            <span>
              <span
                class="item-list-element-name"
                :class="{
                  strikeout: item.itemPurchesed === true,
                  priority: item.priority == 'true',
                }"
                @click="sendTogglePurchaseSignal(item.id)"
              >
                {{ item.id }} | {{ item.itemName }}
              </span>

              <span
                v-if="item.itemType === 'true' && !item.itemPurchesed"
                class="label-ebook"
              >
                {{ $t("item-type-dict.paperback") }}
              </span>
              <span
                v-if="item.itemType === 'false' && !item.itemPurchesed"
                class="label-paperback"
              >
                {{ $t("item-type-dict.ebook") }}
              </span>
            </span>
            <span>
              <app-button variant="delete" @click="sendDeleteSignal(item.id)">
                {{ $t("buttons.deleteitem") }}</app-button
              >
            </span>
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import AppButton from "./AppButton.vue";

const props = defineProps({
  itemListForAppList: { type: Array, required: true },
});
const emit = defineEmits(["deleteSignal", "togglePurchase"]);
const itemTypeDict = ref(["Paperback", "ebook"]);
function sendDeleteSignal(itemId) {
  emit("deleteSignal", itemId);
}
function sendTogglePurchaseSignal(itemId) {
  emit("togglePurchase", itemId);
}

// export default {
//   components: {
//     AppButton,
//   },
//   props: {
//     itemListForAppList: { type: Array, required: true },
//   },
//   emits: ["deleteSignal", "togglePurchase"],
//   data() {
//     return {
//       itemTypeDict: ["Paperback", "ebook"],
//     };
//   },

//   methods: {
//     sendDeleteSignal(itemId) {
//       this.$emit("deleteSignal", itemId);
//     },
//     sendTogglePurchaseSignal(itemId) {
//       this.$emit("togglePurchase", itemId);
//     },
//   },
// };
</script>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(1.875rem);
}

.list-leave-active {
  position: absolute;
}

.container {
  margin-top: 1.5rem;
  background: rgb(255 255 255 / 90%);
  padding: 1rem;
  border-style: solid;
  border-width: 1pt;
  border-color: rgb(255, 84, 17);
  height: 21rem;
}
ul {
  margin: 0;
  padding: 0;
}
.container h4 {
  margin-top: -0.063rem;
}
.item-list {
  min-width: 20rem;
  height: 18rem;

  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}

.item-list::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari and Opera */
}

.item-list-element {
  margin: 0.5rem 0.5rem 0.8rem 0.5rem;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  background-color: white;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.5);

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
}
.item-list-element:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
.item-list-element > span:first-child {
  width: 12rem;
}

.item-list-element-name {
  cursor: pointer;
  max-width: 5.938rem;
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-transform: capitalize;
}
.item-list-element-name:hover {
  font-size: 1.005em;
  text-overflow: clip;
}

li span:nth-child(2) {
  margin-top: 0.1rem;
  margin-left: 1rem;
  letter-spacing: 0.125rem;
  display: inline-block;
  font-weight: 900;
  font-size: 0.6rem;
}

.strikeout {
  text-decoration: line-through;
  color: rgb(184, 194, 204);
}

.strikeout:hover {
  color: rgb(135, 149, 161);
}

.priority {
  color: rgb(222, 117, 31);
}

.label-ebook {
  color: rgb(0, 110, 196);
  background-color: rgba(10, 249, 193, 0.188);
}
.label-paperback {
  color: rgb(13, 136, 13);
  background-color: rgba(76, 240, 0, 0.227);
}
</style>
