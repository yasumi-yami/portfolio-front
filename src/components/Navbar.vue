<template>
  <b-navbar type="is-light" class="is-fixed-top">
    <template slot="start">
      <b-navbar-item href="">
        YasumiYa.me
      </b-navbar-item>
    </template>
    <template slot="end">
      <b-navbar-item href="#top">
        Top
      </b-navbar-item>
      <b-navbar-item href="#about">
        About
      </b-navbar-item>
      <b-navbar-item href="#skill">
        Skill
      </b-navbar-item>
      <b-navbar-item href="#certificates">
        Certificates
      </b-navbar-item>
      <b-navbar-item href="#social">
        Social
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
