<script>
import { store } from './store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {
      message: 'Boolflix',
      store: store,
      query: 'Zoolander',
    }
  },
  methods: {
    fetchMovies() {
      // soluzione 1
      // axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${this.store.API_KEY}&query=${this.query}`)
      // .then(res => {
      //   console.log(res.data.results)
      // })

      // soluzione 2
      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: this.store.API_KEY,
          query: this.query,
          language: 'it_IT',
        }
      }).then(res => {
        console.log(res.data.results)
      })
    }
  },
  components: {
    AppHeader,
    AppMain,
  },
  created() {
    console.log('created')
    this.fetchMovies()
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style lang="scss">
@use './style/general.scss'
</style>
