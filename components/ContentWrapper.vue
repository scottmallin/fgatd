<template>
  <div class="flex items-center">
    <div class="container">
      <div class="row">
        <div class="md:col-8 md:offset-2">
            <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        data () {
            return {}
        }
    }
</script>