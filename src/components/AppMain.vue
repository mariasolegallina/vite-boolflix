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
    <div class="app__main">
        <div class="cards grid">
            <AppCard v-for="movie in store.moviesArray" :key="movie.id" :item="movie" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.app__main {
    .grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 40px;
    }
}
</style>