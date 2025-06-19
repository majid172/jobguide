<script setup>
import Card from '@/components/Card.vue';
import Empty from '@/components/Empty.vue';
import { useSubjectStore } from '@/stores/subjects';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

const subjectStore = useSubjectStore();
const route = useRoute();
onMounted(()=>{
    const sub_cat_id = route.params.id;
    subjectStore.getSubject(sub_cat_id);
});
</script>
<template>
    <Card>
        <template #heading>Subjects of {{ subjectStore.subcategory.name }}</template>
        <div v-if="subjectStore.subjects.length > 0" class="text-center col-lg-4 col-md-6 mb-4" v-for="subject in subjectStore.subjects"
            :key="subject.id">
            <div class="d-flex align-items-center p-4 rounded" style="background-color: #1e293b; color: #f1f5f9;">
                <img :src="`/src/assets/images/${subject.image}`" class="rounded-circle me-3" :alt="subject.name"
                    width="50" height="50" />
                <div class="text-start">
                    <router-link :to="{ name: 'subjectToExams', params: { id: subject.id } }"
                        class="text-decoration-none">
                        <h5 class="mb-1 fw-semibold text-light">{{ subject.name }}</h5>
                        <p class="mb-0 text-muted">
                            <i class="bi bi-tags"></i> {{ subject.exams.length }} Exams
                        </p>
                    </router-link>
                </div>
            </div>
        </div>
        <div v-else class="text-center col-lg-4 col-md-6 mb-4" >
            <Empty/>
        </div>
    </Card>
</template>