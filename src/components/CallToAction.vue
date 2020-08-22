<template>
    <div class="cta modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <article class="message is-dark">
                <div class="message-header">
                    <p>{{ msg.title}}</p>
                    <button class="delete is-large" aria-label="close" @click="close"></button>
                </div>
                <div class="message-body has-text-centered">
                    {{ msg.text }}
                    <div class="columns is-mobile is-centered">
                    <div class="card is-half">
                        <ul>
                            <li v-for="l in msg.links"><a :href="l.link" target="_blank" style="text-decoration: none;">{{l.text}}</a></li>
                        </ul>     
                    </div>
                    </div>
                </div>
            </article>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.card {
    margin-top: 1rem;
}
</style>
<script>
export default {
    name: 'CallToAction',
    mounted() {
        setTimeout(() => {
            this.close()
        }, 30000);
    },
    props: {
        msg: Object
    },
    methods: {
        close() {
            this.$emit('close');
        }
    }
}
</script>
