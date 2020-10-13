<template>
  <div class="container">
    <Header />
    <div class="card mt-5 mx-auto pb-4">
      <h1 class="text-center mt-4">Add a Fallen</h1>
      <hr />
      <div class="form mx-auto">
        <div class="row mt-4">
          <p v-show="error" class="text-center text-danger font-weight-bold">
            {{ errorMessage }}
          </p>
          <div class="col-md-5 col-sm-12">
            <div class="d-flex flex-column align-items-center uploader mx-auto">
              <img
                :src="currentFile"
                @click="$refs.file.click()"
                alt=""
                class="image"
              />
              <input
                type="file"
                @change="onFileChange"
                ref="file"
                style="display: none"
              />
              <span class="d-block text center">Please choose a picture</span>
            </div>
          </div>
          <div class="col-md-7 col-sm-12">
            <div class="row">
              <div class="col-md-12 col-sm-12">
                <div class="mb-3 input__holder">
                  <label>Full Name</label>
                  <input
                    type="email"
                    v-model="name"
                    placeholder="Isiaq Jimoh"
                  />
                </div>
              </div>
            </div>
            <div class="row mt-4">
              <div class="col-md-6 col-sm-6 mt-4 mt-md-0">
                <div class="input__holder 50">
                  <label>State</label>
                  <select v-model="state">
                    <option v-for="state in states" :key="state">
                      {{ state }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-md-6 col-sm-6 mt-4 mt-md-0">
                <div class="input__holder 50">
                  <label>Gender</label>
                  <select v-model="gender">
                    <option selected>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>

              <div class="col-md-6 col-sm-6 mt-4">
                <div class="input__holder 50">
                  <label>Year Born</label>
                  <select v-model="yearBorn">
                    <option selected>unknown</option>
                    <option v-for="year in years" :key="year">
                      {{ year }}
                    </option>
                  </select>
                </div>
              </div>

              <div class="col-md-6 col-sm-6 mt-4">
                <div class="input__holder 50">
                  <label>Year Killed</label>
                  <select v-model="yearKilled">
                    <option v-for="year in years" :key="year">
                      {{ year }}
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mt-4 mb-5">
          <div class="input__holder">
            <label>Write his/her story here:</label>
            <textarea
              id="exampleFormControlTextarea1"
              class="form-control mt-1"
              v-model="story"
              rows="6"
              placeholder="How did this hero die?"
            ></textarea>
          </div>
        </div>

        <p v-show="error" class="text-center text-danger font-weight-bold">
          {{ errorMessage }}
        </p>

        <div
          @click="publish"
          class="d-flex flex-row align-items-center mt-4 mb-5 mx-auto publisher"
        >
          <span class="d-block publish">{{ btnText }} </span>
          <span>
            <svg
              width="20"
              height="18"
              viewBox="0 0 28 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-1.06955e-06 9.58333L22.0422 9.58333L16.4656 2.71208L18.6667 8.15946e-07L28 11.5L18.6667 23L16.4656 20.2879L22.0422 13.4167L-7.34426e-07 13.4167L-1.06955e-06 9.58333Z"
                fill="white"
              />
            </svg>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentFile: '/placeholder.svg',
      name: '',
      state: 'Lagos',
      gender: 'Male',
      yearBorn: 'unknown',
      yearKilled: '2020',
      story: '',
      years: [],
      states: [],
      processing: false,
      btnText: 'Publish',
      error: false,
      errorMessage: '',
    }
  },
  methods: {
    createUpdateImage(file) {
      //   var image = new Image();
      const reader = new FileReader()
      const vm = this
      reader.onload = (e) => {
        vm.currentFile = e.target.result
      }
      reader.readAsDataURL(file)
    },
    onFileChange($event) {
      const files = $event.target.files || $event.dataTransfer.files
      this.createUpdateImage(files[0])
      console.log(this.$refs.file.files[0])
    },

    hasError(field) {
      return this.errorMessage.includes(field)
    },

    async publish() {
      if (this.processing) {
        return
      }
      this.processing = true
      this.btnText = 'Publishing'
      this.error = false

      const formData = new FormData()
      formData.append('name', this.name)
      formData.append('state', this.state)
      formData.append('gender', this.gender)
      formData.append('year_born', this.yearBorn)
      formData.append('year_killed', this.yearKilled)
      formData.append('story', this.story)
      formData.append('image', this.$refs.file.files[0])

      try {
        const data = await this.$axios.$post('/victims', formData)

        if (data) {
          this.processing = false
          this.btnText = 'Publish'
        }
      } catch (error) {
        this.processing = false
        this.btnText = 'Publish'
        this.error = true
        this.errorMessage = error.response.data.error

        console.log(error.response)
      }
    },
  },
  mounted() {
    for (let i = 2020; i > 1970; i--) {
      this.years.push(i)
    }
    this.states = [
      'Lagos',
      'Abuja',
      'Abia',
      'Adamawa',
      'Akwa Ibom',
      'Anambra',
      'Bauchi',
      'Bayelsa',
      'Benue',
      'Borno',
      'Cross River',
      'Delta',
      'Ebonyi',
      'Edo',
      'Ekiti',
      'Enugu',
      'Gombe',
      'Imo',
      'Jigawa',
      'Kaduna',
      'Kano',
      'Katsina',
      'Kebbi',
      'Kogi',
      'Kwara',
      'Nasarawa',
      'Niger',
      'Ogun',
      'Ondo',
      'Osun',
      'Oyo',
      'Plateau',
      'Rivers',
      'Sokoto',
      'Taraba',
      'Yobe',
      'Zamfara',
    ]
  },
}
</script>

<style scoped>
.container {
  font-family: 'Roboto', sans-serif;
}
.form {
  width: 90%;
}
.card {
  background: #262d31;
  width: 80%;
}
.uploader {
  width: 300px;
  height: 250px;
}

.image {
  width: 100%;
  max-height: 250px;
  cursor: pointer;
}
.input__holder label {
  font-size: 1.4rem;
}

.input__holder input {
  font-size: 1.4rem;
  background-color: transparent;
  border: none;
  color: #fff;
  width: 100%;
  padding: 8px 0;
  box-sizing: border-box;
  font-size: 1.4rem;
  border-bottom: 1px solid#C4C4C4;
}

.input__holder select {
  font-size: 1.4rem;
  background-color: transparent;
  border: none;
  color: #fff;
  width: 100%;
  padding: 8px 0;
  box-sizing: border-box;
  font-size: 1.4rem;
  border-bottom: 1px solid#C4C4C4;
}

.input__holder select:focus {
  outline: none;
}

.input__holder textarea {
  font-size: 1.5rem;
  background: #c4c4c4;
  border: none;
  color: #0d1418;
  width: 100%;
  padding: 8px 8px;
  box-sizing: border-box;
  font-size: 1.4rem;
  border-bottom: 1px solid#C4C4C4;
}

.input__holder input:focus {
  outline: none;
}

.publish {
  font-size: 2rem;
  margin-right: 5px;
}

.publish:hover {
  margin-right: 10px;
}
.publisher {
  width: 100px;
}

.publisher:hover {
  border-bottom: 1px solid #fff;
}
@media screen and (max-width: 767px) {
  .input__holder.50 {
    width: 100%;
  }
}

@media screen and (max-width: 439px) {
  .uploader {
    width: 250px;
    height: 200px;
  }
}

@media screen and (max-width: 349px) {
  .uploader {
    width: 200px;
    height: 200px;
  }
}
</style>
