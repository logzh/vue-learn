<template>
    <ul>
        <li v-for="item in items" >
            <div @click="selectAddress(item)">{{item | json}}</div>
            <a v-link="{ name: 'editAddress', params:{addressId:item.id} }">编辑</a>
        </li>
        <li><a v-link="{ name: 'addAddress' }">添加</a></li>
    </ul>
</template>

<script>
    module.exports = {
        props:['selectAddress'],
        data: function() {
            return {
                "items": []
            };
        },
        ready:function() {
            var self = this;
            self.$http.get('/static/json/addresses.json').then(function(response) {
                // set data on vm
                self.$set('items', response.data);
            }, function(response) {

                // handle error
            });
        }
    }
</script>
