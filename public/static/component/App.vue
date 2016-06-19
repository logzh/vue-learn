<template>
    <router-view
            :selected-address="selectedAddress"
            :select-address="selectAddress"
            :save-address="saveAddress"
    ></router-view>
</template>

<script>
    module.exports = {
        data: function() {
            return {
                selectedAddress: {
                    id: 0
                }
            };
        },
        methods: {
            selectAddress: function(address) {
                this.selectedAddress = address;
                this.$router.go({ name: 'q'})
            },
            saveAddress: function(address) {
                this.selectedAddress = address;
                this.$router.go({ name: 'q'})
            }
        }
    }
</script>
