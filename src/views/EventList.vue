<template>
  <div class="events">
    <h1>Event For Goods</h1>
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<script>
// @ is an alias to /src
import EventCard from "@/components/EventCard.vue";
import EventService from '../services/EventService';

export default {
  name: "EventList",
  components: {
    EventCard,
  },
  data :function(){
    return {
      events:null
    }
  },
  created:function(){
    EventService.getEvents().then((response)=>{
      this.events = response.data
    }).catch((err)=>console.log(err));
  }
};
</script>
<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
