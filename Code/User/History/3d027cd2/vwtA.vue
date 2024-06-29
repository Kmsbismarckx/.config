<template>
    <input class="input" type="text">
</template>
<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    }
}
</script>
<style>
    .input {
        width: 100%;
        border: 1px solid teal;
        padding: 10px 15px;
        margin-top: 10px;
    }
</style>