<script>
import { store } from '../store'

export default {
    data() {
        return {
            store: store,
        }
    },
    props: {
        Title: String,
        OriginalTitle: String,
        OriginalLanguage: String,
    }
}
</script>

<template>
    <div>
        <h4>{{ Title }}</h4>
        <h5>{{ OriginalTitle }}</h5>
    </div>
</template>
<style></style>