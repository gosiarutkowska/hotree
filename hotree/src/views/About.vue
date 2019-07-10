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
.flexcomeon {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
  .success{
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(211, 211, 211, 0.651);
    margin-top: 50px;
    width: 200px;
     box-shadow: 0px 0px 18px 2px rgba(0,0,0,0.18);
     padding: 20px;
  }
  h2 {
    color: green;
    margin-bottom: 10px;
  }
</style>