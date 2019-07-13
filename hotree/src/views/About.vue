<template>
<div> 
 <Header title="New event added"/>
 <div class="flexcomeon"> 
  <section class="success">
    <h2>Success</h2>
    <p>Event has been created</p>
  </section>
  </div>
</div>
</template>

<script>
import Header from "../components/Header"
export default {
  name: 'About',
    props: {
    title: String
  },
  data() {
    return{
      
    }
  },
 
  components: {
    Header
  }
}

</script>

<style scoped>

</style>