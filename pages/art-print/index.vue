<template>
<div>
  <p class ="title-bar">Art Prints</p>

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
    name:"art-print",
    
  data(){
    return{
      calendar:[],

    }
  },
  created(){
    this.fetchCalendarData();
  },
  methods:{
    fetchCalendarData(){
      axios.get('http://127.0.0.1:8001/digitalart/calendar/')
      .then( response => {
        this.calendar = response.data.filter(item => item.art_print === true);
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

  }
}
</script>
<style>


</style>