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
</style>