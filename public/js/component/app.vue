<template>
  <h1 class="red">{{msg}}</h1>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      msg: 'Hello world!'
    }
  }
}
</script>

<style>
.red {
  color: #f00;
}
</style>