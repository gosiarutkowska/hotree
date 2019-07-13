<template>
    <section class="cardSectionContainer">
      <h2>Coordinator</h2>
      <hr />
      <form>
        <h4>Responsible</h4>
        <select v-model="selectedEmploye" v-on:blur="valueEmit">
          <option>
            <!-- <label>me</label>
            {{}} -->
          </option>
          <option
            v-for="employe in employes"
            :key="employe.name"
            selected="employee[3]"
          >
          
          {{employe.name}} {{employe.lastname}}</option>
        </select>
      </form>

      <form>
        <h4>email</h4>
        <autocomplete :source="employes"   results-property="data" results-display="email" v-model="selectedMail" @selected="mailValue">{{selectedMail}}</autocomplete>
      </form>
      <form>
        <h4 class="addMailLabel">or add email address</h4>
        <input type="email" placeholder="Email"/>
      </form>
    </section>
  </div>
</template>

<script>
import employes from "../data/employes.json";
import Autocomplete from "vuejs-auto-complete";

export default {
  name: "FormPartCoordinator",
  data() {
    return {
      employes,
      selectedEmploye: "",
      selectedMail: ""
    };
  },
  components: {
    Autocomplete
  },
  methods: {
     valueEmit(value) {
      var valueEmit = value.currentTarget.value;
      this.$emit("valueEmit", value.currentTarget.value);
    },
      mailValue (value) {
        console.log('dddddddddddd');
      var mailValue = this.selectedMail.currentTarget.value;
      console.log(mailValue);
      this.$emit("mailValue", this.selectedMail);
          console.log(this.mailValue);
          console.log('dddd');
    }
  }
};
</script>

<style scoped>

</style>