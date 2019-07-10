<template>
  <div>
    <Header title="New event"/>
    <div class="container">
      <FormPartAbout @titleValue="setTitle" @descriptionValue="setDescription" @categoryValue="setCategory" @freeValue="setFree" @paidValue="setPaid" @rewardValue="setReward"/>
      <FormPartCoordinator @nameValue="setName"/>
      <FormPartWhen @datValue="setDat" @timeValue="setTime" @amValue="setAm" @pmValue="setPm" @secondsValue="setSeconds"/>
    <button @click="validateForm">Publish event</button>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import FormPartAbout from "../components/FormPartAbout";
import FormPartCoordinator from "../components/FormPartCoordinator";
import FormPartWhen from "../components/FormPartWhen";
import Header from "../components/Header"


export default {
  name: "home",
  components: {
    HelloWorld,
    FormPartAbout,
    FormPartCoordinator,
    FormPartWhen,
    Header
  },
  data() {
    return{
    //  titleValue: titleValue
    title: '',
    description: '',
    selectedCategory: '',
    free: Boolean,
    paid: Boolean,
    reward: '',

    coordinator :{
      name: '',
      mail: ''
    },
          dat: '',
          time: '',
          pm: '',
          am: '',
          seconds: ''
    }
  },
  methods: {
     setTitle(msg) {
    this.title = msg;
  },
       setDescription(msg) {
    this.description = msg;
  },
  setCategory(msg){
    this.selectedCategory = msg;
  },
  setFree(msg){
    this.free = msg;
  },
  setPaid(msg){
    this.paid = msg;
  },
  setReward(msg){
    this.reward = msg;
  },
  setName(msg){
    this.name = msg;
  },
    setDat(msg){
    this.dat = msg;
  },
    setTime(msg){
    this.time = msg;
  },
    setAm(msg){
    this.am = msg;
  },
    setPm(msg){
    this.pm = msg;
  },
  setSeconds(msg){
    var sec = msg*60*60
    this.seconds = sec;
  },

  validateForm(){

    var obj =  {
      title: this.title,
      description: this.description,
      selectedCategory: this.selectedCategory,
      free: this.free,
      paid: this.paid,
      reward: this.reward,
      mail: this.mail,
      coordinator: this.name,
      duration: this.seconds

    }


    if(this.title == null || this.description == null || this.name == null || this.dat == null){
      console.log('nanana');
    }else {
      console.log(obj);
      window.location.href = 'http://localhost:8080/#/about'
      // this.$router.push('/about');
      //  this.$router.push('/about');
    }
  }
  }

};
</script>

<style scoped>
.container {
  margin: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>