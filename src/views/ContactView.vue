<template>
    <div class="container mt-5">
        <h1>Contact</h1>
        <form @submit.prevent="sendContactForm">
            <div class="form-group">
                <label for="name">Name:</label>
                <input type="text" id="name" class="form-control" v-model="form.fullName" required />
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" id="email" class="form-control" v-model="form.email" required />
            </div>
            <div class="form-group">
                <label for="message">Message:</label>
                <textarea id="message" class="form-control" v-model="form.message" required></textarea>
            </div>
            <button type="submit" class="btn btn-success mt-3 w-100" :disabled="!checkForm">Send Message</button>
        </form>
    </div>
    <div class="container mt-5 text-center">
        <a href="https://www.instagram.com/front.sennin/"><i class="bi bi-instagram m-3"></i></a>
        <a href="https://www.linkedin.com/in/nicolas-mazia-233840263/"><i class="bi bi-linkedin m-3"></i></a>
        <a href="https://www.youtube.com/@frontsennin?app=desktop"><i class="bi bi-youtube m-3"></i></a>
        <a href="https://www.tiktok.com/@frontsennin"><i class="bi bi-tiktok m-3"></i></a>
        <a href="https://wa.me/5511943469442"><i class="bi bi-whatsapp m-3"></i></a>
    </div>
</template>

<script>
import { useToast } from 'vue-toast-notification';

export default {
    name: 'ContactView',
    data() {
        return {
            form: {
                fullName: '',
                email: '',
                message: '',
            }
        };
    },
    computed: {
        checkForm() {
            return this.form.fullName.length > 2 && this.form.email.length > 10 && this.form.message.length > 2
        }
    },
    methods: {
        sendContactForm() {
            const toast = useToast();
            toast.open({
                message: 'Contact sent successfully! Will be answered as soon as possible.',
                type: 'success',
                duration: 3000,
                position: 'top'
            });
        }
    },
};
</script>

<style scoped>
.container {
    max-width: 600px;
}

a {
    text-decoration: none;
    color: #fff;
}
</style>