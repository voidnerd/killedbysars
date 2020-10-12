<template>
  <div class="container">
    <Header />
    <div class="card mt-5 mx-auto pb-4">
      <h1 class="text-center mt-4">Add a Fallen</h1>
      <hr />
      <div class="form mx-auto">
        <div class="row mt-4">
          <div class="col-sm-5">
            <div class="d-flex flex-column align-items-center uploader mx-auto">
              <img src="/placeholder.svg" alt="" class="image" />
              <span class="d-block text center">Please choose a picture</span>
            </div>
          </div>
          <div class="col-sm-7">
            <div class="pl-2 pr-2 mb-auto">
              <div class="mb-3 input__holder">
                <label>Full Name</label>
                <input
                  type="email"
                  id="exampleFormControlInput1"
                  placeholder="Isiaq Jimoh"
                />
              </div>
            </div>
            <div class="d-flex mt-5">
              <div class="input__holder mr-3 w-50">
                <label>State</label>
                <input
                  type="email"
                  id="exampleFormControlInput1"
                  placeholder="Lagos"
                />
              </div>

              <div class="input__holder mr-3">
                <label>Gender</label>
                <input
                  type="email"
                  id="exampleFormControlInput3"
                  placeholder="Male"
                />
              </div>

              <div class="input__holder mr-3">
                <label>Year Born</label>
                <input
                  type="email"
                  id="exampleFormControlInput3"
                  placeholder="1993"
                />
              </div>

              <div class="input__holder mr-3">
                <label>Year Killed</label>
                <input
                  type="email"
                  id="exampleFormControlInput3"
                  placeholder="2020"
                />
              </div>
            </div>
          </div>
        </div>
        <div class="mt-2 mb-5">
          <div class="input__holder">
            <label>Write his/her story here:</label>
            <textarea
              id="exampleFormControlTextarea1"
              class="form-control mt-1"
              rows="6"
              placeholder="How did this hero die?"
            ></textarea>
          </div>
        </div>

        <div
          class="d-flex flex-row align-items-center mt-4 mb-5 mx-auto publisher"
        >
          <span class="d-block publish"> Publish </span>
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
export default {}
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
  height: 200px;
}

.image {
  width: 100%;
  max-height: 300px;
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
</style>
