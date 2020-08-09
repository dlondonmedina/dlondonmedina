<template>
  <section class="hero has-text-centered">
    <div class="container">
      <div class="columns is-centered">
        <div class="column">
          <img id="avatar" src="@/assets/avatar.png" />
          <h1
            class="has-text-light is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile"
          >Dylan Medina, PhD</h1>
          <h2 class="has-text-grey-light is-size-4-desktop">Teacher, Developer &amp; Writer</h2>
        </div>
      </div>
      <div class="columns is-centered">
        <div class="column is-narrow">
          <a href="https://github.com/dlondonmedina/">
            <font-awesome-icon class="social-icon" :icon="['fab', 'github']" size="2x" />
          </a>
        </div>
        <div class="column is-narrow">
          <a href="https://twitter.com/Dlondonmedina">
            <font-awesome-icon class="social-icon" :icon="['fab', 'twitter']" size="2x" />
          </a>
        </div>
        <div class="column is-narrow">
          <a href="https://www.linkedin.com/in/dlondonmedina/">
            <font-awesome-icon class="social-icon" :icon="['fab', 'linkedin']" size="2x" />
          </a>
        </div>
        <div class="column is-narrow">
          <a href="mailto:dylan@dylanmedina.com">
            <font-awesome-icon class="social-icon" :icon="['fas', 'envelope']" size="2x" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeLanding"
};
</script>
<style lang="scss">
@import "../assets/main.scss";

#avatar {
  max-height: 200px;
}
.hero {
  background-color: $color-primary-0;
  min-height: 600px;
  padding-top: 5em;
}
.social-icon {
  color: $color-primary-1;
}
</style>