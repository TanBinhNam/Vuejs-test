<script>
export default {
    props: {
        detail: {
            type: Array,
            require: true
        }
    },
}
</script>

<template>
    <p>Description
            <ul>
              <li v-for="each in detail">
                {{ each }}
              </li>
            </ul>

    </p>
</template>
