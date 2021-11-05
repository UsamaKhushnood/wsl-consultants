<template>
  <div class="login">
    <div class="row position-relative">
      <div class="col-md-5 login-left-side">
        <img
          src="@/assets/logo.png"
          style="filter: invert(1);"
          width="100px"
          class="mt-5 ml-5"
          alt="WSL Consultants"
        />
        <h1 class="mt-4 ml-5 login-heading">
          Let’s get you <br />
          signed-in to your<br />
          Dashboard
        </h1>
        <p class="footer-text">
          Copyright &copy;{{ new Date().getFullYear() }} WSL Consultants. All
          Rights Reserved
        </p>
      </div>
      <div class="col-md-7 login-right-side">
        <form class="signin-form">
          <img src="@/assets/logo.png" width="120px" alt="WSL Consultants" />
          <h1 class="signin-title mt-3 mb-0">
            Sign in to WSL Consultants
          </h1>
          <div class="below-dash"></div>
          <form class="mt-5">
            <div class="form-group">
              <div class="form-element">
                <label for="email">Email:</label>
                <input type="text" id="email" />
              </div>
              <div class="form-element">
                <label for="password">Password:</label>
                <input type="password" id="password" />
              </div>
              <div class="form-element">
                <input type="checkbox" name="remember" id="remember" />
                <label
                  for="remember"
                  onselectstart="return false"
                  class="pointer"
                  >Remember Me</label
                >
              </div>
              <div class="form-element">
                <router-link to="/dashboard" tag="button" class="btn-block" type="submit">Login</router-link>
              </div>
            </div>
          </form>
        </form>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.login {
  .login-left-side {
    height: 100vh;
    background: url("../../assets/images/auth-background.png");
    background-size: cover;
    background-position: 50%;
    color: #fff;
    padding: 20px;
    .login-heading {
      font-size: 3rem;
      font-weight: 700;
      color: var(--warning);
    }
    p.footer-text {
      position: absolute;
      bottom: 15px;
      left: 3rem;
      font-size: 16px;
    }
  }
  .login-right-side {
    .signin-form {
      width: 65%;
      margin: 0 auto;
      height: 100vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      h1 {
        font-weight: 700;
        font-size: 40px;
        color: var(--primary-color);
      }
    }
  }
}
</style>
