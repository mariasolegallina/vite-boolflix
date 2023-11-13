<script>
import { store } from '../store'
import AppCard from './AppCard.vue';

export default {
    data() {
        return {
            store: store,
        };
    },
    components: {
        AppCard
    }
}
</script>
<template>
    <AppCard v-for="movie in store.moviesArray" :key="movie.id" :Title="movie.title"
        :OriginalTitle="movie.original_title" />
</template>
<style></style>