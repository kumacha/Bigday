<template>
<v-app>
  <v-content>
  <v-container>
    <v-row wrap justify="center" align="center">
     <table>
       <tr>
      <td>
      <v-img
      class="bako"
  max-height="40px"
  max-width="600px"
  src="https://firebasestorage.googleapis.com/v0/b/bigday-d8a7f.appspot.com/o/barcode.png?alt=media&token=7b594b33-0970-4fda-8b04-40a6c6d7fe44"
></v-img>
</td>
</tr>
  <tr>
     <td>
<v-text class="num">
  1234567890
  </v-text>
   </td>
  </tr>
  </table>
    <v-img
    class="moko"
  max-height="auto"
  max-width="359"
  src="https://firebasestorage.googleapis.com/v0/b/bigday-d8a7f.appspot.com/o/mokocard.jpg?alt=media&token=d6a54422-3ef4-4553-9238-b56c4a37c7cd"
></v-img>
<v-btn
　href="https://www.giftcard.ne.jp/gift/carduser/CardUserLoginPage/open.do?key=23bd5f7fedd64813"
  color="#F6A05C"
  elevation="2"
  rounded
  block
  x-large
  outlined
>モー子カード残高照会はコチラ</v-btn>
</v-row>
  </v-container>
  </v-content>
  </v-app>
</template>
<style>
table{
  margin-bottom:5px;
}
.bako{
  margin-bottom: 5px;
}
.num{
  text-align: center;
  margin-left: 23%;
    font-size: 20px;
}
.moko {
    border-radius: 10px;
    margin-bottom: 35px;
}
</style>
<script>
export default {
  
}
</script>