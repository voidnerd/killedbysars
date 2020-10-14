<template>
  <footer class="footer">
    <!-- <div class="logo-container text-center d-flex mx-auto mt-4">
      <div class="align-self-center mr-3">
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
    </div> -->

    <p class="footer__text mx-auto mt-5">
      “Killed by Sars” is the list of people who have died as a result of police
      brutality in Nigeria. These are people who were killed by the same Police
      Unit (SARS - Special Anti-Robbery Squad ) constituted to protect them.
    </p>
    <p class="footer__text mx-auto mt-4">
      Contributors are Relatives, Friends and Fellow Citizens paying respect to
      those who gave their lives so we can say enough is enough #EndSars. You
      can contribute to this codebase on
      <a href="https://github.com/ndiecodes/killedbysars" target="_blank"
        >github </a
      >, follow us on
      <a href="https://twitter.com/killedbysars" target="_blank">twitter </a>.
    </p>
    <p class="footer__copyright mx-auto">
      Created by
      <a href="https://twitter.com/ndiecodes" target="_blank"> @ndiecodes </a>.
      Designed by
      <a href="https://twitter.com/art_of_osil" target="_blank">
        @art_of_osil
      </a>
    </p>
  </footer>
</template>

<style scoped>
.container {
  font-family: 'Roboto', sans-serif;
}
.footer {
  color: #b5b5b5;
  background: #262d31;
  font-size: 15px;
  margin-top: 50px;
  padding-top: 30px;
  padding-bottom: 50px;
}

.footer__text {
  text-align: center;
  width: 50%;
}

.footer__copyright {
  text-align: center;
  margin-top: 30px;
}

.logo-container {
  width: 300px;
}

.title {
  font-size: 40px;
  font-weight: 300;
  font-size: 40px;
  line-height: 53px;
}

@media screen and (max-width: 767px) {
  .logo-container {
    min-width: 200px;
  }
  .title {
    font-size: 25px;
    line-height: 53px;
  }
  .footer__text {
    width: 90%;
  }
  .footer__copyright {
    width: 90%;
  }
}
</style>
