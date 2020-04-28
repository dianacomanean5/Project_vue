<template>
    <div id="app">

        <GridCrud :data="gridData" :columns="gridColumns"></GridCrud>
        <CrudForm/>
    </div>
</template>

<script>

    import CrudForm from './components/CrudForm.vue';
    import GridCrud from "./components/GridCrud";

    export default {
        name: 'App',
        components: {
            CrudForm,
            GridCrud

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