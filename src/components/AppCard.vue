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
    <div>
        <h4>{{ item.title }}</h4>
        <h5>{{ item.original_title }}</h5>
    </div>
</template>
<style lang="scss" scoped></style>