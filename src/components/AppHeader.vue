<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            searchText: '',
        };
    },
}
</script>

<template>
    <div class="container">
        <input v-model="searchText" type="search" placeholder="cosa vuoi guardare?">
        <button>Cerca</button>
        <div>{{ searchText }}</div>
    </div>
</template>

<style></style>