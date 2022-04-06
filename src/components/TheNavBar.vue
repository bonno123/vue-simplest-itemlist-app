<template>
  <div id="nav">
    <i18n-comp />
  </div>
</template>

<script>
import i18nComp from "./i18nComp.vue";
export default {
  components: { i18nComp },
};
</script>

<style>
#nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin-top: 0;
  padding: 20px 20px 25px 20px;
  /* background: #2c3e50; */
  /* color: white; */
  color: #2c3e50;
  background: white;

  display: flex;
  align-items: center;
  justify-content: right;
  /* border-bottom: 5px solid #4e6c71; */
  z-index: 2;
  box-shadow: (0, 0, 0, 0.12) 0 1px 1px, rgba(0, 0, 0, 0.12) 0 2px 2px,
    rgba(0, 0, 0, 0.12) 0 4px 4px, rgba(0, 0, 0, 0.12) 0 8px 12px;
}
</style>
<!-- HTML ->
// <button class="button-34" role="button">Button 34</button>

// /* CSS */
// .button-34 {
//   background: #5E5DF0;
//   border-radius: 999px;
//   box-shadow: #5E5DF0 0 10px 20px -10px;
//   box-sizing: border-box;
//   color: #FFFFFF;
//   cursor: pointer;
//   font-family: Inter,Helvetica,"Apple Color Emoji","Segoe UI Emoji",NotoColorEmoji,"Noto Color Emoji","Segoe UI Symbol","Android Emoji",EmojiSymbols,-apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue","Noto Sans",sans-serif;
//   font-size: 16px;
//   font-weight: 700;
//   line-height: 24px;
//   opacity: 1;
//   outline: 0 solid transparent;
//   padding: 8px 18px;
//   user-select: none;
//   -webkit-user-select: none;
//   touch-action: manipulation;
//   width: fit-content;
//   word-break: break-word;
//   border: 0;
// }

-- HTML -->
