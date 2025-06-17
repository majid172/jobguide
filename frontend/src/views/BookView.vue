<script setup>
import { onMounted } from "vue";
import { useBookStore } from "@/stores/book.js";
const bookStore = useBookStore();
onMounted(() => {
    bookStore.getBooks();
})
</script>
<template>
    <section id="about-us">
        <div class="container">
            <div class="row py-lg-5">
                <h3 class="text-capitalize text-start m-0 py-lg-5">All Books </h3>

                <div class="row">
                    <div class="col-lg-4 col-md-6 mb-4" v-for="book in bookStore.books" :key="book.id">
                        <div class=" align-items-center p-3 h-100  rounded-3"
                            style="background-color: #1e293b; color: #f1f5f9;">

                            <div class="card-body p-3 text-center d-flex flex-column">
                                <img :src="`/src/assets/${book.image}`" class="img-fluid rounded-3 mx-auto mb-4"
                                    :alt="book.name" style="max-height: 280px; width: auto;">

                                <h5 class="">{{ book.name }}</h5>

                                <div class="mt-auto pt-3">
                                    <hr class="border-secondary opacity-50">
                                    <div class="d-flex justify-content-between align-items-center">
                                        <p class="mb-0 fw-bold fs-5">৳ {{ book.price }}</p>
                                        <router-link to="/" class="btn rounded-pill text-white px-4"
                                            style="background-color: #e6005c;">
                                            Details
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
</template>
