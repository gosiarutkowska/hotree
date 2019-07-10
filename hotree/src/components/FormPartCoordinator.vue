<template>
    <section class="cardSectionContainer">
      <h2>Coordinator</h2>
      <hr />
      <form>
        <h4>Responsible</h4>
        <select v-model="selectedEmploye" v-on:blur="nameValue">
          <option
            v-for="employe in employes"
            :key="employe.name"
          >{{employe.name}} {{employe.lastname}}</option>
        </select>
      </form>

      <form>
        <h4>email</h4>
        <autocomplete :source="employes"  results-display="email" v-model="selectedMail" v-on:click="mailValue">{{selectedMail}}</autocomplete>
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
      nameValue () {
      var nameValue = this.selectedEmploye;
      this.$emit("nameValue", this.selectedEmploye);
          console.log(this.selectedEmploye);
    },
      mailValue () {
      var mailValue = this.selectedMail;
      this.$emit("mailValue", this.selectedMail);
          console.log(this.selectedMail);
    }
  }
};
</script>

<style scoped>
.autocomplete {
  width: 70%;
}
.addMailLabel{
  font-size: 10px;
  color: grey;
}

</style>