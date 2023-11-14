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
    <div class="app__header row">
        <div class="logo">
            <h4>Boolflix</h4>
        </div>
        <div class="searchbar">
            <input v-model="store.searchText" @keyup.enter="$emit('performSearch')" type="search"
                placeholder="cosa vuoi guardare?">
            <button @click="$emit('performSearch')">
                Cerca
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.app__header {
    justify-content: space-between;

    .logo {
        h4 {
            color: red;
            text-transform: uppercase;
        }
    }

    input {
        margin-right: 5px;
    }

}
</style>