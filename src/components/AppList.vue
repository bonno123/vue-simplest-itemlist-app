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
        itemListForAppList: Array,
    },
    emits: ['deleteSignal', 'togglePurchase'],
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
        <div><h4>Existing Items</h4></div>
            
        <div class="item-list">
                
            <div class="">
                
                <p v-if="itemListForAppList.length===0">Nice job! no Items are in there</p>
                <!-- <ul> -->
                    <TransitionGroup name="list" tag="ul">       
                    <li v-for="item in itemListForAppList" :key="(itemListForAppList.length)+1" class="item-list-element">

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
                </TransitionGroup>
                <!-- </ul> -->
            </div>

        
        
        </div>
        
        
    </div>
    

</template>

<style>
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}



.container{
    /* margin: 1.5rem 1.5rem 0 0; */
    margin-top: 1.5rem;
    background: rgb(255 255 255 / 90%);
    /* margin-top: 1.5rem; */
    /* width: 35%; */
    padding: 1rem;
    border-style: solid;
    border-width: 1pt;
    border-color: rgb(255, 84, 17);
    height: 21rem;
    

}
ul {
    /* list-style-type: none; */
    margin: 0;
    padding: 0;
}
.container h4{
    margin-top: -1px;
    
    /* padding-top: 1.5rem; */
}
.item-list{
    /* font-size: 1rem; */
    /* color: #3d4852; */
    min-width:20rem;
    height: 18rem;
    /* overflow: hidden; */
    /* background: orchid; */
    /* padding: 1rem; */
    /* margin: 1rem; */

    overflow-y: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
}

.item-list::-webkit-scrollbar {
  display: none; /* Hide scrollbar for Chrome, Safari and Opera */
}

/* Track */
/* .item-list ::-webkit-scrollbar-track { */
  /* box-shadow: inset 0 0 5px grey;  */
  /*border-radius: 0px;*/
/* } */
 
/* Handle */
/* .item-list ::-webkit-scrollbar-thumb {
  background: red; 
  border-radius: 0px;
} */

/* Handle on hover */
/* .item-list ::-webkit-scrollbar-thumb:hover {
  background: #b30000; 
} */
/* .item-list-items{
    overflow-y: scroll;
    height: 40vh;
    margin-left: -2px;
    
} */

.item-list-element{
    /* width: 85%; */
    margin: 0.5rem 0.5rem 0.8rem 0.5rem;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
    background-color:white;
    border-radius: 0.5rem;
    background: rgba(255,255,255,0.5);
    /* backdrop-filter: saturate(180%) blur(10px); */
    
    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
    transition: all 0.3s cubic-bezier(.25,.8,.25,1);
    
    /* box-shadow: rgb(255 0 0 / 35%) 0px 0.0625em 0.0625em, rgb(39 0 255 / 33%) 0px 0.125em 0.5em, rgb(26 31 205 / 35%) 0px 0px 0px 1px inset; */
}
.item-list-element:hover{
    box-shadow: 0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);
    /* box-shadow: 0 14px 28px rgb(0 255 57 / 22%), 0 8px 8px rgb(0 255 255 / 30%); */
    /* box-shadow: rgba(0 255 184 / 15%) 0px 0.0625em 0.0625em, rgb(0 255 137 / 24%) 0px 0.125em 0.5em, rgb(0 255 20 / 52%) 0px 0px 0px 1px inset; */
}
.item-list-element > span:first-child{
    /* display: flex; */
    /* justify-content: flex-start; */
    width: 12rem;
}

.item-list-element-name{
    /* max-width:10rem; */
    /* width: 9rem; */
    /* overflow-wrap: anywhere; */
    /* overflow: clip; */
    cursor: pointer;
    max-width: 95px;
    display: inline-block;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-transform:capitalize;
    /* text-decoration: wavy; */
    }
.item-list-element-name:hover{
    font-size: 1.005em;
    text-overflow: clip;
}


li span:nth-child(2) {
    margin-top: 0.1rem;
    margin-left: 1rem;
    letter-spacing: 2px;
    display: inline-block;
    font-weight: 900;
    font-size: 0.6rem;
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
    color: #006ec4;
    background-color: #0af9c130;
}
.label-paperback{
    color: rgb(13, 136, 13);
    background-color: #4cf0003a;

}
/* .btn-delete {
    //...
} */

</style>