<script>
import { store } from './store.js'
import axios from 'axios';

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
      axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${this.store.API_KEY}&query=${this.query}`)

      // soluzione 2
    }
  },
  created() {
    console.log('created')
    this.fetchMovies()
  }
}
</script>

<template>
  <input type="text" name="" id="">
  <div>{{ message }}</div>
</template>

<style lang="scss">
@use './style/general.scss'
</style>
