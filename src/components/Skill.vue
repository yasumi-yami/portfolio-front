<template>
  <section class="section" id="skill">
    <div class="container">
      <div class="section-heading">
        <h3 class="title">Skill</h3>
      </div>
      サーバーサイドの開発技術は一通りそこそこ。<br>
      インフラぼちぼち、フロントちょびちょび。<br>
      その他遊び程度にUnity触ったりVBA触ったり。
      <div class="box">
        <b-table :data="data" :columns="columns" class="is-narrow"></b-table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Skill',
  data () {
    return {
      data: [
        { 'category': 'Language', 'keyword': 'Perl,Go,Java,PHP,Scala,Ruby,JavaScript,...' },
        { 'category': 'Database', 'keyword': 'MySQL,OracleDatabase,CloudDatastore' },
        { 'category': 'AWS', 'keyword': 'EC2,ECS,S3,RDS' },
        { 'category': 'GCP', 'keyword': 'GAE,GKE,Firestore,Dataflow,CloudSQL' },
        { 'category': 'Other', 'keyword': 'git/svn/Docker/vim/shell' }
      ],
      columns: [
        {
          field: 'category',
          label: 'CATEGORY',
        },
        {
          field: 'keyword',
          label: 'KEYWORD'
        }
      ]
    }
  }
}
</script>
