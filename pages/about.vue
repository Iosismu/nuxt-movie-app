<template>
  <div class="about">
    <div class="photo">
      <Loader
        v-if="imageLoading"
        absolute />
      <img
        :src="image"
        :alt="name" />
    </div>
    <div class="name">
      {{ name }}
    </div>
    <div>{{ email }}</div>
    <div>{{ blog }}</div>
    <div>{{ phone }}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Loader from '~/components/Loader'

export default {
  components: {
    Loader
  },
  data() {
    return {
      imageLoading: true
    }
  },
  computed: {
    ...mapState('about', [
      'name',
      'email',
      'blog',
      'phone',
      'image'
    ])
  },
  mounted() {
    this.init()
  },
  methods: {
    async init() {
      await this.$loadImage(this.image)
      this.imageLoading = false
    }
  },
  head() {
    return {
      meta: [
        { hid: 'og:type', property: 'og:type', content: 'website' },// hid를 동일하게 작성한 meta정보가 있다면 이부분에 새롭게 덮어쓸 수 있다.
        { hid: 'og:site_name', property: 'og:site_name', content: 'Nuxt Movie App' },
        { hid: 'og:title', property: 'og:title', content: this.name },
        { hid: 'og:description', property: 'og:description', content: this.email },
        { hid: 'og:image', property: 'og:image', content: this.image },
        { hid: 'og:url', property: 'og:url', content: `${process.env.CLIENT_URL}${this.$route.fullPath}` }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .about {
    text-align: center;
    .photo {
      width: 250px;
      height: 250px;
      margin: 40px auto 20px;
      padding: 30px;
      border: 10px solid pink;
      border-radius: 50%;
      box-sizing: border-box;
      background-color: $gray-200;
      overflow: hidden;
      position: relative;
      img {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        border-radius: 20%;
      }
    }
    .name {
      font-size: 40px;
      font-display: "Oswald", sans-serif;
      margin-bottom: 20px;
    }
  }
</style>
