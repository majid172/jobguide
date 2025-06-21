<script setup>
import Card from '@/components/Card.vue'
import { useMcqStore } from '@/stores/mcq';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
const mcqStore = useMcqStore();
const route = useRoute();
onMounted(() => {
    const examId = route.params.id;

    mcqStore.getMcq(examId)
});

</script>

<template>
    <Card>
        <template #heading>{{ mcqStore.mcqExam.examInfo.exam_name }}
            ({{ mcqStore.mcqExam.examInfo.mcq_written }})</template>
        <div class="space-y-6 p-4">
            <div v-for="(question, index) in mcqStore.mcqExam.questions" :key="question.id"
                class="bg-dark text-white shadow  rounded-lg p-4 mb-3"
                style="background: linear-gradient(135deg, #1e293b, #334155); color: #f1f5f9;">
                <p class="text-lg font-semibold fs-6 mb-4">
                    {{ index + 1 }} ) {{ question.questions }}
                </p>

                <div class="space-y-2">
                    <label class="flex items-center ms-3 space-x-2 cursor-pointer">
                        <input type="radio" :name="'question_' + question.id" :value="1" v-model="question.selected"
                            class="form-radio text-green-500 focus:ring-green-500 me-1" />
                        <span class="fs-6">{{ question.optn1 }}</span>
                    </label>


                </div>
                <div class="space-y-2">
                    <label class="flex items-center ms-3 space-x-2 cursor-pointer">
                        <input type="radio" :name="'question_' + question.id" :value="2" v-model="question.selected"
                            class="form-radio text-green-500 focus:ring-green-500 me-1" />
                        <span class="fs-6">{{ question.optn2 }}</span>
                    </label>

                </div>
                <div class="space-y-2">
                    <label class="flex items-center ms-3 space-x-2 cursor-pointer">
                        <input type="radio" :name="'question_' + question.id" :value="3" v-model="question.selected"
                            class="form-radio text-green-500 focus:ring-green-500 me-1" />
                        <span class="fs-6">{{ question.optn3 }}</span>
                    </label>


                </div>
                <div class="space-y-2">
                    <label class="flex items-center ms-3 space-x-2 cursor-pointer">
                        <input type="radio" :name="'question_' + question.id" :value="4" v-model="question.selected"
                            class="form-radio text-green-500 focus:ring-green-500 me-1" />
                        <span class="fs-6">{{ question.optn4 }}</span>
                    </label>


                </div>
                <div v-if="question.optn5 && question.optn5.trim() !== ''" class="space-y-2">
                    <label class="flex items-center ms-3 space-x-2 cursor-pointer">
                        <input type="radio" :name="'question_' + question.id" :value="4" v-model="question.selected"
                            class="form-radio text-green-500 focus:ring-green-500 me-1" />
                        <span class="fs-6">{{ question.optn5 }}</span>
                    </label>


                </div>
            </div>
        </div>

    </Card>
</template>
