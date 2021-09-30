<template src="./Photo.html"></template>

<script>
export default {
    name: 'Photo',
    props:{
        photo:{
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss" src="./Photo.scss" scoped></style>