<template>
  <div>
    <section class="cardSectionContainer">
      <h2>About</h2>
      <hr />
      <form>
        <h4>TItle</h4>
        <input type="text" v-model="title" v-on:blur="titleValue" placeholder="Make it short and clear" />
      </form>
      <form>
        <h4>Description</h4>
        <textarea
          id="limit"
          rows="4"
          cols="50"
          v-on:blur="descriptionValue"
          v-model="description"
          maxlength="140"
        ></textarea>
      </form>
      <form>
        <h4>Category</h4>
        <select v-model="selectedCategory"  v-on:blur="categoryValue">
          <option v-for="category in categories" :key="category.name">{{category.name}} </option>
        </select>
      </form>
      <form>
        <h4>Payment</h4>
        <input type="checkbox" width="90px" v-model="free"  v-on:click="freeValue" /> Free event
        <input
          type="checkbox"
          width="90px"
          v-model="paid"
          v-on:click="paidValue"
          
        /> Paid event
      </form>
      <form v-show="isShowing">
       
        <h4>Reward</h4>
        <input class="rewards" type="number" min="0" v-model="reward" v-on:blur="rewardValue" placeholder="Number" />
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
      categories,
      selectedCategory: "categories",
      title: "",
      description: "",
      free: false,
      paid: false,
      reward: '',
     isShowing: false
    };
  },
  
  methods: {
    charactersLeft() {
      // var char = this.getElementById(limit).length,
      limit = 140;

      return limit - char + " / " + limit + "characters remaining";
    },
    
    titleValue () {
      var titleValue = this.title;
      this.$emit("titleValue", this.title);
          console.log(this.title);
    },
    descriptionValue () {
      var descriptionValue = this.description;
      this.$emit("descriptionValue", this.description);
          console.log(this.description);
    },
    categoryValue() {
      var categoryValue = this.selectedCategory;
       this.$emit("categoryValue", this.selectedCategory);
        console.log(categoryValue);
    },    
       freeValue() {
      var freeValue = this.free;
       this.$emit("freeValue", this.free);
        console.log(freeValue);
    },
       paidValue() {
      var paidValue = this.paid;
       this.$emit("paidValue", this.paid);
      this.isShowing=!this.isShowing;
        console.log(paidValue);
    },
        rewardValue() {
      var rewardValue = this.reward;
       this.$emit("rewardValue", this.reward);
        console.log(rewardValue);
    }
 
  }
};
</script>
<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}
</style>