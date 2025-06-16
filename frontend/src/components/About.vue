<template>
      <!-- Help start  -->
  <section id="help" class="py-5"
    style="background: linear-gradient(270deg, #1A242F 0.01%, rgba(26, 36, 47, 0.00) 100%);">
    <div class="container-lg my-5">

      <div class="row d-flex justify-content-between align-items-center">

        <div class="col-md-6">
          <div class="image-holder d-flex">
            <img :src="aboutImage" class="img-fluid" alt="about_us" loading="lazy">
          </div>
        </div>

        <div class="col-md-6">
          <div class="text-content ps-md-5 mt-4 mt-md-0">
            <h2 class="text-capitalize">About Us</h2>
            <p>We are an innovative online learning platform dedicated to making quality education accessible to everyone, anywhere. Our expert-led courses are designed to help learners gain in-demand skills, advance their careers, and achieve personal growth—at their own pace and convenience.</p>
            <a href="index.html" class="btn btn-primary btn-lg">Get In Touch</a>
          </div>
        </div>


      </div>
    </div>
  </section>
</template>
<script setup>
import aboutImage from '@/assets/images/group.png'
</script>
