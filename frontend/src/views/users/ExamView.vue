<script setup>
import Card from '@/components/Card.vue';
import { useExamStore } from '@/stores/Exams';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const examStore = useExamStore();
const route = useRoute();

onMounted(() => {
    const subject_id = route.params.id;
    if (subject_id) {
        examStore.getExams(subject_id);
    }
});
</script>

<template>
    <Card>
        <template #heading>
            Exams of {{ examStore.subject?.name || 'Loading...' }}
        </template>
        <div v-if="examStore.mcqexams.length > 0 || examStore.writtenexams.length > 0" class="col-lg-12 col-md-6 mb-4">
            <div class="d-flex flex-column flex-md-row align-items-center justify-content-between p-4 rounded shadow-lg"
                style="background: linear-gradient(135deg, #1e293b, #334155); color: #f1f5f9;">
                <!-- Icon or Illustration (optional) -->
                <div class="me-md-4 mb-3 mb-md-0">
                    <i class="bi bi-journal-check display-4 text-success"></i>
                </div>

                <!-- Text Content -->
                <div class="flex-grow-1 text-start">
                    <h4 class="fw-bold text-light mb-2">
                        Exam Status:
                        <span :class="{
                            'text-success': examStore.subject.subcategory.category.free_paid === 'free',
                            'text-warning': examStore.subject.subcategory.category.free_paid === 'paid'
                        }">
                            {{ examStore.subject.subcategory.category.free_paid }} Exam
                        </span>
                    </h4>

                    <p v-if="examStore.subject.subcategory.category.free_paid === 'paid'" class="mb-2 text-light">
                        <strong>Exam Fee:</strong> {{ examStore.subject.subcategory.category.tk }} BDT
                    </p>

                    <!-- Enroll Button -->
                    <div v-if="examStore.subject.subcategory.category.free_paid === 'paid'">
                        <router-link to="#"
                            class="btn btn-outline-primary btn-sm rounded-pill px-4 py-2 fw-semibold shadow-sm">
                            Enroll Category
                        </router-link>
                    </div>
                </div>
            </div>
        </div>

        <div v-else class="text-center col-lg-4 col-md-6 mb-4">
            <Empty />
        </div>

        <div class="text-center col-lg-12 col-md-6 mb-4">
            <div class="align-items-center p-4 rounded" style="background-color: #1e293b; color: #f1f5f9;">

                <div class="text-start">
                    <h6 class="mb-4">MCQ Exams</h6>

                    <div class="row my-2" v-if="examStore.mcqexams" v-for="mcqexam in examStore.mcqexams">
                        <div class="col-lg-6">
                            <div class=" border border-info p-2 rounded">
                                {{ mcqexam.exam_name }}
                            </div>

                        </div>
                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-4">
                                    <div class="border border-primary p-2 rounded text-center">
                                        Exam
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="border border-warning p-2 rounded text-center">
                                        Practice
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="border border-danger p-2 rounded text-center">
                                        Read
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <!-- <router-link :to="{ name: 'subjectToExams', params: { id: exam.id } }"
                        class="text-decoration-none">
                        <h5 class="mb-1 fw-semibold text-light">{{ exam.exam_name }}</h5>
                        <p class="mb-0 text-muted">
                            <i class="bi bi-tags"></i>  Exams
                        </p>
                    </router-link> -->
                </div>
            </div>
        </div>
        <div class="text-center col-lg-12 col-md-6 mb-4">
            <div class="align-items-center p-4 rounded" style="background-color: #1e293b; color: #f1f5f9;">

                <div class="text-start">
                    <h6 class="mb-4">Written Exams</h6>

                    <div v-if="examStore.writtenexams.length > 0" class="row my-2"
                        v-for="writtenexam in examStore.writtenexams">
                        <div class="col-lg-6">
                            <div class=" border border-info p-2 rounded">
                                {{ writtenexam.exam_name }}
                            </div>

                        </div>
                        <div class="col-lg-6">
                            <div class="row">
                                <div class="col-4">
                                    <div class="border border-primary p-2 rounded text-center">
                                        Exam
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="border border-warning p-2 rounded text-center">
                                        Practice
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="border border-danger p-2 rounded text-center">
                                        Read
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div v-else class="text-center col-lg-4 col-md-6 mb-4">
                        <Empty />
                    </div>

                </div>
            </div>
        </div>
    </Card>
</template>
