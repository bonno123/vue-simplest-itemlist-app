<script>
import AppButton from "./AppButton.vue"

export default {
  components: {   
    AppButton,
  },
  data() {
    return {
      newItem:'',
      newItemPriority: 'false',
      newItemType: 'true',
      newItemPackageType: '',

      itemPackageTypeDict: ['check1', 'check2', 'check3', 'check4']

    }
  },
    computed:{
    charcount(){
      return 50-this.newItem.length
    },
    isDisabled(){
      return this.newItem.length < 5 || this.newItemPackageType.length==0
    }
    },
  // emits: ['newItem'],
  methods:{
    sendNewItem(){
      if(this.newItem.length>=5 && this.newItemPackageType.length != 0){
        this.$emit('newItem', {
        itemName: this.newItem,
        priority: this.newItemPriority,
        itemType: this.newItemType,
        itemPackageType: this.newItemPackageType,
        }),
      this.newItem=''
      this.newItemPriority= 'false'
      this.newItemType= 'true'
      document.getElementById(this.newItemPackageType).checked=false
      this.newItemPackageType=''

      }

    },
    // setItemPackageType(packType){
      
    //   // const myArr = ['check1','check2','check3','check4'];

    //   if((document.getElementById('check1').checked || document.getElementById('check2').checked || document.getElementById('check3').checked || document.getElementById('check4').checked) === false){
    //     this.newItemPackageType = ''
    //   }
    //   else{
    //     if(packType=='check1'){
    //       document.getElementById('check2').checked=false
    //       document.getElementById('check3').checked=false
    //       document.getElementById('check4').checked=false
    //     }
    //     if(packType=='check2'){
    //       document.getElementById('check4').checked=false
    //       document.getElementById('check3').checked=false
    //       document.getElementById('check1').checked=false
    //     }        
    //     if(packType=='check3'){
    //       document.getElementById('check2').checked=false
    //       document.getElementById('check1').checked=false
    //       document.getElementById('check4').checked=false
    //     }        
    //     if(packType=='check4'){
    //       document.getElementById('check2').checked=false
    //       document.getElementById('check3').checked=false
    //       document.getElementById('check1').checked=false
    //     }
    //     this.newItemPackageType= packType
    //   }
      
      

    // },
    sinkItemPackageType(packtype){
      var sum_checked=false
      var elem=document.getElementById(packtype)
      for (let i in this.itemPackageTypeDict){
        sum_checked= sum_checked || document.getElementById(this.itemPackageTypeDict[i]).checked
      }
      if(sum_checked==false){
          this.newItemPackageType = ''
      }
      else{
        this.newItemPackageType= packtype
        for (let i in this.itemPackageTypeDict){
          if ( packtype != this.itemPackageTypeDict[i] ){
            // alert(this.itemPackageTypeDict[i])
            document.getElementById(this.itemPackageTypeDict[i]).checked=false
          }
        }
      }
    }
  }
}
</script>

<template>
  <div class="input-form">
    <div class="input-form-top">
      <div class="input-field"> 
      <input 
      type="text" 
      placeholder="Enter new Item"
      v-model="newItem"
      maxlength="50"
      v-on:keyup.enter="sendNewItem"
      >
      <!-- {{newItem}} -->
      <p class="counter">{{charcount}}</p>
      </div>
    </div>

    <div class="input-form-priority"> 
      <label for="id-priority"><h4>Priority</h4></label>
      <label >
        <select v-model="newItemPriority" id="id-priority">
          <option  value="true">High</option>
          <option  value="false">Low</option>
        </select>
      </label>
    </div>
    <div>
      <label for="id-item-type"><h4>Item Type</h4></label>
      
      <label id="id-item-type">
        <label><input type="radio" v-model="newItemType" value="true">Paperback</label>
        <label><input type="radio" v-model="newItemType"  value="false">E-Book </label>
      </label>
    </div>
    <div class="input-form-bottom">
      <div>
        <label for="id-pakegging">
          <h4>Pakegging <span style="color: red; font-size: 18px;">*</span> </h4>
        </label>
        
        <!-- <label id="id-pakegging">
          <label><input id="check1" type="checkbox" @click="setItemPackageType('check1')"  >Personal</label>
          <label><input id="check2" type="checkbox" @click="setItemPackageType('check2')"  >Birthday</label>
          <label><input id="check3" type="checkbox" @click="setItemPackageType('check3')"  >Wedding</label>
          <label><input id="check4" type="checkbox" @click="setItemPackageType('check4')"  >Surprise</label>
        </label> -->  
        <label id="id-pakegging">
          <label v-for="i in itemPackageTypeDict">
            <input :id="i" type="checkbox" @click="sinkItemPackageType(i)" >
            {{i}}
          </label>
        </label>
      </div>


      <!-- {{newItemType}}--{{newItemPackageType}} -->
    </div>
    <div class="save-button-posititon">
      <AppButton
      class="app-p-sm"
      :disabled="isDisabled" 
      variant="save" 
      v-on:click="sendNewItem" 
      >        
      Save Item
      </AppButton>

    </div>
    
    {{newItem.length}} {{newItemPackageType}}
    <!-- <br>
    {{newItem.length < 5 }} {{newItemPackageType.length==0}} -->
  </div>
</template>

<style>
  .save-button-posititon{
    display: flex;
    margin-top: 0.1rem;
    justify-content: end;
  }

  .input-form{
    background: #01ff6f1c;
    padding: 2rem;
    margin: 2rem;
    border-radius: 3px;
    box-shadow: inset -20px -19px 13px -24px rgba(0,53,105,0.28);
    min-width: 35%;
    display:flex;
    flex-flow: column wrap;
    justify-content: space-between;
  }

  /* .input-form-top{
    
    padding: 2rem;
    margin: 1rem;
    border-radius: 3px;
    box-shadow: inset -20px -19px 13px -24px rgba(0,53,105,0.28);
    min-width: 80%;
    display:flex;
    justify-content: space-between;
    align-items:center;
  } */

  .input-field{
    display: flex;
    min-width: 80%;
    justify-content: flex-start;
    align-items:center;
  }

  .counter{
    font-size: 0.8rem;
    /* padding-left: 10px;
    padding-right: 10px; */
    padding: 5px 8px;
    border-style: solid;
    border-color: rgba(8, 0, 82, 0.281);
    border-width: 1pt;
    cursor: text;
  }


  .input-field input{
    width: 70%;
    border-radius: 3px;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
    border: 1px solid #f1f5f8;
    color: #606f7b;
    padding: 0.5rem 0.75rem;
    box-sizing: border-box;
    font-size: 1rem;
    letter-spacing: 0.5px;
    margin: 0.5rem 0;
  }

  .input-form-priority{
    display:flex;
    align-items: center;
    /* justify-content: space-evenly; */
  }

  .input-form-bottom{
    display:flex;
    justify-content: space-between;
    align-items: flex-end;
  }
  /* -----------------------button-save-item -------------------------------*/
  /* -----------------------button-save-item -------------------------------*/





</style>