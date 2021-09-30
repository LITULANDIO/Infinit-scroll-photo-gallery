<template src="./Spinner.html"></template>

<script>
export default {
    name: 'Spinner',
    props:{
        show:{
            type: Boolean,
            default: false
        },
        load:{
            type: Number
        }
    },
    setup(){

        return{

        }

    }

}
</script>

<style lang="scss" src="./Spinner.scss" scoped></style>