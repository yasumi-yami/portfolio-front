<template>
  <div class="hero is-fullheight" id="about">
    <div class="hero-body">
      <div class="container">
        <h3 class="title">About</h3>
        <div class="columns is-mobile">
          <div class="column is-4">
            <figure class="image is-128x128">
              <img class="is-rounded" src="@/assets/icon.png"/>
            </figure>
          </div>
          <div class="column text-column">
            <p>やすみやみ<a href="https://twitter.com/YamiYasumi">@YasumiYami</a></p>
            <p>Tech系VirtualYoutuber(志望)です</p>
            <p>ゲーム系メガベンチャー出身、Fintech領域のWebエンジニア。</p>
            <p>技術を解説したりライブコーディングしたり、</p>
            <p>たまにゲーム配信したりします。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {}
  }
}
</script>

<style>
div.text-column {
  text-align: left;
}
</style>
