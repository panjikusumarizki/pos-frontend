<template>
  <div class="home">
    <Navbar/>
    <Content/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar'
import Content from '../components/Content'

export default {
  name: 'Home',
  components: {
    Navbar,
    Content
  }
}
</script>
