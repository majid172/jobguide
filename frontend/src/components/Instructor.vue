<script setup>
import team1 from '@/assets/images/team1.jpg'
// import team2 from '@/assets/images/team2.jpg'
// import team3 from '@/assets/images/team3.jpg'
// import team4 from '@/assets/images/team4.jpg'
import {onMounted} from "vue";
  import {useTeacherStore} from "@/stores/teachers.js";
const teacherStore = useTeacherStore();
onMounted(()=>{
  teacherStore.getTeacher();
})
</script>
<template>
  <!-- Residence start  -->
  <section id="residence">
    <div class="container my-5 py-5">
      <h2 class="text-capitalize m-0 py-lg-5">Popular Instructor</h2>

      <div class="swiper-button-next residence-swiper-next residence-arrow"></div>
      <div class="swiper-button-prev residence-swiper-prev residence-arrow"></div>

      <div class="swiper residence-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="teacher in teacherStore.teachers">
            <div class="card">
              <a href="index.html"><img :src="team1" class="card-img-top" alt="image" /></a>
              <div class="card-body p-0">
                <router-link to="/">
                  <h5 class="card-title pt-4">{{ teacher.name }}</h5>
                </router-link>
                <p class="card-text">{{ teacher.job_title }}</p>

                <div class="card-text">
                  <!-- <ul class="d-flex">
                    <li class="residence-list"> <img src="images/bed.png" alt="image"> 4 bed</li>
                    <li class="residence-list"> <img src="images/bath.png" alt="image"> 2 bath</li>
                    <li class="residence-list"> <img src="images/square.png" alt="image"> 1203 Sqft.</li>
                  </ul> -->
                </div>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div class="residence-btn">
        <a href="index.html" class="btn btn-primary btn-lg my-5">View All Properties</a>
      </div>
    </div>
  </section>
</template>
