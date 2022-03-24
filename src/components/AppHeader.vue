<script>


export default{

  data(){
    return{
      showForm: false
    }
  },
  props:{
      itemList: Array,
    },
  emits: ['editSignal'],
  methods:{
    toggleForm(_value){
      this.$emit('editSignal')
      this.showForm= !this.showForm
    }
  }
}
</script>

<template>

<div class="header">
  <div class="header-upper">
    <h1>
      Shopping List App
    </h1>
    <button v-if="showForm==false" @click="toggleForm" class="custom-btn btn-edit-items" 

    > <span>Expand Form</span><span>Edit List !</span> 
    </button>
    <button v-if="showForm==true" @click="toggleForm" class="custom-btn btn-edit-cancel"
    > 
    <span> Close Edit</span> 
    </button>
  </div>
  <div v-if="!this.showForm" class="header-lower">
    <div>
      <p v-if="itemList.length===0">You have no items to buy</p>
      <ul>
        <li v-for="item in itemList" :key="(itemList.length)+1" class="">

          <span>
            <span           
            class=""
            v-bind:class="{strikeout: item.itemPurchesed===true, priority: item.priority=='true'}"
            >
              {{item.itemName}} 
            </span>
            
            <span
            class="label-ebook"
            v-if="item.itemType ==='true' && !item.itemPurchesed"
            >Paperback
              <!-- {{itemTypeDict[0]}} -->
            </span>
            <span
            class="label-paperback"
            v-if="item.itemType==='false' && !item.itemPurchesed"
            >ebook
              <!-- {{itemTypeDict[1]}} -->
            </span>
          </span>
        </li>
      </ul>
    </div>
    <div><img alt="Vue logo" src="src\assets\logo.png" /></div>
    
  </div>
    
</div>
</template>
<style>
  .header {
    display: flex;
    flex-flow: column;
    margin: 3% 5%;
    /* align-items: center; */
    /* justify-content: space-between; */
  }
  .header-upper{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-right: 3rem;
  }
  .header-lower{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2%;
  }


  .custom-btn{
    width: 130px;
    height: 40px;
    color: #fff;
    border-radius: 5px;
    padding: 10px 25px;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
    outline: none;
  }

      /*-------------------------------btn-edit-item----------------------------------------------------*/
      /*-------------------------------btn-edit-item----------------------------------------------------*/

  .btn-edit-items{
    position: relative;
    right: 20px;
    bottom: 20px;
    border:none;
    box-shadow: none;
    width: 130px;
    height: 40px;
    line-height: 42px;
    -webkit-perspective: 230px;
    perspective: 230px;
  }
  .btn-edit-items span {
    background: rgb(77, 196, 127, 0.696);
    background: linear-gradient(0deg, rgba(34, 37, 59, 0.696) 2%, rgba(77, 196, 127, 0.696) 95%);
    display: block;
    position: absolute;
    width: 130px;
    height: 40px;
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
    border-radius: 5px;
    margin:0;
    text-align: center;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-transition: all .3s;
    transition: all .3s;
  } 
  .btn-edit-items span:nth-child(1) {
  box-shadow:
    -7px -7px 20px 0px #fff9,
    -4px -4px 5px 0px #fff9,
    7px 7px 20px 0px #0002,
    4px 4px 5px 0px #0001;
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
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
    -webkit-transform: rotateX(0deg);
    -moz-transform: rotateX(0deg);
    transform: rotateX(0deg);
  }
  .btn-edit-items:hover span:nth-child(2) {
    box-shadow:inset 2px 2px 2px 0px rgba(255,255,255,.5),
    7px 7px 20px 0px rgba(0,0,0,.1),
    4px 4px 5px 0px rgba(0,0,0,.1);
    color: transparent;
    -webkit-transform: rotateX(-90deg);
    -moz-transform: rotateX(-90deg);
    transform: rotateX(-90deg);
  }

  /*-------------------------------btn-edit-cancel----------------------------------------------------*/
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
    background: rgba(251,75,2,1);
    box-shadow:
    -7px -7px 20px 0px rgba(255,255,255,.9),
    -4px -4px 5px 0px rgba(255,255,255,.9),
    7px 7px 20px 0px rgba(0,0,0,.2),
    4px 4px 5px 0px rgba(0,0,0,.3);
    transition: all 0.28s ease;
  }
  .btn-edit-cancel:before{
    height: 0%;
    width: 2px;
  }
  .btn-edit-cancel:after {
    width: 0%;
    height: 2px;
  }
  .btn-edit-cancel:hover{
    color: rgba(251,75,2,1);
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
    background: rgba(251,75,2,1);
    box-shadow:
    -7px -7px 20px 0px rgba(255,255,255,.9),
    -4px -4px 5px 0px rgba(255,255,255,.9),
    7px 7px 20px 0px rgba(0,0,0,.2),
    4px 4px 5px 0px rgba(0,0,0,.3);
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