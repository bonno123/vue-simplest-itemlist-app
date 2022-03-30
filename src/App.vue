<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import InputField from './components/InputField.vue'
import AppHeader from './components/AppHeader.vue'
import AppList from './components/AppList.vue'
import AppButton from './components/AppButton.vue'
import Modal from './components/Modal.vue'

export default {
  components: {
    InputField,
    AppHeader,
    AppList,
    AppButton,
    Modal,
  },
  
    data() {
        return {
            expandForm: false,
            showModal: false,
            // newItem:'',
            items: [
                {id: 1,  itemName: 'Software'  , priority:'false' , itemType:'false', itemPackageType: "check1" ,  itemPurchesed: false}  ,
                {id: 2,  itemName: 'Networking', priority:'true',  itemType:'false', itemPackageType: "check4",  itemPurchesed: false},
                {id: 3,  itemName: 'Database'  , priority:'false' , itemType:'true'  , itemPackageType: "check1",  itemPurchesed: true}  ,
            ],
          }
    },
    computed:{

      reversedItemArr(){
        return[...this.items].reverse()
      },
      filterPurchasedItems(){
        return [...this.items].filter((item) => !item.itemPurchesed)
      }
    },
    // 00831414 ram thapa wifi password
    methods: {
        addItem(e){
          this.items.push({
          id: this.items.length+1,
          itemName: (e.itemName),
          priority: (e.priority),
          itemType: (e.itemType),
          itemPackageType: (e.itemPackageType),
          itemPurchesed: false
          })         
        },
        removeItem(e){
          // alert(e)
          this.items.splice((this.items.findIndex(x => x.id === e)),1)
        },
        editForm(_e){
            // alert(e)
            // this.expandForm=e
          this.expandForm = !this.expandForm
        },
        togglePurchase(e){
          // alert(this.items.find(x => x.id === e).itemPurchesed)
          this.items.find(x => x.id === e).itemPurchesed =! this.items.find(x => x.id === e).itemPurchesed
        },
        openModal(){
          this.showModal=true
        }
    }

}
</script>




<template
>
  <div>
    <AppHeader 
    :itemList="reversedItemArr"
    :ishowForm="expandForm"
    v-on:edit-signal= "editForm" 
    v-on:deleteSignal="removeItem"
    v-on:togglePurchase="togglePurchase"
    v-on:open="openModal" 
    v-on:newItem="addItem"
    />

    <div >
      <Teleport to="body">
        <!-- use the modal component, pass in the prop -->
        <modal 
        :show="showModal"
        @close="showModal = false"
        >
          <template #header>
            <h3>custom header</h3>
          </template>

          <template #body>
            <input-field
            v-on:newItem="addItem"
            ></input-field>
          </template>

            <template #footer>
            <!-- <div class="">
              <AppButton
              class="app-p-sm"
              style="{float:right}"
              :disabled="isDisabled" 
              variant="save"
              v-on:click="$emit('hello')" 
              >        
              Save Item
              </AppButton>

             </div> -->
          </template>
        </modal>
      </Teleport>
    </div>

    <!-- <div 
    v-if="expandForm"
    class="expanded-app-items"
    >
      <div class="expanded-input-space">
        <InputField
        v-on:newItem="addItem"
        >
        <template #footer-btn>     
          <AppButton
          class="app-p-sm app-m-sm"
          :disabled="isDisabled" 
          variant="save" 
          v-on:click="sendNewItem"
          >        
          Save Item
          </AppButton>     
        </template>
        </InputField> 
      </div>
      <AppList 
      :itemList="reversedItemArr"
      v-on:deleteSignal="removeItem"
      v-on:togglePurchase="togglePurchase"
      >
      </AppList>
    </div> -->

    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  </div>


  <!-- <AppButton class="app-m-sm" variant="cancel"> Cancel</AppButton>
  <AppButton class="app-m-sm" variant="delete"> Delete</AppButton>
  <AppButton class="app-m-sm" variant="save"> save</AppButton>
  <AppButton class="app-m-sm" >Hello</AppButton> -->

</template>





<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */    
  background: #fff;
  padding: 2rem;
  margin: 1rem;
  border-radius: 3px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  width: 80%;
  max-width: 900px;
  /* display: flex; */
  
}

.expanded-app-items{
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.app-m-sm {
  margin: 1.5rem;
}
.app-p-sm{
  padding: 0.5rem 0.75rem;;
}

.expanded-input-space{
  padding: 1.25rem 1rem;
  margin: 1.5rem auto auto auto;
  border-radius: 3px;
  min-width: 20rem;
  height: 20rem;
  /* box-shadow: inset -20px -19px 13px -24px rgba(0,53,105,0.28); */
  /* min-width: 35%;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between; */
  border-style: solid;
  border-width: 0.007pt;
  border-color: chartreuse;
}
</style>
