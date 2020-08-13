<template>
    <div class="home-contact columns is-centered">
        <div class="card column is-half">
            <h1 class="title">Contact Me</h1>
            <fieldset :disabled="tripped">
            <form id="contact-form" class="contact-form" @submit.prevent="sendMail">
                <div class="field">
                    <label class="label" for="msg-name"><h2 class="title is-4">Name</h2></label>
                    <div class="control">
                        <input class="input" type="text" name="msg-name" v-model="contactFormData.name" required>
                    </div>
                </div>
                <div class="field">
                    <label class="label" for="msg-email"><h2 class="title is-4">Email</h2></label>
                    <div class="control">
                        <input class="input" type="email" name="msg-email" v-model="contactFormData.email" required>
                    </div>
                </div>
                <div class="field">
                    <label class="label" for="msg-human"><h2 class="title is-4">Is fire hot or cold?</h2></label>
                    <div class="control">
                        <div class="select">
                            <select name="msg-human" v-model="contactFormData.question" required>
                                <option value="none" selected>Select an answer</option>
                                <option value="hot">Hot</option>
                                <option value="cold">Cold</option>
                                <option value="banana">Banana</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="field">
                    <label class="label" for="msg-message"><h2 class="title is-4">Message</h2></label>
                    <div class="control">
                        <textarea class="textarea" name="msg-message" v-model="contactFormData.message" required></textarea>
                    </div>
                </div>
                <div class="hny">
                    <label for="hny">Please leave this field blank.</label>
                    <input type="text" name="hny" v-model="contactFormData.hiddenField">
                </div>
                <div class="form-result field">
                    <p class="alert alert-success" v-if="success && !error">Message sent successfully.</p>
                    <p class="alert alert-error" v-if="!success && error">{{ this.errorMessage }}</p>
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
            </fieldset>
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
.alert {
    padding:0 10px;
}
.alert-success {
    color:#3be249;
}
.alert-error {
    color: #ff2121;
}
.hny {
    display: none;
}
</style>
<script>
export default {
    name:'HomeContact',
    data: function () {
        return {
            contactFormData: {
                name: '',
                email: '',
                message: '',
            },
            success: false,
            error: false,
            tripped: false,
            errorMessage: ''
        }
    },
    methods: {
        sendMail: function () {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.contactFormData.email) 
                && this.contactFormData.question == 'hot'
                && !this.contactFormData.hiddenField) {
                const url = 'https://us-central1-dylanmedina-c3abd.cloudfunctions.net/sendEmailCF';

                const {name, email, message} = this.contactFormData;
                const payload = {name, email, message};
                fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(payload)
                })
                    .then(() => {
                        this.success = true;
                        this.resetForm();
                    })
                    .catch(() => {
                        this.error = true;
                        this.errorMessage = 'Failed to send message.'
                    })
            } else {
                this.error = true;
                this.errorMessage = 'Something went wrong. Try again later.';
                this.tripped = true;
            }
        },
        resetForm: function () {
            this.contactFormData = {
                name: '',
                email: '',
                message: '',
            };
        }
    }
}
</script>