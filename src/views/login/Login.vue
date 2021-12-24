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
                <input type="email" v-model="email" id="email" />
              </div>
              <div class="form-element">
                <label for="password">Password:</label>
                <input type="password"  v-model="password" id="password" />
              </div>
              <div class="form-element">
                <input type="checkbox" v-model="remember" name="remember" id="remember" />
                <label
                  for="remember"
                  onselectstart="return false"
                  class="pointer"
                  >Remember Me</label
                >
              </div>
              <div class="form-element">
                <button @click.prevent="signIn()" tag="button" class="btn-block" type="submit">Login</button>
                <!-- <router-link to="/dashboard" tag="button" class="btn-block" type="submit">Login</router-link> -->
              </div>
            </div>
          </form>
        </form>
      </div>
    </div>
  </div>
</template>
<script>

import axios from 'axios'
export default {

  data(){
    return {
      email:'',
      password:'',
      remember:'',
      showSpinner:false
    }
  },
  methods:{
    trigger() {
      this.$refs.sendReq.click()
    },
    signIn(){

       const vm = this;
          //  vm.$store.commit("SET_SPINNER", true);
       axios
        .post(process.env.VUE_APP_API_URL+"/login",{
          email: this.email,
          password: this.password
        })
        .then((response) => {
          console.log('data::',response.data);
          console.log('data::',response.data.error);
          if(response.data.token){
              const token = response.data.token
            localStorage.setItem('token', token)
              vm.$store.commit("SET_AUTH_TOKEN", response.data.token);
              // vm.$store.commit("SET_SPINNER", false);
              vm.$store.commit("SET_USER", response.data.user);
              vm.$toast.success("Login Successfully", {
                position: "top-right",
                closeButton: "button",
                icon: true,
                rtl: false,
              });
                  // vm.$store.commit('SET_SPINNER',false);
            window.location.href =process.env.VUE_APP_URL+'dashboard' 
          }
            
             vm.$toast.error(response.data.error, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          
          
          // vm.$router.push({ name: "Dashboard" });

        })
        .catch((errors) => {
         
          if(errors.response.data){
            this.$toast.error(errors.response.data.message, {
            position: "top-right",
            closeButton: "button",
            icon: true,
            rtl: false,
          });
          }
          var err =''
          // {  console.log('errors.response.data',errors.response.data)
          // if(errors.response.data.message =='Login Time Expire'){
          //   // console.log('errors.response.data',errors.response.data.message)
          //   // localStorage.setItem('token', null)
          // }}
          // if(errors.response.data.errors.email){
          //   err+=errors.response.data.errors.email
          // }
          // if(errors.response.data.errors.password){
          //   err+=errors.response.data.errors.password
          // }
          
            
          // if(errors)
          // this.$toast.error(err, {
          //   position: "top-right",
          //   closeButton: "button",
          //   icon: true,
          //   rtl: false,
          // });
            // vm.$store.commit('SET_SPINNER',false);
        });
    },
    sendTo(url){
      window.open(url,'_blank');
    }
  },
  created(){
    //  this.$store.commit('SET_SPINNER',false);
  }
};
</script>

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
