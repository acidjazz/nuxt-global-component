<template lang="pug">
#Index
  section.hero.is-primary
    .container
      .hero-body
        h1.title programmatic global component
        h2.subtitle example setup, how would you improve this?

  section.section
    .conatiner
      .level
        .level-item
          .field.has-addons
            .control
              input.input(type="text",v-model="copy",placeholder="type some text",@keyup.enter="modal")
            .control
              a.button.is-info(@click="modal") launch modal

  section.section
    .container
      .box
        pre.
          export default {
            methods: {
              modal () {
                this.$modal.alert(this.copy)
              }
            },
            data () {
              return {
                copy: '',
              }
            },
          }
</template>

<script>
export default {
  methods: {
    modal () {
      this.$modal.alert(this.copy)
    }
  },
  data () {
    return {
      copy: '',
    }
  },
}
</script>

