<template>
  <!--About us start  -->
  <section id="about-us">
    <div class="container">
      <div class="row py-lg-5">
        <h2 class="text-capitalize text-center m-0 py-lg-5">Why to choose us</h2>

        <div class="text-center col-lg-4">
          <img
            :src="searchImage"
            class="bd-placeholder-img rounded-circle"
            alt="Bootstrap Themes"
            width="140"
            height="140"
            loading="lazy"
          />
          <h4 class="fw-normal mt-5">Easy to find</h4>
          <p>
            Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam
            pretium amet facilisis.
          </p>
        </div>

        <div class="text-center col-lg-4">
          <img
            :src="priceImage"
            class="bd-placeholder-img rounded-circle"
            alt="Bootstrap Themes"
            width="140"
            height="140"
            loading="lazy"
          />
          <h4 class="fw-normal mt-5">Affordable Prices</h4>
          <p>
            Urna, massa aliqua dui pellentesque. Ac, gravida in. Diam vitae, nec mattis lectus quam
            pretium amet facilisis.
          </p>
        </div>

        <div class="text-center col-lg-4">
          <img
            :src="timeImage"
            class="bd-placeholder-img rounded-circle"
            alt="Bootstrap Themes"
            width="140"
            height="140"
            loading="lazy"
          />
          <h4 class="fw-normal mt-5">Quickly Process</h4>
          <p>
            Ac, gravida in diam vitae, nec mattis lectus quam pretium amet facilisis. Urna, massa
            aliqua dui pellentesque.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import searchImage from '@/assets/images/search.png'
import priceImage from '@/assets/images/price.png'
import timeImage from '@/assets/images/time.png'
</script>
