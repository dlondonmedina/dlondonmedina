<template>
    <div class="homeskills container has-text-centered">
        <div class="columns">
            <div class="column homeskill" v-for="item in this.items">
                <router-link :to="'/projects' + item.link">
                    <div class="card">
                    <font-awesome-icon class="skill-icon" :icon="[item.i.set, item.i.n]" size="6x" />
                    <div class="card-content"><h1 class="title is-4">{{ item.skill }}</h1>
                    <div class="content">
                    <p>{{ item.text }}</p>
                    <ul>
                        <li v-for="v in item.more">{{ v }}</li>
                    </ul>
                    </div>
                    </div>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
@import '../assets/main.scss';
.homeskills {
    padding-top: 2em;
}
.homeskill p, .homeskill li {
    color: $color-primary-2;
}

.homeskill h1 {
    color: $color-primary-0;
}
.skill-icon {
    color: $color-primary-1;
}
.homeskill:hover .skill-icon {
    color: $color-primary-0;
}
.card {
    min-height: 100%;
}
</style>
<script>
export default {
    name: 'HomeSkills',
    props: {
        items: Array
    }
}
</script>
