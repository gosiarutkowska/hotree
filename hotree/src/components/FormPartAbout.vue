<template>
  <div>
    <section class="cardSectionContainer">
      <h2>About</h2>
      <hr />
      <form>
        <h4>TItle</h4>
        <input
          id="title"
          type="text"
          v-model="title"
          v-on:blur="valueEmit"
          placeholder="Make it short and clear"
        />
      </form>
      <form>
        <h4>Description</h4>
        <textarea
          id="limit"
          rows="4"
          cols="50"
          v-on:blur="valueEmit"
          v-model="description"
          maxlength="140"
          @keydown="counter -= 1"
        ></textarea>
        <span>{{counter}} characters left</span>
      </form>
      <form>
        <h4>Category</h4>
        <select v-model="selectedCategory" v-on:blur="valueEmit">
          <option v-for="category in categories" :key="category.name">{{category.name}}</option>
        </select>
      </form>
      <form>
        <h4>Payment</h4>
        <input type="checkbox" width="90px" v-model="free" v-on:click="valueEmit" /> Free event
        <input type="checkbox" width="90px" v-model="paid" v-on:click="paidValue" /> Paid event
      </form>
      <form v-show="isShowing">
        <h4>Reward</h4>
        <input
          class="rewards"
          type="number"
          min="0"
          v-model="reward"
          v-on:blur="valueEmit"
          placeholder="Number"
        />
        <label>reward points for attendance</label>
      </form>
    </section>
  </div>
</template>

<script>
import categories from "../data/categories.json";

export default {
  name: "FormPartAbout",
  data() {
    return {
      counter: 140,
      categories,
      selectedCategory: "categories",
      title: "",
      description: "",
      free: "",
      paid: "",
      reward: "",
      isShowing: false
    };
  },

  methods: {
    valueEmit(value) {
      var valueEmit = value.currentTarget.value;
      this.$emit("valueEmit", value.currentTarget.value);
      // console.log(this.valueDescrip);
    },
    paidValue() {
      var paidValue = this.paid;
      this.$emit("paidValue", this.paid);
      this.isShowing = !this.isShowing;
      console.log(paidValue);
    }
  }
};
</script>
<style scoped>
</style>