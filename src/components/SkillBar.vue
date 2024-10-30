<template>
    <div class="row">
        <div class="col">
            <strong>{{ label }}</strong>
        </div>
    </div>
    <div class="row">
        <div class="col">
            <div class="progress" role="progressbar" :aria-valuenow="value" aria-valuemin="0" aria-valuemax="100">
                <div :class="barClasses" :style="barWidth"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SkillBar',
    props: {
        label: {
            type: String,
            required: true
        },
        barBg: {
            type: String,
            required: false,
            default: 'bg-info'
        },
        value: {
            type: Number,
            required: true
        }
    },
    computed: {
        barWidth() {
            return {
                width: `${this.value}%`
            }
        },
        barClasses() {
            return `progress-bar overflow-visible ${this.barBg}`
        }
    }
}
</script>