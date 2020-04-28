<template>
    <div id="app">
        <CrudForm />

    </div>
</template>

<script>

    import CrudForm from './components/CrudForm.vue';


    export default {
        name: 'App',
        components: {
            CrudForm,

        },
        data() {
            return {
            }
        }
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