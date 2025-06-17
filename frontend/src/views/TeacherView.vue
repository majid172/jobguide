<script setup>
import { onMounted } from "vue";
import { useTeacherStore } from "@/stores/teachers.js";
const teachersStore = useTeacherStore();
onMounted(() => {
    teachersStore.getTeacher();
})
</script>
<template>
    <section id="about-us">
        <div class="container">
            <div class="row py-lg-5">
                <h3 class="text-capitalize text-start my-5 py-lg-5">Top & Famous Instructor </h3>

                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4" v-for="teacher in teachersStore.teachers" :key="teacher.id">
                        <div class=" align-items-center p-3 h-100  rounded-3"
                            style="background-color: #1e293b; color: #f1f5f9;">

                            <div class="card-body p-3 text-center d-flex flex-column">

                                <img :src="`/src/assets/${teacher.image}`" class="rounded-circle mx-auto mb-3"
                                    :alt="teacher.name" width="80" height="80">
                                <h5 class="">{{ teacher.name }}</h5>
                                <p style="font-size: 18px;">{{ teacher.subject }}</p>
                                <p class="text-secondary" style="font-size: 14px;">{{ teacher.job_title }}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
