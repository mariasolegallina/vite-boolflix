<script>
import { store } from '../store'

export default {
    data() {
        return {
            store: store,
            language: ['it', 'es', 'de', 'en', 'fr', 'usa']
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
        <!-- poster -->
        <div class="card__image">
            <img v-if="item.poster_path === null" src="../img/no_poster.png" alt="image_not_found">
            <img v-else :src="`https://image.tmdb.org/t/p/original${item.poster_path}`" alt="poster">
        </div>
        <!-- testo -->
        <div class="card__text row">
            <h4 class="title">{{ item.title ? item.title : item.name }}</h4>
            <h5 class="original-title">{{ item.original_title ? item.original_title : original.name }}</h5>

            <!-- <img src="https://flagsapi.com/BE/flat/64.png"> -->
            <img v-if="language.includes(item.original_language)" :src="`/flags/${item.original_language}.png`"
                alt="original_language">
            <p v-else>{{ item.original_language }}</p>
            <div class=" card__vote">
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

        .vote {
            font-size: 12px;
        }
    }
}
</style>