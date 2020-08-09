<template>
  <div id="app">
    <vue-title :title="'Dylan Medina - ' + $route.name" />
    <CallToAction :msg="this.msg" :class="{'is-active': isModalVisible}" @close="closeModal"/>
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a role="button" @click="showModal"><img class="cta-logo" src="@/assets/blm.png"></a>
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
    </nav>
    <router-view></router-view>
    <footer class="footer has-text-centered">
      <div class="columns is-centered">
        <div class="column is-one-quarter">
          <h2>Dylan Medina &copy;2020</h2>
        </div>
        <div class="column is-half">
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
        <div class="column has-text-centered is-one-quarter">
          <h2>Thanks for visiting!</h2>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import CallToAction from '@/components/CallToAction.vue';

export default {
  name: "app",
  components: {
    CallToAction
  },
  data: function() {
    return {
      isOpen: false,
      isModalVisible: true,
      msg: {
        title: "Black Lives Matter",
        text: "I am very grateful that you have taken the time to visit my website. In this moment, white supremacy and institutional racism can no longer be ignored. Before you continue, I ask that you take a moment to visit and perhaps support one or more of the following organizations working to make Black Lives Matter.",
        links: [
          {text: 'Black Lives Matter', link: 'https://blacklivesmatter.com/'},
          {text: 'BLM Seattle-King County', link: 'https://blacklivesseattle.org/'},
          {text: 'Black Alliance for Justice Immigration', link: 'https://baji.org/'},
          {text: 'Color Of Change', link: 'https://colorofchange.org'},
          {text: 'The Movement for Black Lives', link: 'https://policy.m4bl.org/'},
          {text: 'NAACP LDF', link: 'https://naacpldf.org'},
          {text: 'UndocuBlack Network', link: 'https://undocublack.org/'},
          {text: 'Southern Poverty Law Center', link: 'https://www.splcenter.org/'},
          {text: 'ACLU', link: 'https://www.aclu.org/'}
        ]
      }
    };
  },
  methods: {
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    }
  }
  
};
</script>
<style lang="scss">
@import "./assets/main.scss";
.navbar {
  margin-left: 1rem;
}
.navbar-item a {
  color: $color-primary-2;
  font-size: 1.2rem;
}
.navbar-menu {
  margin-right: 1.5rem;
}
</style>
