<template>
      
<section id="contact" class="py-5">
  <div class="container-lg my-5">
    
    <!-- Main row for columns -->
    <div class="row g-5 justify-content-between align-items-center">

      <!-- Left Column: Card with Title and Contact Info -->
      <div class="col-md-5">
        <div class="card h-100">
          <div class="card-body p-4 p-md-5">
            
            <!-- Section Title (now inside the card) -->
            <div class="mb-5">
              <h2 class="text-capitalize">Get In Touch</h2>
              <p class="text-muted">We'd love to hear from you. Reach out to us with any questions or to discuss your next project.</p>
            </div>
            
            <!-- Contact Details -->
            <div class="contact-details">
              <div class="d-flex align-items-center mb-4">
                <div class="icon-holder me-3">
                  <i class="fas fa-map-marker-alt fa-2x text-primary"></i>
                </div>
                <div>
                  <h5 class="mb-0">Address</h5>
                  <p class="text-muted mb-0">{{ companyInfoStore.companyInfo.address }}</p>
                </div>
              </div>
              <div class="d-flex align-items-center mb-4">
                <div class="icon-holder me-3">
                  <i class="fas fa-phone fa-2x text-primary"></i>
                </div>
                <div>
                  <h5 class="mb-0">Phone</h5>
                  <a href="tel:+11234567890" class="text-decoration-none text-muted">{{ companyInfoStore.companyInfo.phone_1 }}, {{ companyInfoStore.companyInfo.phone_2 }} </a>
                </div>
              </div>
              <div class="d-flex align-items-center mb-4">
                <div class="icon-holder me-3">
                  <i class="fas fa-envelope fa-2x text-primary"></i>
                </div>
                <div>
                  <h5 class="mb-0">Email</h5>
                  <a href="mailto:contact@yourwebsite.com" class="text-decoration-none text-muted">{{ companyInfoStore.companyInfo.email }}</a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <!-- Right Column: Contact Form (Unchanged) -->
      <div class="col-md-6">
        <form>
          <div class="row">
            <div class="col-md-6 mb-3">
              <label for="firstName" class="form-label">First Name</label>
              <input type="text" class="form-control" id="firstName" placeholder="John" required>
            </div>
            <div class="col-md-6 mb-3">
              <label for="lastName" class="form-label">Last Name</label>
              <input type="text" class="form-control" id="lastName" placeholder="Doe" required>
            </div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email address</label>
            <input type="email" class="form-control" id="email" placeholder="name@example.com" required>
          </div>
          <div class="mb-3">
            <label for="subject" class="form-label">Subject</label>
            <input type="text" class="form-control" id="subject" placeholder="Subject of your message">
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea class="form-control" id="message" rows="5" placeholder="Your message here..." required></textarea>
          </div>
          <button type="submit" class="btn btn-primary btn-lg w-100">Send Message</button>
        </form>
      </div>

    </div>
  </div>
</section>
</template>

<script setup>
import aboutImage from '@/assets/images/group.png';
import {useCompanyInfoStore} from "@/stores/company_info.js";
import {onMounted} from "vue";

const companyInfoStore = useCompanyInfoStore();
onMounted(()=>{
  companyInfoStore.getCompanyInfo();
});
</script>
