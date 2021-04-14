<template>
  <div class="stage">
      <BarChart />
  </div>
</template>

<script>
import BarChart from "./BarChart";

export default {
  name: "Main",
  components: { BarChart },
  props: ["data"],
  updated() {
    console.log("Updated main");
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");

body {
  font-family: "News Cycle", sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #353535;
}

.spacer {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.stage {
  width: 58%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin: 0 auto;
}

.one {
  background-color: white;
  padding: 2rem;
  border-radius: 2rem;
  width: 50%;
  top: 0;
  left: 0;
}

h1 {
  font-family: "Roboto", sans-serif;
  font-size: 2rem;
  color: white;
}

h1.title {
  font-family: "Roboto", sans-serif;
  text-align: center;
  color: white;
  font-size: 25rem;
  margin-top: -10rem;
  margin-left: -4.5rem;
}

a {
  text-decoration: none;
  color: #d8d8d8;
}

a:hover {
  text-decoration: underline;
}

.stage h2 {
  font-family: "Roboto", sans-serif;
  font-size: 4rem;
  color: white;
}

.stage p {
  font-family: "Roboto", sans-serif;
  font-size: 1.4rem;
  color: white;
}

.information {
  padding-bottom: 0.5rem;
}

.wrap {
  height: 100%;
  width: 100%;
  text-align: center;
}

div img {
  height: 40px;
  margin: 0 auto;
  margin-left: -4rem;
}

.wrap img {
  line-height: 60px;
  position: absolute;
  bottom: 50px;
}

.bounce {
  animation-iteration-count: infinite;
  animation-duration: 1.5s;
  animation: bounce 3.6s ease infinite;
  transform-origin: 50% 50%;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  5.55556% {
    transform: translateY(0);
  }
  11.11111% {
    transform: translateY(0);
  }
  22.22222% {
    transform: translateY(-15px);
  }
  27.77778% {
    transform: translateY(0);
  }
  33.33333% {
    transform: translateY(-15px);
  }
  44.44444% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
</style>