<template>
  <div class="hero is-fullheight" id="skill">
    <div class="hero-body">
      <div class="container">
        <h3 class="title">Skill</h3>
        サーバーサイドの開発技術は一通りそこそこ。<br>
        インフラぼちぼち、フロントちょびちょび。<br>
        その他遊び程度に色々ちょっと触ってみたり。<br>
        <div class="columns">
          <div class="column">
            <h4>Language</h4>
            <div class="text-column">
              <ul>
                <li>
                  <b-icon icon="grin" size="is-small" type="is-dark"></b-icon>
                  Perl
                </li>
                <li>
                  <b-icon icon="grin" size="is-small" type="is-dark"></b-icon>
                  Go
                </li>
                <li>
                  <b-icon icon="smile" size="is-small" type="is-dark"></b-icon>
                  Java
                </li>
                <li>
                  <b-icon icon="meh" size="is-small" type="is-dark"></b-icon>
                  PHP
                </li>
                <li>
                  <b-icon icon="meh" size="is-small" type="is-dark"></b-icon>
                  Scala
                </li>
                <li>
                  <b-icon icon="meh" size="is-small" type="is-dark"></b-icon>
                  Ruby
                </li>
                <li>
                  <b-icon icon="meh" size="is-small" type="is-dark"></b-icon>
                  JavaScript
                </li>
              </ul>
            </div>
          </div>
          <div class="column">
            <h4>Database</h4>
            <div class="text-column">
              <ul>
                <li>
                  <b-icon icon="grin" size="is-small" type="is-dark"></b-icon>
                  RDB<br>
                  &nbsp;&nbsp;
                  <b-icon icon="grin" size="is-small" type="is-dark"></b-icon>
                  MySQL<br>
                  &nbsp;&nbsp;
                  <b-icon icon="smile" size="is-small" type="is-dark"></b-icon>
                  OracleDB
                </li>
                <li>
                  <b-icon icon="smile" size="is-small" type="is-dark"></b-icon>
                  KVS<br>
                  &nbsp;&nbsp;
                  <b-icon icon="smile" size="is-small" type="is-dark"></b-icon>
                  Memcached<br>
                  &nbsp;&nbsp;
                  <b-icon icon="smile" size="is-small" type="is-dark"></b-icon>
                  Redis
                </li>
                <li>
                  <b-icon icon="grin" size="is-small" type="is-dark"></b-icon>
                  NoSQL(Document)<br>
                  &nbsp;&nbsp;
                  <b-icon icon="grin" size="is-small" type="is-dark"></b-icon>
                  CloudFirestore<br>
                  &nbsp;&nbsp;
                  <b-icon icon="meh" size="is-small" type="is-dark"></b-icon>
                  DynamoDB
                </li>
              </ul>
            </div>
          </div>
          <div class="column">
            <h4>Cloud</h4>
            <div class="text-column">
              <ul>
                <li>
                  <b-icon icon="grin" size="is-small" type="is-dark"></b-icon>
                  GCP<br>
                  &nbsp;&nbsp;
                  <b-icon icon="grin" size="is-small" type="is-dark"></b-icon>
                  GAE<br>
                  &nbsp;&nbsp;
                  <b-icon icon="meh" size="is-small" type="is-dark"></b-icon>
                  GCE<br>
                  &nbsp;&nbsp;
                  <b-icon icon="smile" size="is-small" type="is-dark"></b-icon>
                  CloudSQL<br>
                  &nbsp;&nbsp;
                  <b-icon icon="grin" size="is-small" type="is-dark"></b-icon>
                  CloudFirestore<br>
                  &nbsp;&nbsp;
                  <b-icon icon="meh" size="is-small" type="is-dark"></b-icon>
                  CloudDataflow
                </li>
                <li>
                  <b-icon icon="smile" size="is-small" type="is-dark"></b-icon>
                  AWS<br>
                  &nbsp;&nbsp;
                  <b-icon icon="smile" size="is-small" type="is-dark"></b-icon>
                  EC2<br>
                  &nbsp;&nbsp;
                  <b-icon icon="smile" size="is-small" type="is-dark"></b-icon>
                  ECS<br>
                  &nbsp;&nbsp;
                  <b-icon icon="smile" size="is-small" type="is-dark"></b-icon>
                  RDS<br>
                  &nbsp;&nbsp;
                  <b-icon icon="meh" size="is-small" type="is-dark"></b-icon>
                  DynamoDB<br>
                  &nbsp;&nbsp;
                </li>
              </ul>
            </div>
          </div>
          <div class="column">
            <h4>Other</h4>
            <div class="text-column">
              <ul>
                <li>
                  <b-icon icon="grin" size="is-small" type="is-dark"></b-icon>
                  git
                </li>
                <li>
                  <b-icon icon="meh" size="is-small" type="is-dark"></b-icon>
                  svn
                </li>
                <li>
                  <b-icon icon="smile" size="is-small" type="is-dark"></b-icon>
                  docker
                </li>
                <li>
                  <b-icon icon="smile" size="is-small" type="is-dark"></b-icon>
                  shell
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Skill'
  /*  data () {
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
          label: 'CATEGORY'
        },
        {
          field: 'keyword',
          label: 'KEYWORD'
        }
      ]
    }
  }
   */
}
</script>

<style>
ul {
  list-style: none;
}

</style>
