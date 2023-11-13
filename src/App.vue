<script>
import { store } from './store.js';
import axios from 'axios';
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppHeader,
    AppMain,
  },
  data() {
    return {
      // message: 'Boolflix',
      // query: 'Zoolander',
      store: store,
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
        store.moviesArray = res.data.results;
        // store.displayCard = true;
      })


      store.searchText = ''
    }
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
