<template>
  <div class="container-fluid m-4">
    <div class="row">
      <div class="col">
        <h1>Skills</h1>
      </div>
    </div>
    <div class="row align-items-center me-5">
      <div class="col-sm-12 col-md-6 col-xl-6">
        <SkillBox :label="'Business Skills'" :skillList="devSkills" />
      </div>
      <div class="col-sm-12 col-md-6 col-xl-6">
        <div class="row">
          <div class="col">
            <SkillBox :label="'Language Skills'" :skillList="languages" />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <SkillBox :label="'Personal Skills'" :skillList="personalSkills" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SkillBox from '@/components/SkillBox';
import { devSkills, languages, personalSkills } from '@/utils/mocks/skills.js';

export default {
  name: 'SkillsView',
  data() {
    return {
      devSkills,
      languages,
      personalSkills
    }
  },
  components: {
    SkillBox
  },
  beforeCreate() {
    devSkills.sort((a, b) => b.knowledge - a.knowledge);
    languages.sort((a, b) => b.knowledge - a.knowledge);
    personalSkills.sort((a, b) => b.knowledge - a.knowledge);
  },
}
</script>