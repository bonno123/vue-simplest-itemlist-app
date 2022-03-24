<script>

import AppButton from "./AppButton.vue"

export default {
    components: {   
    AppButton,
    },
    data() {
        return {
            itemTypeDict: ["Paperback", "ebook" ]
        }
    },
    props:{
        itemList: Array,
    },
    emits: ['deleteSignal'],
    methods: {

        sendDeleteSignal(itemId){
            this.$emit('deleteSignal', itemId)
        },
        sendTogglePurchaseSignal(itemId){
            this.$emit('togglePurchase', itemId)
        }
    }

}

</script>

<template>
    
    <div class="container">
        <h4>Existing Items</h4>
        <!-- <div class="list-logo">
            <span class="list-logo-inner"><img alt="Vue logo" src="src\assets\logo.png" /></span>
        </div> -->
        <div>
            
            <div class="item-list">
                
            <div class="item-list-items">
                
                <p v-if="itemList.length===0">Nice job! no Items are in there</p>
            <ul>       
                <li v-for="item in itemList" :key="(itemList.length)+1" class="item-list-element">

                    <span>
                        <span
                        @click= "sendTogglePurchaseSignal(item.id)"
                        class="item-list-element-name"
                        v-bind:class="{strikeout: item.itemPurchesed===true, priority: item.priority=='true'}"
                        >
                            {{item.itemName}} 
                        </span>
                        
                        <span
                        class="label-ebook"
                        v-if="item.itemType ==='true' && !item.itemPurchesed"
                        >
                            {{itemTypeDict[0]}}
                        </span>
                        <span
                        class="label-paperback"
                        v-if="item.itemType==='false' && !item.itemPurchesed"
                        >
                            {{itemTypeDict[1]}}
                        </span>
                    </span>
                    <span>
                        <AppButton variant="delete" @click="sendDeleteSignal(item.id)"> Delete</AppButton>
                    </span>
                </li>
            </ul>
            </div>

        
        </div>
        </div>
        
        
    </div>

</template>

<style>
.container{
    /* display: flex; */
    margin-top: 2rem;
    margin-right: 2rem;
    margin-bottom: 2rem;
    /* flex-direction: row; */
    /* flex-wrap: wrap; */
    /* justify-content: space-between; */
    /* align-items: center; */
    min-width:40%;
    background-color: bisque;
    /* padding: 2rem; */

}
.container h4{
    margin-left: 3rem;
    /* padding-top: 1.5rem; */
}
.item-list{
    font-size: 1rem;
    color: #3d4852;
    /* background: #01ff6f1c; */
    /* padding: 1rem; */
    /* margin: 1rem; */

    /* overflow-y: scroll; */
}
.item-list-items{
    overflow-y: scroll;
    height: 62vh;
    /* min-width:52%; */
}

.item-list-element{
    width: 85%;
    margin: 0.2rem 3rem 0.5rem 0.5rem;
    display: flex;
    justify-content: space-between;
    padding: 0.9rem 0.5rem 0.9rem 0.5rem;
    background-color:white;
    
    box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
}
.item-list-element > span:first-child{
    /* display: flex; */
    /* justify-content: flex-start; */
    width: 12rem;
}

.item-list-element-name{
    /* max-width:10rem; */
    width: 9rem;
    overflow-wrap: anywhere;
    overflow: clip;
}
li span:nth-child(2) {
  margin-bottom: 0rem;
  margin-top: 0.1rem;
  margin-left: 1rem;
  letter-spacing: 2px;
  display: inline-block;
  font-weight: 900;
  font-size: 0.685rem;
  padding: 0.3em 0.7em;
  line-height: 0.8;
  border-radius: 0.5px;
}

/* li span:nth-child(3){
    margin-bottom: 0.1rem;
    margin-top: 0.1rem;
    margin-left: 1.5rem;
    padding: 0.1em 0.1em;
    line-height: 0.8;
    border-radius: 0.5px;
    font-weight: 900px;
} */
/* .list-logo{
    display: flex;

    margin-left: 4%;
} */
/* .list-logo-inner{
    display: flex;
    align-items: center;
    justify-content: space-between;
} */
.strikeout{
    text-decoration: line-through;
    color: #b8c2cc;
}

.strikeout:hover {
    color: #8795a1;
}

.priority {
    color: #de751f;
}
 
.label-ebook{
    color: #004a83;
    background-color: #b3e9f3b0;
    

}
.label-paperback{
    color: #0e5300;
    background-color: #d0faef;

}
/* .btn-delete {
    //...
} */

</style>