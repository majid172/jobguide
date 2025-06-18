<script setup></script>
<template>
  <section id="about-us" class="my-5">
    <div class="container">
      <div class="row py-lg-5">
        <h2 class="text-capitalize text-start m-0 py-lg-5"><slot name="heading">Default Heading</slot></h2>

        <!-- Card 1 -->
        <slot/>
        <!-- <div class="text-center col-lg-4 col-md-6 mb-4" >
          <div class="d-flex align-items-center p-4 rounded" style="background-color: #1e293b; color: #f1f5f9;">
          </div>
        </div> -->
      </div>
    </div>
  </section>
</template>
