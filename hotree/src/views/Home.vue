<template>
  <div>
    <Header title="New event" />
    <div class="container">
      <FormPartAbout @valueEmit="setValue" />
      <FormPartCoordinator @valueEmit="setValue" />
      <FormPartWhen
        @valueEmit="setValue"
        @datValue="setDat"
        @timeValue="setTime"
        @amValue="setAm"
        @pmValue="setPm"
        @secondsValue="setSeconds"
      />
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
import Header from "../components/Header";

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
    return {
      title: "",
      description: "",
      selectedCategory: "",
      free: true,
      paid: Boolean,
      reward: "",

      coordinator: {
        name: "",
        mail: ""
      },
      dat: "",
      time: "",
      pm: "",
      am: "",
      seconds: ""
    };
  },
  methods: {
    setValue(value) {
      this.title = value;
    },
    //  setValue(value) {
    //   this.description = value;
    // },
    //   setValue(value) {
    //   this.coordinator = value;
    // },
    setDat(msg) {
      this.dat = msg;
    },
    setTime(msg) {
      this.time = msg;
    },
    setAm(msg) {
      this.am = msg;
    },
    setPm(msg) {
      this.pm = msg;
    },
    setSeconds(msg) {
      var sec = msg;
      this.seconds = sec;
      console.log(this.seconds);
    },

    validateForm() {

      var obj = {
        title: this.title,
        description: this.description,
        selectedCategory: this.selectedCategory,
        free: this.free,
        paid: this.paid,
        reward: this.reward,
        mail: this.mail,
        coordinator: this.name,
        duration: this.seconds
      };

         console.log(this.title);
      console.log(this.description);
      console.log(this.coordinator);



      if (title.value < 1) {
        title.classList.add("newClass");
      } else {
        console.log("koniec");
      }

      // if (description.value < 1) {
      //   description.classList.add("newClass");
      // } else {
      //   console.log("koniec");
      // }
      // if (coordinator.name < 1) {
      //   coordinator.classList.add("newClass");
      // } else {
      //   console.log("koniec");
      // }

      var regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      if (mail.value != regEmail) {
        console.log("incorrect");
      } else {
        console.log("correct");
      }
    }
  }
};
</script>

<style>
.newClass {
  border: 1px solid red;
}
</style>