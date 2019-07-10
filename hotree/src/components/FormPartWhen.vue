<template>
  <div>
    <section class="cardSectionContainer whenContainer">
      <h2>When</h2>
      <hr />
      <form>
        <h4>Starts on</h4>
        <input
          width="120px"
          type="date"
          id="start"
          name="trip-start"
          value="dd/mm/yyyy"
          min=""
          v-on:blur="datValue"
          v-model="dat"
        />
        <label>at</label>
        <input width="90px" type="time" v-on:blur="timeValue" v-model="time"/>
        <input type="checkbox" width="90px" v-on:blur="amValue" v-model="am"/> AM
        <input type="checkbox" width="90px" v-on:blur="pmValue" v-model="pm"/> PM
      </form>
      <form>
        <h4>Duration</h4>
         <!-- <DateTimePicker v-model="myDate" :options="options"></DateTimePicker> -->
        <input type="number" min="1" v-on:blur="secondsValue" v-model="seconds" placeholder="Number"/>
     hour
      </form>
    </section>
  </div>
</template>


<script>
 import DateTimePicker from "simple-vue2-datetimepicker";

export default {
  name: "FormPartWhen",
  data() {
      return{
          myDate: new Date(),
          options: {
              timeFormat: {
                    locale: "en-US",
                    weekday: "short",
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true
              },
              display: {
                  maxWidth: 500
              }
          },
          dat: '',
          time: '',
          pm: '',
          am: '',
          seconds: ''
      }
  },
  components: {
     DateTimePicker
  },
  methods: {
    datValue(){
      var datValue = this.dat;
       this.$emit("datValue", this.dat);
        console.log(datValue);
    },
         timeValue() {
      var timeValue = this.time;
       this.$emit("timeValue", this.time);
        console.log(timeValue);
    },
         amValue() {
      var amValue = this.am;
       this.$emit("amValue", this.am);
        console.log(amValue);
    },
    pmValue() {
      var pmValue = this.pm;
       this.$emit("pmValue", this.pm);
        console.log(pmValue);
    },
    secondsValue() {
      var secondsValue = this.seconds;
      this.$emit("secondsValue", this.seconds);
      console.log(secondsValue);
    }
  }
};
</script>