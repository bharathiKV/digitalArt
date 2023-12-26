<template>
<div>
  <p class ="title-bar">Calendar 2024</p>

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
          <div class="cart-details1">
      <button class="btn outline">{{ $t('addtoCart') }}</button>
      <button class="btn outline">{{ $t('Buy') }}</button></div>
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
      <img src="/images/pic.png" />
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
      <img src="/images/art.png" />
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
      <img src="/images/pic.png" />
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
      <img src="/images/art.png" />
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
      <img src="/images/pic.png" />
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
      <img src="/images/art.png" />
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
      <img src="/images/pic.png" />
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
      <img src="/images/art.png" />
      <span><s class="prize">Rs. 500</s></span>
      <span  class="offer-prize">Rs. 399/-</span>
      <p class="calendar-name">Kids Calendar</p>
      <div class="cart-details">
      <button class="btn outline">{{ $t('addtoCart') }}</button>
      <button class="btn outline">{{$t('details')}}</button></div>
   </div>
  </div>
</div> 

<div  class="card-grid">
  <div v-for="(cal,index) in calendar" :key="index" class="card">
    <div class="wrapper">
      <img :src="getCalendarImage(cal.image)" />
      <span><s class="prize">Rs. {{ cal.total_cost }}</s></span>
      <span  class="offer-prize">Rs. {{ cal.prize}}/-</span>
      <p class="calendar-name">{{ cal.name }} </p>
      <div class="cart-details">
      <button class="btn outline">{{ $t('addtoCart') }}</button>
      <button class="btn outline">{{$t('details')}}</button></div>
   </div>
  </div>
</div> 
</div>
  
</template>

<script>
import axios from 'axios';
export default{
    name:"calendars",
    
  data(){
    return{
      calendar:[],
      calDetailsVisible: null,

    }
  },
  created(){
    this.fetchCalendarData();
  },
  methods:{
    fetchCalendarData(){
      axios.get('http://127.0.0.1:8001/digitalart/calendar/')
      .then( response => {
        this.calendar = response.data.filter(item => item.calendars === true);
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
}
</script>
<style>


</style>