<template>
    <div>
        <div class="container" id="app">
            <div class="panel panel-default">
                <div class="panel-heading">Form</div>
                <div class="panel-body">
                    <vue-form-generator :schema="schema" :model="model" :options="formOptions"></vue-form-generator>
                    <br>
                    <v-btn color="primary" fab small dark onClick="save();">Save</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    import Vue from 'vue';
    import VueFormGenerator from 'vue-form-generator';
    import 'vue-form-generator/dist/vfg.css';
    import Vuetify from 'vuetify'
    import 'vuetify/dist/vuetify.min.css'
    Vue.use(VueFormGenerator);
    Vue.use(Vuetify);


    export default {
        name: 'CrudForm',
        props: ['schema','model','formOptions'],
        components: {
            "vue-form-generator": VueFormGenerator.component,
        },
        data() {
            return {

            }

        },
        methods:
            {
                save() {
                    for (let i = 0; i < this.model.length; i++) {
                        this.model.forEach(name=>
                            sessionStorage.setItem(name, JSON.stringify(this[name])));
                        // let age = sessionStorage.getItem('age');
                        // let skills = sessionStorage.getItem('skills');
                        // let email = sessionStorage.getItem('email');
                        // let status = sessionStorage.getItem('status');
                    }

                  //  console.log(data);
                }
            }
    }
</script>
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }

    html {
        font-family: Tahoma, serif;
        font-size: 14px;
    }

    body {
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
        font-size: 14px;
        line-height: 1.42857143;
        color: #333;
    }

    pre {
        overflow: auto;
    }

    pre .string {
        color: #885800;
    }

    pre .number {
        color: blue;
    }

    pre .boolean {
        color: magenta;
    }

    pre .null {
        color: red;
    }

    pre .key {
        color: green;
    }

    h1 {
        text-align: center;
        font-size: 36px;
        margin-top: 20px;
        margin-bottom: 10px;
        font-weight: 500;
    }

    fieldset {
        border: 0;
    }

    .panel {
        margin-bottom: 20px;
        background-color: #fff;
        border-radius: 4px;
        -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        box-shadow: 0 1px 1px rgba(0, 0, 0, .05);
        border-color: #ddd;
    }

    .panel-heading {
        color: #333;
        background-color: #f5f5f5;
        border-color: #ddd;

        padding: 10px 15px;
        border-bottom: 1px solid transparent;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }

    .panel-body {
        padding: 15px;
    }

    .field-checklist .wrapper {
        width: 100%;
    }

</style>
