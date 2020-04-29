<template>
  <div id="app">
    <navbar></navbar>
    <top></top>
    <about></about>
    <skill></skill>
    <work></work>
    <social></social>
  </div>
</template>

<script>
import navbar from './navbar'
import top from './top'
import about from './about'
import skill from './skill'
import work from './work'
import social from './social'

export default {
  name: 'Main',
  components: {
    navbar: navbar,
    top: top,
    about: about,
    skill: skill,
    work: work,
    social: social
  },
  data () {
    return {}
  }
}
</script>
