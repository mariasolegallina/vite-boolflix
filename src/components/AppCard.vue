<script>
import { store } from '../store'

export default {
    data() {
        return {
            store: store,
        }
    },
    props: {
        item: Object
        // Title: String,
        // OriginalTitle: String,
        // OriginalLanguage: String,
    }
}
</script>

<template>
    <div class="card">
        <div class="card__image">
            <img v-if="item.poster_path === null" src="../img/no_poster.png" alt="image_not_found">
            <img v-else :src="`https://image.tmdb.org/t/p/original${item.poster_path}`" alt="poster">
        </div>
        <h4>{{ item.title }}</h4>
        <h5>{{ item.original_title }}</h5>
    </div>
</template>

<style lang="scss" scoped>
.card__image {
    img {
        aspect-ratio: 2 / 3;
    }
}
</style>