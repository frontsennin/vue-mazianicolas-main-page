<template>
    <div class="skill-box">
        <strong class="title">{{ label }}</strong>
        <SkillBar v-for="(skill, index) in skillList" :key="index" :label="skill.name" :value="skill.knowledge"
            :barBg="skill.bg" />
    </div>
</template>

<script>
import SkillBar from './SkillBar'

export default {
    name: 'SkillBox',
    props: [
        'label',
        'skillList'
    ],
    components: {
        SkillBar
    }
}
</script>