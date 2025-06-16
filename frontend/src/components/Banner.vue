<template>
  <!-- billboard start  -->
  <section id="billboard">
    <div class="container">
      <div class="row flex-lg-row-reverse align-items-center">
        <div class="col-lg-6">
          <img
            :src="banner"
            class="d-block mx-lg-auto img-fluid"
            alt="Bootstrap Themes"
            width="700"
            height="500"
            loading="lazy"
          />
        </div>

        <div class="col-lg-6">
          <h1 class="text-capitalize lh-2 my-3">Empower Future With Learning</h1>
          <p class="lead">
            Join our online learning platform and access high-quality courses anytime, anywhere. Learn new skills, boost your career, and achieve your goals at your own pace.
          </p>
          <nav class="navbar navbar-expand-lg billboard-nav">
            <div class="container billboard-search p-0">
              <div class="row billboard-row">
                <div class="col-lg-3 billboard-select">
                  <select class="form-select mb-2 mb-lg-0" aria-label="Purpose">
                    <option selected>Purpose</option>
                    <option value="1">Buy</option>
                    <option value="2">Rent</option>
                    <option value="3">Sell</option>
                    <option value="4">Something else here</option>
                  </select>
                </div>
                <div class="col-lg-3 billboard-select">
                  <select class="form-select mb-2 mb-lg-0" aria-label="Location">
                    <option selected>Location</option>
                    <option value="1">Texas</option>
                    <option value="2">Miami</option>
                    <option value="3">Chicago</option>
                    <option value="4">New York</option>
                    <option value="5">Something else here</option>
                  </select>
                </div>
                <div class="col-lg-3 billboard-select">
                  <select class="form-select mb-2 mb-lg-0" aria-label="Type">
                    <option selected>Type</option>
                    <option value="1">House</option>
                    <option value="2">Appartment</option>
                    <option value="3">Villa</option>
                    <option value="4">Loft</option>
                    <option value="5">Bungalow</option>
                    <option value="3">Something else here</option>
                  </select>
                </div>

                <div class="col-lg-3 billboard-btn">
                  <button type="submit" class="btn btn-primary btn-lg billboard-search">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import banner from '@/assets/images/billboard.png'
</script>
