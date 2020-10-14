<template>
  <div class="container">
    <Header />
    <div class="row mt-5">
      <div class="col-sm-8">
        <img :src="victim.imageUrl" alt="" class="image" />
      </div>
      <div class="col-sm-4 d-flex flex-column center">
        <h3>A victim of police brutality</h3>
        <h1 class="name">{{ victim.name }}</h1>
        <h3 class="mt-3">{{ victim.year_born }} - {{ victim.year_killed }}</h3>
        <h3 class="mb-auto mt-3">{{ victim.state | capitalize }} State</h3>
        <h4 class="mt-3">RIP Hero!</h4>
        <h4>Forever be remembered.</h4>
      </div>
    </div>
    <p class="read__text">
      {{ victim.story }}
    </p>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, params }) {
    const url = `/victims/${params.id}`
    const response = await $axios.$get(url)
    return { victim: response.data }
  },

  data() {
    return {
      victim: [],
    }
  },
}
</script>

<style scoped>
.container {
  font-family: 'Roboto', sans-serif;
}
.name {
  margin-top: 70px;
}
.image {
  width: 100%;
}

.read__text {
  width: 70%;
  margin-top: 40px;
  margin-bottom: 100px;
  font-size: 1.5rem;
}

@media screen and (max-width: 767px) {
  .name {
    margin-top: 20px;
  }
  .center {
    text-align: center;
  }
  .read__text {
    width: 90%;
    margin: 0 auto;
    font-size: 1.5rem;
  }
}
</style>
