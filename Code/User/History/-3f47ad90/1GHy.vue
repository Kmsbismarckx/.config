<template lang="">
    <div class='dialog' v-if="show">
        di            
    </div>
</template>
<script>
export default {
    name: 'my-dialog',
    props: {
        show: {
            type: Boolean,
            default: false
        }
    }
}
</script>
<style scoped>
    
</style>