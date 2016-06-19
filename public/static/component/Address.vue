<template>
    <form>
        <div>
            <label for="">省份：</label>
            <input type="text" v-model="address.province">
        </div>
        <div>
            <label for="">市：</label>
            <input type="text" v-model="address.city">
        </div>
        <div>
            <label for="">县/区：</label>
            <input type="text" v-model="address.county">
        </div>
        <div>
            <label for="">电话：</label>
            <input type="text" v-model="address.phoneNo">
        </div>
        <div>
            <label for="">收货人：</label>
            <input type="text" v-model="address.receiver">
        </div>
        <div>
            <button @click="saveAddress(address)">保存</button>
        </div>
    </form>
</template>

<script>
    module.exports = {
        props: ['saveAddress'],
        data: function() {
            return {
                "address":{}
            };
        },
        ready:function() {

            var self = this;
            console.log(self.$route.params)
            self.$http.get('/static/json/addresses.json').then(function(response) {
                // set data on vm
                response.data.map(function(item) {
                    if (item.id == self.$route.params.addressId){
                        self.$set('address', item);
                    }
                })

            }, function(response) {

                // handle error
            });
        }
    }
</script>
