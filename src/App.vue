<template>
  <div id="app">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="container">
        <div class="navbar-brand">
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            @click="isOpen = !isOpen"
            v-bind:class="{'is-active': isOpen}"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
          <div class="navbar-end">
            <div class="navbar-item">
              <router-link to="/">Home</router-link>
            </div>
            <div class="navbar-item">
              <router-link to="/about">About</router-link>
            </div>
            <div class="navbar-item">
              <router-link to="/projects">Work</router-link>
            </div>
            <div class="navbar-item">
              <router-link to="/blog">Blog</router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <router-view></router-view>
    <div class='container'>
    <footer class="footer has-text-centered">
      <div class="columns is-centered">
        <div class="column is-one-quarter">
          <h2>Dylan Medina &copy;2020</h2>
        </div>
        <div class="column is-half">
          <div class="columns is-centered">
            <div class="column is-narrow">
              <a href>
                <font-awesome-icon class="social-icon" :icon="['fab', 'github']" size="2x" />
              </a>
            </div>
            <div class="column is-narrow">
              <a href>
                <font-awesome-icon class="social-icon" :icon="['fab', 'twitter']" size="2x" />
              </a>
            </div>
            <div class="column is-narrow">
              <a href>
                <font-awesome-icon class="social-icon" :icon="['fab', 'linkedin']" size="2x" />
              </a>
            </div>
            <div class="column is-narrow">
              <a href>
                <font-awesome-icon class="social-icon" :icon="['fas', 'envelope']" size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div class="column has-text-centered is-one-quarter">
          <h2>Thanks for visiting!</h2>
        </div>
      </div>
    </footer>
    </div>
    
  </div>
</template>

<script>
export default {
  name: "app",
  data: function() {
    return {
      isOpen: false
    };
  }
};
</script>
<style lang="scss">
@import "./assets/main.scss";
.navbar {
  padding-top: 1em;
}
.navbar-item a {
  color: $color-primary-2;
  font-size: 1.2rem;
}
</style>
