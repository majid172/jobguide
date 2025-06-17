<script setup>
import { onMounted } from "vue";
import {useCompanyInfoStore} from "@/stores/company_info.js";

const companyInfoStore = useCompanyInfoStore();
onMounted(()=>{
  companyInfoStore.getCompanyInfo();
});
</script>
<template>
    <section id="about-us">
        <div class="container">
            <div class="row py-lg-5">
                <h3 class="text-capitalize text-start m-0 py-lg-5">Privacy & Policy</h3>
                <div class="row">
                    <div class="col-lg-12 col-md-12 mb-4">
                        <div class=" align-items-center p-3 h-100  rounded-3"
                            style="background-color: #1e293b; color: #f1f5f9;">

                            <div class="card-body p-3 d-flex flex-column">

                                <p style="font-size: 14px !important;" v-html="companyInfoStore.companyInfo.privacy_policy"></p>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>