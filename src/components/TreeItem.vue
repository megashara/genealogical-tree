<template>
  <li class="item-tree">
    <router-link :to="{name: 'singleFamily', params: {id: item.familyName, familyName: item.familyName, description: item.description}}">{{ item.name || item.familyName }}</router-link>
    <span v-if="isChild" @click="toggle">[{{ isOpen ? '-' : '+' }}]</span>
    <ul v-show="isOpen" v-if="isChild" class="list-disc pl-10">
        <tree-item
        class="item"
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        @open-form="$emit('open-form', $event)"
        ></tree-item>
        <li class="add" @click="$emit('open-form', item)">Добавить ещё потомка</li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeItem',
  props: {
    item: Object
  },
  data: function () {
    return {
      isOpen: false
    }
  },
  computed: {
    isChild: function () {
      return this.item.children && this.item.children.length
    }
  },
  methods: {
    toggle: function () {
      if (this.isChild) {
        this.isOpen = !this.isOpen
      }
    }
  }
}

</script>
