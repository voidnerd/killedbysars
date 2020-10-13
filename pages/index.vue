<template>
  <div class="container">
    <Header v-on:Gender="Gender" v-on:search="search" />
    <nuxt-link to="/publish" class="d-block mx-auto mx-md-0 publish w-25">
      <div class="d-flex adder flex-row align-items-center mt-5">
        <div class="adder__icon p-3 mr-3 rounded-circle">
          <svg
            width="20"
            height="20"
            viewBox="0 0 37 39"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M24.3577 13.9811H37V24.6141H24.3577V39H12.6794V24.6141H0V13.9811H12.6794V0H24.3577V13.9811Z"
              fill="#0D1418"
            />
          </svg>
        </div>
        <div class="adder__text">Add a Fallen</div>
      </div>
    </nuxt-link>

    <div
      class="cards d-flex justify-content-center justify-content-md-between flex-wrap"
    >
      <div
        v-for="victim in selected"
        :key="victim.id"
        class="rounded card pb-3 mt-5"
      >
        <img :src="victim.imageUrl" alt="" class="image" />
        <h1 class="text-center mt-3">{{ victim.name }}</h1>
        <div class="text-center">
          <span
            >{{ victim.year_born }} - {{ victim.year_killed }} |
            {{ victim.state | capitalize }}</span
          >
        </div>
        <p class="mt-3 story max-lines">
          {{ victim.story }}
        </p>

        <nuxt-link :to="`/victim/${victim.id}`" class="my-4 mx-auto reader">
          <span class="read__text"> Read More </span>
          <span>
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.91409e-07 3.33333L7.87222 3.33333L5.88056 0.943334L6.66667 2.91409e-07L10 4L6.66667 8L5.88056 7.05667L7.87222 4.66667L4.07973e-07 4.66667L2.91409e-07 3.33333Z"
                fill="white"
              />
            </svg>
          </span>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const response = await $axios.$get('/victims')
    return { victims: response.data, selected: response.data }
  },

  data() {
    return {
      selected: [],
      victims: [],
    }
  },
  methods: {
    Gender(gender) {
      console.log(gender)
      if (gender === 'both') {
        this.selected = this.victims
        return
      }
      this.selected = this.victims.filter((val) => {
        return val.gender === gender
      })
    },
    search(str) {
      this.selected = this.victims.filter((val) => {
        return val.name.includes(str)
      })
    },
  },
}
</script>

<style scoped>
.container {
  font-family: 'Roboto', sans-serif;
}

/* .publish {
  width: 70px;
}

.adder {
  width: 40%;
} */
.adder__icon {
  background-color: #fff;
  /* width: 200px; */
}
.adder__text {
  font-size: 20px;
}
.image {
  width: 100%;
  height: 250px;
}
.story {
  min-height: 60px;
}
.card {
  background-color: #262d31;
  width: 340px;
}
p {
  font-size: 1.3rem;
  width: 93%;
  margin: 0 auto;
}

.max-lines {
  display: block;
  text-overflow: ellipsis;
  word-wrap: break-word;
  overflow: hidden;
  max-height: 3.6em;
  line-height: 1.8em;
}

.read__text {
  font-size: 1.3rem;
}

.read__text:hover {
  margin-right: 5px;
}

.reader:hover {
  border-bottom: 1px solid #fff;
}

@media screen and (max-width: 767px) {
  .publish {
    width: 200px !important;
  }
}
</style>
