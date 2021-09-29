<template src="./Navbar.html"></template>

<script>
import { onMounted, ref } from 'vue';

export default {
    name: 'Navbar',
    props:{
        name:{
            type: String
        }
    },
    setup(){
        const date = ref();

        const getDate = () => {
            const dateNow = new Date();
            return date.value = `${dateNow.getDate()}/${dateNow.getMonth() + 1}/${dateNow.getFullYear()}`;
        }

        onMounted(() =>{
            getDate();
        })

        return{
            date
        }
    }
}
</script>

<style lang="scss" src="./Navbar.scss" scoped></style>