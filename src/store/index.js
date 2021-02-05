import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: {
      name: 'Семейное дерево',
      children: [
        {
          familyName: 'Петровы',
          description: 'Красивый и добрый мужчина. Самый сильный на деревне.',
          photoURL: '',
          familyUId: 'VasilievOne',
          children: [
            {
              familyName: 'Ковалевы',
              description: 'Прошел вторую мировую. В первой помогал как ребенок. Тяжелая судьба.',
              photoURL: '',
              familyUId: 'VasielvevTwo'
            },
            {
              familyName: 'Бахаревичи',
              description: 'Описание Екатерины Васильевны',
              photoURL: '',
              familyUId: 'VasielvevnaTwo',
              children: [
                {
                  familyName: 'Головач',
                  description: 'Описание',
                  photoURL: '',
                  familyUId: 'MariaGolovachFirst'
                },
                {
                  familyName: 'Головач',
                  description: 'Описание',
                  photoURL: '',
                  familyUId: 'MariaGolovachSecond'
                }
              ]
            }
          ]
        },
        {
          familyName: 'Пупкины',
          description: 'Женщина как женщина. Умела готовить.',
          photoURL: '',
          familyUId: 'VasilevnaOne',
          children: [
            {
              familyName: 'Пупкины2',
              description: 'Женщина как женщина. Умела готовить.',
              photoURL: '',
              familyUId: 'VasilevnaOneTwo'
            }
          ]
        }
      ]
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
  getters: {
    getData: state => {
      return state.data
    }
  }
})
