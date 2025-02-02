<template>
    <div class="wrapper">
        <div class="wrapper">
          <span class="letter letter1">C</span>
          <span class="letter letter2">o</span>
          <span class="letter letter3">m</span>
          <span class="letter letter4">i</span>
          <span class="letter letter5">n</span>
          <span class="letter letter6">g</span>
          <span class="letter letter7"> </span>
          <span class="letter letter8">S</span>
          <span class="letter letter9">o</span>
          <span class="letter letter10">o</span>
          <span class="letter letter11">n</span>
          <span class="letter letter12"> </span>
          <span class="letter letter13">:</span>
          <span class="letter letter14">{{')'}}</span>
         
        </div>
      </div>
      
</template>
<script>
export default {
    name:"ComingSoonLoader"
}
</script>
<style scoped>
.wrapper {
    min-height: 3rem;
    min-width: 20rem;
    font-size: 2rem;
    position: relative;
    overflow: hidden;
    mask-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 1) 30%,
      rgba(0, 0, 0, 1) 70%,
      rgba(0, 0, 0, 0)
    );
    font-family: monospace;
  }
  
  .letter {
    width: 1ch;
    position: absolute;
    top: 50%;
    transform: translate(0px, -50%);
    left: 100%;
    animation: scroll 3.5s linear infinite;
  }
  
  @keyframes scroll {
    to {
      left: -1ch;
    }
  }
  .letter1 {
    animation-delay: calc(3.5s / 24 * (24 - 1) * -1);
  }
  .letter2 {
    animation-delay: calc(3.5s / 24 * (24 - 2) * -1);
  }
  .letter3 {
    animation-delay: calc(3.5s / 24 * (24 - 3) * -1);
  }
  .letter4 {
    animation-delay: calc(3.5s / 24 * (24 - 4) * -1);
  }
  .letter5 {
    animation-delay: calc(3.5s / 24 * (24 - 5) * -1);
  }
  .letter6 {
    animation-delay: calc(3.5s / 24 * (24 - 6) * -1);
  }
  .letter7 {
    animation-delay: calc(3.5s / 24 * (24 - 7) * -1);
  }
  .letter8 {
    animation-delay: calc(3.5s / 24 * (24 - 8) * -1);
  }
  .letter9 {
    animation-delay: calc(3.5s / 24 * (24 - 9) * -1);
  }
  .letter10 {
    animation-delay: calc(3.5s / 24 * (24 - 10) * -1);
  }
  .letter11 {
    animation-delay: calc(3.5s / 24 * (24 - 11) * -1);
  }
  .letter12 {
    animation-delay: calc(3.5s / 24 * (24 - 12) * -1);
  }
  .letter13 {
    animation-delay: calc(3.5s / 24 * (24 - 13) * -1);
  }
  .letter14 {
    animation-delay: calc(3.5s / 24 * (24 - 14) * -1);
  }
  .letter15 {
    animation-delay: calc(3.5s / 24 * (24 - 15) * -1);
  }
  .letter16 {
    animation-delay: calc(3.5s / 24 * (24 - 16) * -1);
  }
  .letter17 {
    animation-delay: calc(3.5s / 24 * (24 - 17) * -1);
  }
  .letter18 {
    animation-delay: calc(3.5s / 24 * (24 - 18) * -1);
  }
  .letter19 {
    animation-delay: calc(3.5s / 24 * (24 - 19) * -1);
  }
  .letter20 {
    animation-delay: calc(3.5s / 24 * (24 - 20) * -1);
  }
  .letter21 {
    animation-delay: calc(3.5s / 24 * (24 - 21) * -1);
  }
  .letter22 {
    animation-delay: calc(3.5s / 24 * (24 - 22) * -1);
  }
  .letter23 {
    animation-delay: calc(3.5s / 24 * (24 - 23) * -1);
  }
  .letter24 {
    animation-delay: calc(3.5s / 24 * (24 - 24) * -1);
  }
  
</style>