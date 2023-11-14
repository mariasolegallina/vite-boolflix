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
        <div class="card__text row">
            <h4 class="title">{{ item.title }}</h4>
            <h5 class="original-title">{{ item.original_title }}</h5>

            <!-- vote -->
            <div>
                <font-awesome-icon v-for="n in Math.round(item.vote_average / 2)" :key="n" icon="fa-solid fa-star" />
                <font-awesome-icon v-for="n in Math.round(5 - item.vote_average / 2)" :key="n" icon="fa-regular fa-star" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    background-color: black;
    color: white;

    .card__image {
        img {
            aspect-ratio: 2 / 3;
            object-fit: cover;
        }
    }

    .card__text {
        padding: 6px;
        flex-direction: column;

        .title {
            font-size: 12px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }

        .original-title {
            font-size: 10px;
            font-weight: 400;
        }
    }
}
</style>