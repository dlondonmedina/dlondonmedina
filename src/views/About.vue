<template>
  <div class="about">
      <section class="first">
        <div class="columns">
          <div class="column is-6 is-offset-1">
            <div class="card">
            <h1 class="title">I am a digital humanist working on the border of technology and culture.</h1>
            <p>As a teacher, researcher, developer and writer, I am interested in exploring complex relationship between technology and culture. I have worked for the last four years helping non-traditional and underrepresented students at Seattle University in a Digital Technology and Cultures program explore social science, philosophy, composition and software development. I've also worked to help bridge the digital divide as volunteer teacher and writing consultant for the EchoX program. My current passion in teaching is exploring the potential of online education and education in extended reality. In 2019, I was awarded a grant to apply pedagogical principles to virtual reality.</p>
          </div>
          </div>
          <div class="column">
            <figure class="image is-center is-flex is-horizontal-center">
              <img src="@/assets/profile.jpg" alt="Picture of me." class="is-rounded profl" style="max-width: 350px; max-height: 350px;">
            </figure>
          </div>
        </div>
      </section>
      <section class="second">
        <div class="columns">
          <div class="column is-3 is-offset-1">
            <div class="flip-card">
              <div class="flip-card-inner">
                <div class="flip-card-front">
                  <figure class="image">
                    <img src="@/assets/code-profile.jpg" alt="Photo by Markus Spiske from Pexels">
                  </figure>
                </div>
                <div class="flip-card-back card">
                  <h1 class="title">Credit:</h1>
                  <p>Photo by <a href="https://www.pexels.com/@markusspiske">Markus Spiske</a> from Pexels</p>
                </div>
              </div>
            </div>
          </div>
          <div class="column is-6 is-offset-1">
            <div class="card">
              <h1 class="title">I solve problems with technology</h1>
              <p>I started developing as a computer specialist during graduate school. There, I taught myself HTML, CSS, Javascript and PHP, and I had the opportunity to learn several frameworks. I learned that software development is not simply about building things, but about solving problems with code. At the University of Washington, I applied that approach to the problem of teaching writing, and with two colleagues, I secured $135k in grant funding to develop and test our prototypes. Currently, I am interested in developing software that can identify and counter false information and propaganda bots in social media. I formalized this training with a graduate certificate equivalent to a bachelor's degree in Computer Science from Seattle University.</p>
            </div>
          </div>
        </div>
      </section>
      <section class="third">
        <div class="columns">
          <div class="column is-5 is-offset-1">
            <div class="card">
              <h1 class="title">I am an expert in Writing and Transfer</h1>
              <p>While I'm fascinated by many things and have a broad variety of experiences, my PhD is in Writing Studies. My dissertation research proposed a new theoretical framework for understanding how learners acquire knowledge and skills and bring those to bear on new, unfamiliar situation (e.g. how do students apply with they learned in English 101 in a future history class at the university). I have spent several years writing in the content marketing industry vastly increasing traffic to a number of different startups' websites. I also provide private instruction and writing consultation. <br> Besides being a huge nerd, I also enjoy climbing, running, and spending time with my wife and Cavalier King Charles Spaniel, Bruno.</p>
            </div>
          </div>
          <div class="column">
            <div class="is-flex is-horizontal-center">
            <iframe width="400" height="250" src="https://www.youtube-nocookie.com/embed/mwCYIUgN40o" frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </section>

    </div>
</template>
<script>
export default {
  name: 'About'
}
</script>
<style lang="scss">
@import "../assets/main.scss";
section {
  padding: 5em 0 5em 0;
  min-height: 500px;
}
.first {
  background-color: $color-primary-0;
}
.third {
  background-color: $color-primary-0;
}
.is-horizontal-center {
  justify-content: center;
}
.profl {
  border: 5px solid $color-primary-1;
}
.flip-card {
  background-color: transparent;
  width: 400px;
  height: 400px;
  perspective: 1000px;
}
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 95%;
  height: 95%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  background-color: $color-primary-0;
}

.flip-card-back {
  transform: rotateY(180deg);
}
</style>