<template>
    <div>
        已经选择的地址：<div>{{selectedAddress | json}}</div>
        <a v-link="{ name: 'addressList' }">从地址列表中选择</a>
    </div>
</template>

<script>

    module.exports = {
        props: ['selectedAddress']
    }

</script>