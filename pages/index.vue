<template>
<div>


  <p class ="title-bar">Featured Products</p>
<div  class="card-grid">
  <div v-for="(cal,index) in calendar" :key="index" class="card">
    <div class="wrapper">
      <img :src="getCalendarImage(cal.image)" />
      <span><s class="prize">Rs. {{ cal.total_cost }}</s></span>
      <span  class="offer-prize">Rs. {{ cal.prize}}/-</span>
      <p class="calendar-name">{{ cal.name }} </p>
      <div class="cart-details">
      <button class="btn outline">{{ $t('addtoCart') }}</button>
      <button class="btn outline" @click="showDetails(cal)">{{ $t('details') }}</button></div>

       
   </div>
   <div class="popup-container" v-if="calDetailsVisible === cal.id">
    <div class="popup">
      <button class="cancel-button" @click="hideDetails">X</button>
      <div class="popup-content">
        <img class="popimg" :src="getCalendarImage(cal.image)" />
      </div>
      <div class="text-content">
          <p>{{ cal.name }}</p>
          <span><s class="prize">Rs. {{ cal.total_cost }}</s></span>
          <span class="offer-prize">Rs. {{ cal.prize }}/-</span>
          <p class="product-details">{{ cal.details }}</p>
          <p class="product-details">Illustrated by Therikopi</p>
          <p class="product-details">Size</p>
          <p class="product-details">A4 : 21*29.7 cm</p>
          <p class="product-details">Square : 20*20 cm</p>
          <p class="product-details">A3 : 29.7 * 42 cm</p>
          <p class="product-details">Square : 30*30 cm</p>
        </div>
    </div>
  </div>
  </div>
  
</div> 
  

  <div  class="card-grid">
  <div  class="card">
    <div class="wrapper">
      <img src="images/pic.png" />
      <span><s class="prize">Rs. 500</s></span>
      <span  class="offer-prize">Rs. 399/-</span>
      <p class="calendar-name">Krishna Calendar</p>
      <div class="cart-details">
      <button class="btn outline">{{ $t('addtoCart') }}</button>
      <button class="btn outline">{{$t('details')}}</button></div>
   </div>
  </div>

  <div  class="card">
    <div class="wrapper">
      <img src="images/art.png" />
      <span><s class="prize">Rs. 500</s></span>
      <span  class="offer-prize">Rs. 399/-</span>
      <p class="calendar-name">Kids Calendar</p>
      <div class="cart-details">
      <button class="btn outline">{{ $t('addtoCart') }}</button>
      <button class="btn outline">{{$t('details')}}</button></div>
   </div>
  </div>
  <div  class="card">
    <div class="wrapper">
      <img src="images/pic.png" />
      <span><s class="prize">Rs. 500</s></span>
      <span  class="offer-prize">Rs. 399/-</span>
      <p class="calendar-name">Krishna Calendar</p>
      <div class="cart-details">
      <button class="btn outline">{{ $t('addtoCart') }}</button>
      <button class="btn outline">{{$t('details')}}</button></div>
   </div>
  </div>

  <div  class="card">
    <div class="wrapper">
      <img src="images/art.png" />
      <span><s class="prize">Rs. 500</s></span>
      <span  class="offer-prize">Rs. 399/-</span>
      <p class="calendar-name">Kids Calendar</p>
      <div class="cart-details">
      <button class="btn outline">{{ $t('addtoCart') }}</button>
      <button class="btn outline">{{$t('details')}}</button></div>
   </div>
  </div>
  <div  class="card">
    <div class="wrapper">
      <img src="images/pic.png" />
      <span><s class="prize">Rs. 500</s></span>
      <span  class="offer-prize">Rs. 399/-</span>
      <p class="calendar-name">Krishna Calendar</p>
      <div class="cart-details">
      <button class="btn outline">{{ $t('addtoCart') }}</button>
      <button class="btn outline">{{$t('details')}}</button></div>
   </div>
  </div>

  <div  class="card">
    <div class="wrapper">
      <img src="images/art.png" />
      <span><s class="prize">Rs. 500</s></span>
      <span  class="offer-prize">Rs. 399/-</span>
      <p class="calendar-name">Kids Calendar</p>
      <div class="cart-details">
      <button class="btn outline">{{ $t('addtoCart') }}</button>
      <button class="btn outline">{{$t('details')}}</button></div>
   </div>
  </div>
  <div  class="card">
    <div class="wrapper">
      <img src="images/pic.png" />
      <span><s class="prize">Rs. 500</s></span>
      <span  class="offer-prize">Rs. 399/-</span>
      <p class="calendar-name">Krishna Calendar</p>
      <div class="cart-details">
      <button class="btn outline">{{ $t('addtoCart') }}</button>
      <button class="btn outline">{{$t('details')}}</button></div>
   </div>
  </div>

  <div  class="card">
    <div class="wrapper">
      <img src="images/art.png" />
      <span><s class="prize">Rs. 500</s></span>
      <span  class="offer-prize">Rs. 399/-</span>
      <p class="calendar-name">Kids Calendar</p>
      <div class="cart-details">
      <button class="btn outline">{{ $t('addtoCart') }}</button>
      <button class="btn outline">{{$t('details')}}</button></div>
   </div>
  </div>
</div> 
  <!-- <div class="banner-container">
  <h1 class="banner-text">Let's Shop</h1>
  <img class="main-banner" src="/images/art4.jpg" alt="Banner Image" />
</div> -->
<!-- <p class ="title-bar">Featured Products</p>
<div  class="card-grid">
  <div v-for="(cal,index) in calendar" :key="index" class="card">
    <div class="wrapper">
      <img :src="getCalendarImage(cal.image)" />
      <span><s class="prize">Rs. {{ cal.total_cost }}</s></span>
      <span  class="offer-prize">Rs. {{ cal.prize}}/-</span>
      <p class="calendar-name">{{ cal.name }} </p>
      <div class="cart-details">
      <button class="btn outline">{{ $t('addtoCart') }}</button>
      <button class="btn outline" @click="showDetails(cal)">{{ $t('details') }}</button></div>

       
   </div>
   <div class="popup-container" v-if="calDetailsVisible === cal.id">
    <div class="popup">
      <button class="cancel-button" @click="hideDetails">X</button>
      <div class="popup-content">
        <img class="popimg" :src="getCalendarImage(cal.image)" />
        <div class="text-content">
          <p>{{ cal.name }}</p>
          <span><s class="prize">Rs. {{ cal.total_cost }}</s></span>
          <span class="offer-prize">Rs. {{ cal.prize }}/-</span>
        </div>
      </div>
    </div>
  </div>
  </div>
  
</div>  -->


</div>
</template>

<script >
import axios from 'axios';
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',

  data(){
    return{
      calendar:[],
      popdetails: false,
      calDetailsVisible: null 
    }
  },
  created(){
    this.fetchCalendarData();
  },
  methods:{
    fetchCalendarData(){
      axios.get('http://127.0.0.1:8001/digitalart/calendar/')
      .then( response => {
        this.calendar = response.data;
      })
      .catch(error =>{
        console.error('Error fetching the calendar data', error);
      })
    },
    getCalendarImage(img) {
      if (img) {
        return `http://127.0.0.1:8001${img}`;
      }
      return '';
    },
    showDetails(cal) {
      this.calDetailsVisible = cal.id;
    },
    // Method to hide details popup
    hideDetails() {
      this.calDetailsVisible = null;
    },

  }
})
</script>
<style>

.text-content{
  position: absolute;
  top: 5%;
  left: 52%;
  height: 90%;
  overflow: scroll;
  padding: 0 5% 0 0;
}



.banner-container {
  position: relative;
  text-align: center; /* Center aligns the text */
}

.banner-text {
  position: absolute;
  top: 50%; /* Position the text vertically at the center */
  left: 50%; /* Position the text horizontally at the center */
  transform: translate(-50%, -50%); /* Centering trick */
  z-index: 1; /* Ensure the text is above the image */
  color: rgb(81, 80, 80); /* Adjust text color */
  font-size: 2em; /* Adjust font size */
}

.main-banner {
  height: 450px;
  width: 100%; /* Ensure the image takes the entire width */
  object-fit: cover;
}


















.digartindex1{
  display: flex;
  flex-direction: column;
  width: 100%;
}

.imgtit1{
  text-decoration: solid;
  color: aliceblue;
  text-align: center;
  
}

.dighw1{
  height: 14rem;
  width: 14rem;
}
@media (max-width: 767px){
 
  .imgtop{
    margin-top: 50px;

  }



}
@media (max-width: 1040px){
 
 .imgtop{
   margin-top: 80px;

 }
 .featured-products{
  font-size: 1.3rem;
  font-weight: 405;
  padding: 12px 12px;
}



}

/* 
:root {
  --card-height: 300px;
  --card-width: calc(var(--card-height) / 1.5);
}
* {
  box-sizing: border-box;
}

.card {
  width: var(--card-width);
  height:100px;
 
  position: relative;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 0 36px;
  perspective: 2500px;
  margin: 50px 50px;
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wrapper {
  transition: all 0.5s;
  position: absolute;
  border-radius: 10%;
  width: 100%;
  z-index: -1;
}

.card:hover .wrapper {
  transform: perspective(900px) translateY(-5%) rotateX(25deg) translateZ(0);
  box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 35px 32px -8px rgba(0, 0, 0, 0.75);
}

.wrapper::before,
.wrapper::after {
  content: "";
  opacity: 0;
  width: 100%;
  height: 80px;
  transition: all 0.5s;
  position: absolute;
  left: 0;
}
.wrapper::before {
  top: 0;
  height: 100%;
  background-image: linear-gradient(
    to top,
    transparent 46%,
    rgba(12, 13, 19, 0.5) 68%,
    rgba(12, 13, 19) 97%
  );
}


.card:hover .wrapper::before,
.wrapper::after {
  opacity: 1;
}

.card:hover .wrapper::after {
  height: 120px;
}
.title {
  width: 100%;
  transition: transform 0.5s;
}
.card:hover .title {
  transform: translate3d(0%, -50px, 100px);
}

.character {
  color: aliceblue;
  width: 100%;
  opacity: 0;
  transition: all 0.5s;
  position: absolute;
  z-index: -1;
}

.card:hover .character {
  opacity: 1;
  transform: translate3d(0%, -30%, 100px);
}



.btn {
  border: none;
  padding: 2px 10px;
  border-radius: 24px;
  font-size: 12px;
  font-size: 0.8rem;  
  letter-spacing: 2px;  
  cursor: pointer;
}

.btn + .btn {
  margin-left: 10px;
}

.outline {
  background: transparent;
  color: rgba(0, 212, 255, 0.9);
  border: 1px solid rgba(0, 212, 255, 0.6);
  transition: all .3s ease;
  
}

.outline:hover{
  transform: scale(1.125);
  color: rgba(255, 255, 255, 0.9);
  border-color: rgba(255, 255, 255, 0.9);
  transition: all .3s ease;  
}

.fill {
  background: rgba(0, 212, 255, 0.9);
  color: rgba(255,255,255,0.95);
  filter: drop-shadow(0);
  font-weight: bold;
  transition: all .3s ease; 
}

.fill:hover{
  transform: scale(1.125);  
  border-color: rgba(255, 255, 255, 0.9);
  filter: drop-shadow(0 10px 5px rgba(0,0,0,0.125));
  transition: all .3s ease;    
}
 */


</style>
