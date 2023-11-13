<script>
import { store } from '../store.js'

export default {
    data() {

        return {
            message: 'Cerca un film ',
        };
    },
}
</script>

<template>
    <div class="container">
        <span>{{ message }}</span>
        <input type="text" name="" id="">
    </div>
</template>

<style></style>