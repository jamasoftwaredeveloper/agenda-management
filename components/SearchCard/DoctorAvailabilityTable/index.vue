<script setup lang="ts">
import { defineProps } from 'vue'
defineProps<{
    availabilities: Availability[]
}>()

/**
 * Da formato a la hora 'HH:mm:ss' → 'HH:mm'
 */
function formatTime(time: string) {
    return time.slice(0, 5)
}
</script>

<template>
    <h6 class="text-2xl font-semibold text-gray-800">
        Horario
    </h6>
    <table class="min-w-full bg-white rounded-lg overflow-hidden shadow mt-2">
        <thead class="bg-indigo-500 text-white">
            <tr>
                <th class="px-4 py-2 text-left">Día</th>
                <th class="px-4 py-2 text-left">Hora Inicio</th>
                <th class="px-4 py-2 text-left">Hora Fin</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(slot, idx) in availabilities" :key="idx" class="border-t hover:bg-gray-50">
                <td class="px-4 py-2">{{ slot.dayOfWeek }}</td>
                <td class="px-4 py-2">{{ formatTime(slot.startTime) }}</td>
                <td class="px-4 py-2">{{ formatTime(slot.endTime) }}</td>
            </tr>
            <tr v-if="availabilities.length === 0">
                <td colspan="3" class="px-4 py-2 text-center text-gray-500">
                    No hay disponibilidad registrada.
                </td>
            </tr>
        </tbody>
    </table>
</template>


<style scoped>
table {
    border-collapse: collapse;
}

th,
td {
    white-space: nowrap;
}
</style>