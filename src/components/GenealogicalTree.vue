<template>
  <div class="main min-h-screen bg-gray-100 flex flex-col">
    <h1 class='my-6 text-3xl px-8'>{{ msg }}</h1>

    <div class='live-search mb-8 px-8' >
      <form @submit.prevent>
        <label for="liveSearch">
          Введите Имя:
          <input type="text" id="liveSearch" @submit.prevent v-model="search" @keyup="submitSearch">
        </label>
      </form>
    </div>
    <div v-show="search" class='list-search mb-8 px-8'>
      <div class='item' v-for="item in newData" :key="item.familyUId" ><router-link :to="{name: 'singleFamily', params: {id: item.familyName, familyName: item.familyName, description: item.description}}">{{item.familyName}}</router-link>
    </div>
    </div>
    <ul id="full-tree" class="list-disc pl-10">
      <TreeItem class="item" :item="dataTree" @open-form="openForm">
      </TreeItem>
    </ul>
    <div v-show="openWindow" class="absolute object-center h-full w-full bg-gray-600 bg-opacity-75">
      <form class="relative w-96 h-40 bg-white left-2/4 top-4 -ml-48 p-3 animated fadeIn fixed z-50 pin overflow-auto">
       <svg class="h-4 w-4 text-grey hover:text-grey-darkest ml-auto" @click="closeForm" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
        <input type="text" v-model='newFamily' class="form-input border-2 mt-1 block w-full mb-1 p-1 border-current rounded-sm" name="familyName" placeholder="familyName">
        <input type="text" v-model='newDescription' class="form-input border-2 mt-1 block w-full mb-1 p-1 border-current rounded-sm" name="description" placeholder="description">
        <input type="button" value="Добавить семью" @click="addChild">
      </form>
    </div>
  </div>
</template>

<script>
import TreeItem from '@/components/TreeItem'
import store from '@/store/index'
export default {
  name: 'GenealogicalTree',
  props: {
    msg: String
  },
  data: function () {
    return {
      dataTree: store.getters.getData,
      newFamily: '',
      newDescription: '',
      openWindow: false,
      newItem: {},
      search: '',
      newData: []
    }
  },
  components: {
    TreeItem
  },
  methods: {
    openForm: function (item) {
      this.openWindow = true
      this.newItem = item
    },
    closeForm: function () {
      this.openWindow = false
    },
    addChild: function () {
      this.newItem.children.push({
        familyName: this.newFamily,
        description: this.newDescription,
        photoURL: '',
        familyUId: ''
      })
      this.openWindow = false
      this.newFamily = ''
      this.newDescription = ''
    },
    submitSearch: function () {
      const result = []
      const searchInNode = (person, search) => {
        if (person.children && person.children.length > 0) {
          if (!person.name && person.familyName.indexOf(search) !== -1) {
            result.push({ familyName: person.familyName, description: person.description, photoURL: person.photoURL, familyUId: person.familyUId })
          }
          person.children.forEach(element => {
            searchInNode(element, search)
          })
        } else {
          if (person.familyName.indexOf(search) !== -1) {
            result.push(person)
          }
        }
      }
      if (this.search !== '') {
        searchInNode(this.dataTree, this.search)
      }
      this.newData = result
      console.log(result)
    }
  }
}
</script>
