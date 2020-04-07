<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Chat/>
  </div>
</template>

<script>
import Chat from '@/components/Chat'
export default {
  name: "About",
  components: {
    Chat
  }
}
</script>
