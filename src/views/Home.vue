<template>
  <div class="home">
    <HomeLanding />
    <HomeSkills :items="this.items" />
    <HomeContact />
  </div>
</template>

<script>
import HomeLanding from "../components/HomeLanding.vue";
import HomeSkills from "../components/HomeSkills.vue";
import HomeContact from '../components/HomeContact.vue';

export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          skill: "Teaching",
          link: "#teaching",
          i: { set: "fas", n: "user-graduate" },
          text: "Mentoring students towards growth, empowerment, and justice.",
          more: [
            "Writing & Rhetoric",
            "Digital Humanities",
            "Social Science",
            "Coding & Web Dev"
          ]
        },
        {
          skill: "Developing",
          link: "#developing",
          i: { set: "fas", n: "code-branch" },
          text:
            "Solving problems with code in the fields of communication and education.",
          more: [
            "Frontend: HTML/CSS/Javascript, Gatsby",
            "Backend: PHP, SQL, C#",
            "Frameworks: Flask, Django, Vue, Wordpress",
            "Infrastructure: Apache, Firebase, Azure, AWS"
          ]
        },
        {
          skill: "Writing",
          link: "#writing",
          i: { set: "fas", n: "feather-alt" },
          text:
            "Composing texts that entertain, create knowledge, and move people to action.",
          more: [
            "Social Science and Education Research",
            "Content Writing",
            "Storytelling & Poetry",
            "Instruction & Consulting"
          ]
        }
      ]
    };
  },
  components: {
    HomeLanding,
    HomeSkills,
    HomeContact
  }
};
</script>