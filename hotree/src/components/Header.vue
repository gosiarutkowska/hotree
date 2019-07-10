<template>
<div> 
     <section class="header">
    <h1>{{title}}</h1>
  </section>
</div>
</template>

<script>
export default {
  name: 'Header',
    props: {
    title: String
  }
}

</script>

<style scoped>
.header {
  background-color: #355990;
  border-top: 10px solid #1e3b68;
  padding: 20px;
}

</style>