<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import InputField from './components/InputField.vue'
import AppHeader from './components/AppHeader.vue'
import AppList from './components/AppList.vue'
import AppButton from './components/AppButton.vue'

export default {
  components: {
    InputField,
    AppHeader,
    AppList,
    AppButton,
  },
  
    data() {
        return {
            expandForm: false,
            // newItem:'',
            items: [
                {id: 1,  itemName: 'Software'  , priority:'false' , itemType:'false', itemPackageType: "check1" ,  itemPurchesed: false}  ,
                {id: 2,  itemName: 'Networking', priority:'true',  itemType:'false', itemPackageType: "check4",  itemPurchesed: false},
                {id: 3,  itemName: 'Database'  , priority:'false' , itemType:'true'  , itemPackageType: "check1",  itemPurchesed: true}  ,
            ],
            // buttonClasses: ['btn-delete','btn-cancel']
          }
    },
    computed:{
      // charcount(){
      //   
      // }
      reversedItemArr(){
        return[...this.items].reverse()
      },
      filterPurchasedItems(){
        return [...this.items].filter((item) => !item.itemPurchesed)
      }
    },
    // 00831414
    methods: {
        addItem(e){
          // alert(e.itemName)
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
        }
    }

}
</script>




<template>
  <div>
    <AppHeader 
    :itemList="filterPurchasedItems"
    :ishowForm="expandForm" 
    v-on:edit-signal= "editForm"    
    />
    <div 
    v-if="expandForm"
    class="expanded-app-items"
    >
      <InputField
      v-on:newItem="addItem"
      />        
      <AppList 
      :itemList="reversedItemArr"
      v-on:deleteSignal="removeItem"
      v-on:togglePurchase="togglePurchase"
      >
      </AppList>

    </div>

    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  </div>


  <AppButton class="app-m-sm" variant="cancel"> Cancel</AppButton>
  <AppButton class="app-m-sm" variant="delete"> Delete</AppButton>
  <AppButton class="app-m-sm" variant="save"> save</AppButton>
  <AppButton class="app-m-sm" >Hello</AppButton>

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
}
.app-m-sm {
  margin: 1rem;
}
.app-p-sm{
  padding: 0.5rem 0.75rem;;
}

</style>
