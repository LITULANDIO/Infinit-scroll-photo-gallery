<template src="./Photo.html"></template>

<script>
export default {
    name: 'Photo',
    props:{
        photo:{
            type: Object,
            required: true
        }
    },
    setup(props, {emit}){
        const onClicked = () =>{
            emit('onClicked', props.photo)
        }

    
        return{ 
            onClicked,
        }
    }
}
</script>

<style lang="scss" src="./Photo.scss" scoped></style>