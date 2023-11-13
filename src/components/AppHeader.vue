<script>
import { store } from '../store.js'

export default {
    data() {
        return {
            store: store,
        };
    },
}
</script>

<template>
    <div class="container">
        <input v-model="store.searchText" @keyup.enter="$emit('performSearch')" type="search"
            placeholder="cosa vuoi guardare?">
        <button @click="$emit('performSearch')">
            Cerca
        </button>
        <!-- <div>{{ store.searchText }}</div> -->
    </div>
</template>

<style></style>