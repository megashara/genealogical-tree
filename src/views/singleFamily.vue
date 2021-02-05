<template>
  <div>
    <h1>Страница описания семьи {{ familyName }}</h1>
    <h2>Описание:</h2>
    <div>
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    familyName: {
      type: String,
      default () {
        return 'ds'
      }
    },
    description: {
      type: String,
      default () {
        return 'ds'
      }
    }
  },
  data: function () {
    return {
      fio: 'lol'
    }
  },
  mounted () {
  }
}

</script>
