<template>
  <div class="home">
    <GenealogicalTree msg="Genealogical tree" />
  </div>
</template>

<script>
import GenealogicalTree from '@/components/GenealogicalTree.vue'

export default {
  name: 'Home',
  components: {
    GenealogicalTree
  }
}
</script>
