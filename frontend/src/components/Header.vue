<script setup>
  import logo from '@/assets/images/logo.png'
import { useLoginStore } from '@/stores/auth/login';
  import {useHeaderStore} from "@/stores/header.js";
  import {onMounted} from "vue";

  const headerStore = useHeaderStore();
  const loginStore = useLoginStore();

  onMounted(()=>{
    headerStore.getCategory();
    headerStore.getCourse();
    loginStore.loadUserFromStorage();
  });
</script>
<template>
  <header id="nav" class="site-header position-fixed text-white bg-dark">
    <nav id="navbar-example2" class="navbar navbar-expand-lg py-2">

      <div class="container ">

        <a class="navbar-brand" href="./index.html">
          <img :src="logo" alt="image">
        </a>


        <button class="navbar-toggler text-white" type="button" data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar2" aria-controls="offcanvasNavbar2" aria-label="Toggle navigation"><ion-icon
            name="menu-outline" style="font-size: 30px;"></ion-icon></button>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar2"
          aria-labelledby="offcanvasNavbar2Label">
          <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasNavbar2Label">Menu</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas"
              aria-label="Close"></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav align-items-center justify-content-end align-items-center flex-grow-1 ">
              <li class="nav-item">
                <router-link to="/" class="nav-link active me-md-4" >Home</router-link>
              </li>
              <li class="nav-item dropdown ">
                <a class="nav-link me-md-4 text-center dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0)" role="button"
                  aria-expanded="false">Categories</a>
                <ul class="dropdown-menu dropdown-menu-dark">
                   <li v-for="item in headerStore.categories">
                    <router-link :to="{ name: 'subcategories', params: { id: item.id } }" class="dropdown-item">{{ item.name }}</router-link>
                  </li>


                </ul>
              </li>
              <li class="nav-item dropdown ">
                <a class="nav-link me-md-4 text-center dropdown-toggle" data-bs-toggle="dropdown" href="javascript:void(0)" role="button"
                  aria-expanded="false">Courses</a>
                <ul class="dropdown-menu dropdown-menu-dark">
                   <li v-for="course in headerStore.course">
                    <router-link to="/" class="dropdown-item">{{ course.name }}</router-link>
                  </li>


                </ul>
              </li>
              <li class="nav-item">
                <router-link to="/" class="nav-link me-md-4">Exam</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/teachers" class="nav-link me-md-4">Teachers</router-link>
              </li>
              <li class="nav-item">
                <router-link to="/books" class="nav-link me-md-4" >Books</router-link>
              </li>
              <li class="nav-item dropdown ">
                <a class="nav-link me-md-4 text-center dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button"
                  aria-expanded="false">Others</a>
                <ul class="dropdown-menu dropdown-menu-dark">
                   <li>
                    <router-link to="/about" class="dropdown-item">About</router-link>
                  </li>
                  <li><router-link to="/contact" class="dropdown-item">Contact</router-link></li>

                  <li><router-link to="/mission-vision" class="dropdown-item">Mission & Vision</router-link>
                  </li>
                  <li><router-link to="/privacy-policy" class="dropdown-item">Privacy & Policy </router-link></li>
                  <li><RouterLink to="/terms-condition" class="dropdown-item">Terms & Conditions</RouterLink></li>


                </ul>
              </li>
<template v-if="!loginStore.credentials?.user">
              <li class="nav-item" >
                <a class="nav-link mx-md-4" href="javascript:void(0)" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign In</a>
              </li>

              <!-- Modal -->
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="tabs-listing mt-4">
                        <nav>
                          <div class="nav nav-tabs d-flex justify-content-center border-0" id="nav-tab" role="tablist">
                            <button class="btn btn-outline-primary text-uppercase me-3 active" id="nav-sign-in-tab"
                              data-bs-toggle="tab" data-bs-target="#nav-sign-in" type="button" role="tab"
                              aria-controls="nav-sign-in" aria-selected="true">Log In</button>
                            <button class="btn btn-outline-primary text-uppercase" id="nav-register-tab"
                              data-bs-toggle="tab" data-bs-target="#nav-register" type="button" role="tab"
                              aria-controls="nav-register" aria-selected="false">Sign Up</button>
                          </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent">
                          <div class="tab-pane fade active show" id="nav-sign-in" role="tabpanel"
                            aria-labelledby="nav-sign-in-tab">
                            <form id="form1" class="form-group flex-wrap p-3" @submit.prevent="loginStore.login">
                              <div class="form-input col-lg-12 my-4">
                                <label for="exampleInputEmail1"
                                  class="form-label fs-6 text-uppercase fw-bold text-black">Email
                                  Address</label>
                                <input type="text" id="exampleInputEmail1" v-model="loginStore.inputField.email" placeholder="Email"
                                  class="form-control ps-3">
                              </div>
                              <div class="form-input col-lg-12 my-4">
                                <label for="inputPassword1"
                                  class="form-label  fs-6 text-uppercase fw-bold text-black">Password</label>
                                <input type="password" id="inputPassword1" v-model="loginStore.inputField.password" placeholder="Password"
                                  class="form-control ps-3" aria-describedby="passwordHelpBlock">
                                <div id="passwordHelpBlock" class="form-text text-center">
                                  <a href="#" class=" password">Forgot Password ?</a>
                                </div>

                              </div>
                             
                              <div class="d-grid my-3">
                                <button class="btn btn-primary btn-lg btn-dark text-uppercase btn-rounded-none fs-6">Log In</button>
                              </div>
                            </form>
                          </div>
                          <div class="tab-pane fade" id="nav-register" role="tabpanel"
                            aria-labelledby="nav-register-tab">
                            <form id="form2" class="form-group flex-wrap p-3 ">
                              <div class="form-input col-lg-12 my-4">
                                <label for="exampleInputEmail2"
                                  class="form-label fs-6 text-uppercase fw-bold text-black">Email
                                  Address</label>
                                <input type="text" id="exampleInputEmail2" name="email" placeholder="Email"
                                  class="form-control ps-3">
                              </div>
                              <div class="form-input col-lg-12 my-4">
                                <label for="inputPassword2"
                                  class="form-label  fs-6 text-uppercase fw-bold text-black">Password</label>
                                <input type="password" id="inputPassword2" placeholder="Password"
                                  class="form-control ps-3" aria-describedby="passwordHelpBlock">
                              </div>
                              <label class="py-3">
                                <!-- <input type="checkbox" required="" class="d-inline"> -->
                                <span class="label-body text-black">I agree to the <a href="#"
                                    class="text-black password border-bottom">Privacy Policy</a>
                                </span>
                              </label>
                              <div class="d-grid my-3">
                                <button
                                  class="btn btn-primary btn-lg btn-dark text-uppercase btn-rounded-none fs-6">Sign
                                  Up</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>


              <li class="nav-item" >
                <a class="btn-medium btn btn-primary" href="javascript:void(0)" data-bs-toggle="modal"
                  data-bs-target="#exampleModal2">Sign Up</a>
              </li>
              <!-- Modal -->
              <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                      <div class="tabs-listing mt-4">
                        <nav>
                          <div class="nav nav-tabs d-flex justify-content-center border-0" id="nav-tab2" role="tablist">
                            <button class="btn btn-outline-primary text-uppercase me-4 " id="nav-sign-in-tab2"
                              data-bs-toggle="tab" data-bs-target="#nav-sign-in2" type="button" role="tab"
                              aria-controls="nav-sign-in2" aria-selected="false">Log In</button>
                            <button class="btn btn-outline-primary text-uppercase active" id="nav-register-tab2"
                              data-bs-toggle="tab" data-bs-target="#nav-register2" type="button" role="tab"
                              aria-controls="nav-register2" aria-selected="true">Sign Up</button>
                          </div>
                        </nav>
                        <div class="tab-content" id="nav-tabContent1">
                          <div class="tab-pane fade " id="nav-sign-in2" role="tabpanel"
                            aria-labelledby="nav-sign-in-tab2">
                            <form id="form3" class="form-group flex-wrap p-3 ">
                              <div class="form-input col-lg-12 my-4">
                                <label for="exampleInputEmail3"
                                  class="form-label fs-6 text-uppercase fw-bold text-black">Email
                                  Address</label>
                                <input type="text" id="exampleInputEmail3" name="email" placeholder="Email"
                                  class="form-control ps-3">
                              </div>
                              <div class="form-input col-lg-12 my-4">
                                <label for="inputPassword3"
                                  class="form-label  fs-6 text-uppercase fw-bold text-black">Password</label>
                                <input type="password" id="inputPassword3" placeholder="Password"
                                  class="form-control ps-3" aria-describedby="passwordHelpBlock">
                                <div id="passwordHelpBlock2" class="form-text text-center">
                                  <a href="#" class=" password">Forgot Password ?</a>
                                </div>

                              </div>
                              <label class="py-3">
                                <input type="checkbox" required="" class="d-inline">
                                <span class="label-body text-black">Remember Me</span>
                              </label>
                              <div class="d-grid my-3">
                                <button class="btn btn-primary btn-lg btn-dark text-uppercase btn-rounded-none fs-6">Log
                                  In</button>
                              </div>
                            </form>
                          </div>
                          <div class="tab-pane fade active show" id="nav-register2" role="tabpanel"
                            aria-labelledby="nav-register-tab2">
                            <form id="form4" class="form-group flex-wrap p-3 ">
                              <div class="form-input col-lg-12 my-4">
                                <label for="exampleInputEmail4"
                                  class="form-label fs-6 text-uppercase fw-bold text-black">Email
                                  Address</label>
                                <input type="text" id="exampleInputEmail4" name="email" placeholder="Email"
                                  class="form-control ps-3">
                              </div>
                              <div class="form-input col-lg-12 my-4">
                                <label for="inputPassword4"
                                  class="form-label  fs-6 text-uppercase fw-bold text-black">Password</label>
                                <input type="password" id="inputPassword4" placeholder="Password"
                                  class="form-control ps-3" aria-describedby="passwordHelpBlock">
                              </div>
                              <label class="py-3">
                                <input type="checkbox" required="" class="d-inline">
                                <span class="label-body text-black">I agree to the <a href="#"
                                    class="text-black password border-bottom">Privacy Policy</a>
                                </span>
                              </label>
                              <div class="d-grid my-3">
                                <button
                                  class="btn btn-primary btn-lg btn-dark text-uppercase btn-rounded-none fs-6">Sign
                                  Up</button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </template>



<template v-else>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle text-capitalize" href="#" data-bs-toggle="dropdown">
                    {{ loginStore.credentials.user.name }}
                  </a>
                  <ul class="dropdown-menu dropdown-menu-dark">
                    <li><router-link to="/dashboard" class="dropdown-item">Dashboard</router-link></li>
                    <li><a href="javascript:void(0)" class="dropdown-item" @click="loginStore.logout">Logout</a></li>
                  </ul>
                </li>
              </template>

            </ul>

          </div>
        </div>


      </div>
    </nav>
  </header>
</template>

