<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';
import type { DoctorDTO } from '@/types/types';
import DoctorAvailabilityTable from './DoctorAvailabilityTable.vue';

defineProps<{ doctor: DoctorDTO }>();
const emits = defineEmits<{ close: () => void }>();

const closeModal = () => {
    emits('close');
};
</script>

<template>
    <div class="modal-backdrop" role="dialog" aria-labelledby="modal-title" aria-modal="true">
        <div class="modal-content">
            <div class="flex justify-center items-center bg-gray-100 p-4">
                <img src="./doctor.png" alt="Doctor"
                    class="w-48 h-48 object-cover object-center rounded-t-sm mx-auto" />
            </div>
            <p><strong> {{ doctor.firstName }} {{ doctor.lastName }}</strong></p>
            <p class="text-gray-500">{{ doctor.specialty }}</p>
            <p class="text-gray-500">{{ doctor.clinicAddress }}</p>
            <p class="text-gray-500">Teléfono: {{ doctor.phoneNumber }}</p>
            <p class="text-gray-500">Costo de cita: {{ doctor.billing.totalAmount }}</p>
            <DoctorAvailabilityTable :availabilities="doctor.DoctorAvailabilities" />
            <button @click="closeModal" class="btn-close">Cerrar</button>
        </div>
    </div>
</template>
