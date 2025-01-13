<template>
    <div class="card">
        <q-carousel class="custom-round" v-model="slide" 
            swipeable animated autoplay="true" control-color="white" infinite navigation arrows height="350px">
            <q-carousel-slide :name="1" class="column no-wrap flex-center" img-src="/public/1.jpg">
                <div class="absolute-bottom-left text-subtitle2 text-white q-pa-md name-container full-width" >
                    <div class="text-h6">John Doe Perez</div>
                    <div class="text-caption">Web Developer</div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="2" class="column no-wrap flex-center" img-src="/public/2.jpg">
                <div class="absolute-bottom-left text-subtitle2 text-white q-pa-md name-container full-width" >
                    <div class="text-h6">John Doe Perez</div>
                    <div class="text-caption">Web Developer</div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="3" class="column no-wrap flex-center" img-src="/public/3.jpg">
                <div class="absolute-bottom-left text-subtitle2 text-white q-pa-md name-container full-width" >
                    <div class="text-h6">John Doe Perez</div>
                    <div class="text-caption">Web Developer</div>
                </div>
            </q-carousel-slide>
            <q-carousel-slide :name="4" class="column no-wrap flex-center" img-src="/public/4.jpg">
                <div class="absolute-bottom-left text-subtitle2 text-white q-pa-md name-container full-width" style="">
                    <div class="text-h6">John Doe Perez</div>
                    <div class="text-caption">Web Developer</div>
                </div>
            </q-carousel-slide>
        </q-carousel>


    </div>
</template>

<script>
export default {
    name: 'profCard',
    data() {
        return {
            slide: 1
        }
    }
}
</script>
<style scoped>
.card {
    position: relative;
    width: 100%;
    height: 350px;
    background-color: #000;
    display: flex;
    flex-direction: column;
    justify-content: end;

    gap: 12px;
    border-radius: 8px;
    cursor: pointer;
}

.card::before {
    content: '';
    position: absolute;
    inset: 0;
    left: -3px;
    margin: auto;
    width: 101.5%;
    height: 355px;
    border-radius: 10px;
    background: linear-gradient(-45deg, #f87b14 0%, #ff0000 100%);
    z-index: -10;
    pointer-events: none;
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.card::after {
    content: "";
    z-index: -1;
    position: absolute;
    inset: 0;
    background: linear-gradient(-45deg, #f87b14 0%, #ff0000 100%);
    transform: translate3d(0, 0, 0) scale(0.95);
    filter: blur(20px);
}

.heading {
    font-size: 20px;
    text-transform: capitalize;
    font-weight: 700;
}

.card p:not(.heading) {
    font-size: 14px;
}

.card p:last-child {
    color: #e81cff;
    font-weight: 600;
}

.card:hover::after {
    filter: blur(30px);
}

.card:hover::before {
    transform: rotate(-90deg) scaleX(0.6) scaleY(1.7);
}
.name-container{
    background: linear-gradient(to bottom, rgba(0,0,0,0), rgba(0,0,0,0.8))
}
.custom-round{
    border-radius: 8px !important;
}
</style>