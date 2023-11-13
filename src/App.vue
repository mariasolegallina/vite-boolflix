<script>
import { store } from './store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  data() {
    return {
      // message: 'Boolflix',
      store: store,
      // query: 'Zoolander',
    }
  },
  methods: {
    fetchMovies() {
      console.log('click')

      axios.get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: this.store.API_KEY,
          query: this.store.searchText,
          // language: 'it_IT',
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
  // created() {
  //   console.log('created')
  //   this.fetchMovies()
  // }
}
</script>

<template>
  <AppHeader @performSearch="fetchMovies" />
  <AppMain />
</template>

<style lang="scss">
@use './style/general.scss'
</style>
