<template>
    <h1 class="red" @click="click()">{{msg}}</h1>
</template>

<script>
    module.exports = {
        data: function(){
            return {
                msg: 'hello App'
            }
        },
        methods: {
            click: function(){
                alert(this.msg);
            }
        }
    }
</script>

<style>
    .red {
        color: #f00;
    }
</style>