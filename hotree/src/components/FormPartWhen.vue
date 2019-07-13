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
          value=""
          min=""
          v-on:blur="datValue"
          v-model="dat"
        />
        <label>at</label>
        <input width="90px" type="time" v-on:blur="valueEmit" v-model="time"/>
        <input type="checkbox" width="90px" v-model="am" v-on:click="valueEmit"/> AM
        <input type="checkbox" width="90px" v-model="pm" v-on:click="valueEmit"/> PM
      </form>
      <form>
        <h4>Duration</h4>

        <input type="number" min="1" v-on:blur="secondsValue" v-model="seconds" placeholder="Number"/>
     hour
      </form>
    </section>
  </div>
</template>


<script>

export default {
  name: "FormPartWhen",
  data() {
      return{
          myDate: new Date(),
          options: {
              timeFormat: {
                    // locale: "en-US",
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
          pm: Boolean,
          am: Boolean,
          seconds: ''
      }
  },

  methods: {
       valueEmit(value) {
      var valueEmit = value.currentTarget.value;
      this.$emit("valueEmit", value.currentTarget.value);
    },
    datValue(){
      var correctData = new Date("30 July 2010 15:05 UTC").toISOString().substring(0,16);
      this.dat = correctData;
       this.$emit("correctData", this.dat);
        console.log(this.dat);
    },
    secondsValue() {
      var secondsValue = this.seconds;
      this.$emit("secondsValue", (this.seconds)*60*60);
      console.log(secondsValue);
    }
  }
};
</script>