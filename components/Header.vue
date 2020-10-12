<template>
  <header
    class="d-flex flex-row mt-5 w-100 align-items-end justify-content-between"
  >
    <nuxt-link to="/" class="logo-container d-flex">
      <div class="align-self-center pb-2 mr-3">
        <svg
          width="31"
          height="31"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M34.9452 33.8906H31.4812V30.4265C31.4812 29.8441 31.009 29.3719 30.4265 29.3719H26.9624V8.96252C26.9624 4.02054 22.9419 0 18 0C13.058 0 9.0375 4.02054 9.0375 8.96252V29.3719H5.57339C4.9909 29.3719 4.51868 29.8441 4.51868 30.4266V33.8906H1.05471C0.472225 33.8906 0 34.3628 0 34.9453C0 35.5278 0.472225 36 1.05471 36H34.9453C35.5278 36 36 35.5278 36 34.9453C36 34.3628 35.5277 33.8906 34.9452 33.8906ZM11.1468 8.96252C11.1468 5.18372 14.2212 2.10938 18 2.10938C21.7788 2.10938 24.8531 5.18372 24.8531 8.96252V29.3719H11.1468V8.96252ZM6.62809 33.8906V31.4812H29.3718V33.8906H6.62809Z"
            fill="white"
          />
        </svg>
      </div>
      <div class="title">Killed By SARS</div>
    </nuxt-link>
    <ul class="d-flex flex-row justify-content-between navigation">
      <li class="">
        <a class="" aria-current="page" href="#">All</a>
      </li>
      <li class="">
        <a class="" href="#">Male</a>
      </li>
      <li class="">
        <a class="" href="#">Female</a>
      </li>
    </ul>
    <div class="d-flex flex-row align-items-end search w-25 mb-3">
      <div class="pr-3 pb-1">
        <svg
          width="15"
          height="15"
          viewBox="0 0 15 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.7204 9.43396H10.0386L9.80274 9.19811C10.6432 8.2247 11.1492 6.95969 11.1492 5.57461C11.1492 2.49571 8.65352 0 5.57461 0C2.49571 0 0 2.49571 0 5.57461C0 8.65352 2.49571 11.1492 5.57461 11.1492C6.95969 11.1492 8.2247 10.6432 9.19811 9.80703L9.43396 10.0429V10.7204L13.7221 15L15 13.7221L10.7204 9.43396ZM5.57461 9.43396C3.4434 9.43396 1.71527 7.70583 1.71527 5.57461C1.71527 3.4434 3.4434 1.71527 5.57461 1.71527C7.70583 1.71527 9.43396 3.4434 9.43396 5.57461C9.43396 7.70583 7.70583 9.43396 5.57461 9.43396Z"
            fill="white"
          />
        </svg>
      </div>
      <input type="text" class="search__input" placeholder="Search by name" />
    </div>
  </header>
</template>

<style scoped>
.container {
  font-family: 'Roboto', sans-serif;
}
.logo-container {
  width: 30%;
}
.nav-item {
  font-family: Roboto;
  font-style: normal;
  font-weight: 300;

  color: #fff;
}
.nav {
  width: 30%;
}
a.nav-link {
  text-decoration: none;
  color: #fff;
  font-size: 20px;
}

.navigation {
  list-style-type: none;
  width: 25%;
}

.navigation li a {
  text-decoration: none;
  color: #fff;
  font-size: 20px;
}

.search {
  border-bottom: 2px solid#C4C4C4;
  padding: 0;
}

.search__input {
  background-color: transparent;
  border: none;
  color: #fff;
  width: 100%;
  box-sizing: border-box;
  font-size: 1.4rem;
}

.search__input:focus {
  outline: none;
}
.title {
  font-size: 40px;
  font-weight: 300;
  font-size: 45px;
  line-height: 53px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
