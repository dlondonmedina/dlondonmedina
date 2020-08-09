<template>
    <div class="home-contact columns is-centered">
        <div class="card column is-half">
            <h1 class="title">Contact Me</h1>
            <form id="contact-form">
                <div class="field">
                    <label class="label" for="name"><h2 class="title is-4">Name</h2></label>
                    <div class="control">
                        <input class="input" type="text" name="name" v-model="name">
                    </div>
                </div>
                <div class="field">
                    <label class="label" for="email"><h2 class="title is-4">Email</h2></label>
                    <div class="control">
                        <input class="input" type="email" name="email" v-model="email">
                    </div>
                </div>
                <div class="field">
                    <label class="label" for="msg"><h2 class="title is-4">Message</h2></label>
                    <div class="control">
                        <textarea class="textarea" name="msg" v-model="message"></textarea>
                    </div>
                </div>
                <div class="field is-grouped">
                    <div class="control">
                        <button class="button is-link">Submit</button>
                    </div>
                    <div class="control">
                        <button class="button is-link is-light">Cancel</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</template>
<style lang="scss">
@import '@/assets/main.scss';
.home-contact {
    background-color: $color-primary-0;
    padding: 4em;
}
.home-contact h1 {
    color: $color-primary-0;
}
.home-contact h2 {
    color: $color-primary-2;
}
.card {
    max-width: 500px;
    padding: 2rem;
}
</style>
<script>
export default {
    name:'HomeContact',
    data() {
        return {
            name: "Your Name",
            email: "Email Address",
            message: ""
        }
    }
}
</script>