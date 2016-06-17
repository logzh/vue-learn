<template>
    <h1 class="red" @click="click11(11)">{{msg}}</h1>
    <p>hh属性：{{hh}}</p>
    <ul>
        <li v-for="item in shiwan" track-by="$index">
            {{ item.name }}
        </li>
    </ul>
</template>

<script>

    export default {
        props: ['msg', 'hh', 'clickHandle'],
        data() {
            return {
                shiwan: []
            }
        },
        ready() {
            console.log('ready');
            var self = this;
            self.$http.get('/static/json/shiwan.json').then(function(response) {

                // get status
                response.status;

                // get all headers
                response.headers();

                // get 'expires' header
                response.headers('expires');

                // set data on vm
                self.$set('shiwan', response.data);

            }, function(response) {

                // handle error
            });
        },
        methods: {
            click11 (mm){
                this.clickHandle(mm)

            },
            click() {
                var self = this;
                self.$http.get('/static/json/shiwan.json').then(function(response) {

                    // get status
                    response.status;

                    // get all headers
                    response.headers();

                    // get 'expires' header
                    response.headers('expires');

                    // set data on vm
                    self.$set('shiwan', response.data);

                }, function(response) {

                    // handle error
                });
            }
        }
    }
</script>

<style scoped>
    .red {
        color: red;
    }
</style>