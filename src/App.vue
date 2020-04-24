<template>
    <div id="app">
        <CrudForm v-bind:users="users"/>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Vuelidate from 'vuelidate'
    import CrudForm from './components/CrudForm.vue'

    Vue.use(Vuelidate);
    import {required, minLength, maxLength} from 'vuelidate/lib/validators'

    export default {
      name: 'App',
      components: {
        CrudForm
      },
      data() {
        return {
          users: [{
            id: 0,
            name: 'Maria',
            age: '30',
            city: 'Sibiu',
            email: 'isabela@yahoo.com',
            number: '0740051205'
          }]
        }
      },
      validations: {
        name: {
          required: true,
          type: String
        },
        age: {
          required: true,
          minLength: minLength(1),
        },
        city: {
          required,

        },
        email: {
          required,
          message: "Email must be name@example.com"
        },
        number: {
          required,
          maxLength: maxLength(20)
        }
      },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>