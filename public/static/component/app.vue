<template>
    <h1 class="red" @click="click()">{{msg}}</h1>
    <ul>
        <li v-for="item in shiwan" track-by="$index">
            {{ item.name }}
        </li>
    </ul>
</template>

<script>
    module.exports = {
        data: function () {
            return {
                msg: 'hello App',
                shiwan: []
            }
        },
        ready: function () {
            console.log('ready');
            var self = this;
            self.$http.get('/static/json/shiwan.json').then(function (response) {

                // get status
                response.status;

                // get all headers
                response.headers();

                // get 'expires' header
                response.headers('expires');

                // set data on vm
                self.$set('shiwan', response.data);

            }, function (response) {

                // handle error
            });
        },
        methods: {
            click: function () {
                var self = this;
                self.$http.get('/static/json/shiwan.json').then(function (response) {

                    // get status
                    response.status;

                    // get all headers
                    response.headers();

                    // get 'expires' header
                    response.headers('expires');

                    // set data on vm
                    self.$set('shiwan', response.data);

                }, function (response) {

                    // handle error
                });
            }
        }
    }
</script>

<style>
    .red {
        color: #f00;
    }
</style>