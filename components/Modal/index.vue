<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

defineProps<{ doctor: DoctorDTO }>();
const emits = defineEmits(['close']);

const closeModal = () => {
    emits('close');
};
</script>

<template>
    <div class="modal-backdrop" role="dialog" aria-labelledby="modal-title" aria-modal="true">
        <div class="modal-content">
            <slot></slot>
            <button @click="closeModal" class="btn-close">Cerrar</button>
        </div>
    </div>
</template>
