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
            self.$http.get('/json/shiwan.json', function (data) {
                self.$set('shiwan', data);
            }).error(function (data, status, request) {
            });
        },
        methods: {
            click: function () {
                var self = this;
                self.$http.get('/json/shiwan.json', function (data) {
                    self.$set('shiwan', self.$data.shiwan.concat(data));
                }).error(function (data, status, request) {
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