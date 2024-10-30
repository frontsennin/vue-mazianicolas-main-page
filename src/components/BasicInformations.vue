<template>
    <div class="basicinfo-box">
        <div class="row">
            <div class="col-sm-12 col-md-6 col-xl-6 text-info-col">
                <div class="container">
                    <h1>Who's Front Sennin?</h1>
                    <p>
                        Front Sennin is a 28-year-old multifaceted individual with a diverse range of passions and
                        skills. As a dedicated developer, he excels in crafting innovative solutions and tackling
                        complex programming challenges. Outside the coding world, Front is also a committed bodybuilder,
                        channeling his discipline and focus into sculpting his physique to perfection.
                    </p>
                    <p>
                        When he's not coding or at the gym, you can find Front indulging in his love for gaming and geek
                        culture. He's an avid gamer, always on the lookout for the latest and greatest in video games.
                        His geeky interests extend to a deep appreciation for technology, comics, and all things pop
                        culture.
                    </p>
                    <p>
                        Front's heart also beats for football, specifically for Santos Futebol Clube. His loyalty to the
                        team is unwavering, and he never misses a match.
                    </p>
                </div>
                <img :src="gif" class="img-fluid w-100" alt="fs-img">
            </div>
            <div class="col-sm-12 col-md-6 col-xl-6 p-0">
                <img :src="frontImage" class="img-fluid" alt="fs-img">
            </div>
        </div>
    </div>
</template>

<script>

import frontImage from '@/assets/images/fs-img.jpg'
import gif from '@/assets/code.gif'

export default {
    name: "BasicInformations",
    data() {
        return {
            frontImage,
            gif
        }
    }
}
</script>

<style lang="scss">
@import url(./components.scss);
</style>