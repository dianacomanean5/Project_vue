<template>
    <div id="app">
        <GridCrud
                :users="gridData"></GridCrud>
        <CrudForm :schema="schema" :model="model" :options="formOptions"/>

    </div>
</template>


<script>

    import CrudForm from './components/CrudForm.vue';
    import GridCrud from "./components/GridCrud";
    import Vue from 'vue';
    import VueFormGenerator from 'vue-form-generator';
    import 'vue-form-generator/dist/vfg.css';
    import Vuetify from 'vuetify'
    import 'vuetify/dist/vuetify.min.css'
    // import ModelClass from './ModelClass.js'

    Vue.use(VueFormGenerator);
    Vue.use(Vuetify);


    export default {
        name: 'App',
        components: {
            GridCrud,
            CrudForm,

        },
        data() {
            return {
                model: {
                    id: 1,
                    name: 'Maria',
                    age: '18',
                    skills: ["HTML5", "Javascript", "CSS3", "VueJS"],
                    email: 'maria@yahoo.com',
                    status: true
                },
                schema: {
                    fields: [
                        {
                            type: "input",
                            inputType: "text",
                            label: "ID",
                            model: "id",
                            readonly: true,
                            featured: false,
                            disabled: true
                        },
                        {
                            type: 'input',
                            inputType: 'text',
                            label: 'Name',
                            model: 'name',
                            placeholder: 'Your name',
                            featured: true,
                            required: true,
                            validator: VueFormGenerator.validators.string
                        },
                        {
                            type: "input",
                            inputType: "number",
                            label: "Age",
                            model: "age",
                            min: 18,
// validator: VueFormGenerator.validators.number
                        },
                        {
                            type: "checklist",
                            label: "Skills",
                            model: "skills",
                            multi: true,
                            required: true,
                            multiSelect: true,
                            values: ["HTML5", "Javascript", "CSS3", "CoffeeScript", "AngularJS", "ReactJS", "VueJS"]
                        },
                        {
                            type: 'input',
                            inputType: 'email',
                            label: 'E-mail',
                            model: 'email',
                            required: true,
                            placeholder: 'User\'s e-mail address',
                            validator: VueFormGenerator.validators.email
                        },
                        {
                            type: "switch",
                            label: "Status",
                            model: "status",
                            multi: true,
                            readonly: false,
                            featured: false,
                            disabled: false,
                            default: true,
                            textOn: "Active",
                            textOff: "Inactive"
                        }
                    ]
                },
                formOptions: {
                    validateAfterLoad: true,
                    validateAfterChanged:
                        true
                },
                gridColumns: ["id", "name", "age", "skills", "email", "status"],
                gridData: [
                    {id: 0, name: "Chuck ", age: 12, skills: "html", email: "aana@mail.ro", status: "true"},
                    {id: 1, name: "Bruce ", age: 27, skills: "css", email: "ana@mail.ro", status: "true"},

                ]

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