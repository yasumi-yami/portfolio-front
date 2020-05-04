<template>
  <div id="app">
    <navbar></navbar>
    <top></top>
    <about></about>
    <skill></skill>
    <certificates></certificates>
    <social></social>
  </div>
</template>

<script>
import navbar from './navbar'
import top from './top'
import about from './about'
import skill from './skill'
import social from './social'
import certificates from './certificates'

export default {
  name: 'Main',
  components: {
    navbar: navbar,
    top: top,
    about: about,
    skill: skill,
    social: social,
    certificates: certificates
  },
  data () {
    return {}
  }
}
</script>
