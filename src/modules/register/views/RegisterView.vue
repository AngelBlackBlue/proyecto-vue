<script setup lang="ts">
import { Form, Field, ErrorMessage } from 'vee-validate'; 
import { schema } from '../schemas/validationSchema';
import { useRegisterStore } from '../store/registerStore';
import { ref } from 'vue';

const registerStore = useRegisterStore();
const name = ref('');
const email = ref('');
const onSubmit = () => {
  registerStore.saveRegister(name.value, email.value);
   console.log('form sent');
}
</script>

<template>
  <div>
    <h2>Register</h2>
    <Form :validation-schema="schema" @submit="onSubmit">
      <div class="form-group">
        <label for="name">Name:</label>
        <Field v-model="name" type="text" name="name" id="name" placeholder="enter your name" />
        <ErrorMessage name="name" />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <Field v-model="email" type="email" name="email" id="email" placeholder="enter your email" />
        <ErrorMessage name="email" />
      </div>
      <div class="form-group">
          <button type="submit">Register</button>
      </div>
    </Form>
  </div>
</template>

<style scoped>
.form-group {
    margin-bottom: 10px;
}
</style>
