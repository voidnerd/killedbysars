<template>
  <div class="container">
    <Header />
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

    <div class="cards mt-5">
      <div class="w-25 rounded card pb-3">
        <img src="/victim.png" alt="" class="image" />
        <h1 class="text-center mt-3">Isiaq Jimoh</h1>
        <div class="text-center">
          <span>1993 - 2020 | Lagos</span>
        </div>
        <p class="text-justify mt-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div class="my-4 mx-auto reader">
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
.adder {
  width: 200px;
}
.adder__icon {
  background-color: #fff;
  /* width: 200px; */
}
.adder__text {
  font-size: 20px;
}
.image {
  width: 100%;
}
.card {
  background-color: #262d31;
}
p {
  font-size: 1.3rem;
  width: 93%;
  margin: 0 auto;
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
</style>
