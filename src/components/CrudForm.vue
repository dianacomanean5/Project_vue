<template>
    <div>
        <div class="container" id="app">
            <div class="panel panel-default">
                <div class="panel-heading">Form</div>
                <div class="panel-body">
                    <vue-form-generator :schema="schema" :users="users" :options="formOptions"></vue-form-generator>
                    <br>
                    <input  type="button" onClick="save();" value="Save">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import VueFormGenerator from 'vue-form-generator';
    import 'vue-form-generator/dist/vfg.css';
    Vue.use(VueFormGenerator);

    export default {
        name: 'Model',
        props: [],
        components: {
            "vue-form-generator": VueFormGenerator.component,
        },
        data() {
            return {
                users: {
                    id: 1,
                    name: 'Maria',
                    age: '30',
                    city: ['Sibiu', 'Cluj', 'Bucuresti'],
                    email: 'isabela@yahoo.com',
                    status: true
                },
                schema: {
                    fields: [
                        {
                            type: 'input',
                            inputType: 'text',
                            label: 'ID',
                            users: 'id',
                            autoIncrement: true,
                            primaryKey: true
                        },
                        {
                            type: 'input',
                            inputType: 'text',
                            label: 'Name',
                            users: 'name',
                            placeholder: 'Your name',
                            featured: true,
                            required: true,
                            validator: VueFormGenerator.validators.string
                        },
                        {
                            type: 'input',
                            inputType: 'text',
                            label: 'Age',
                            users: 'age',
                            min: 18,
                            placeholder: 'Your age',
                            required: true,
                            validator: VueFormGenerator.validators.number
                        },
                        {
                            type: 'select',
                            label: 'City',
                            users: 'city',
                            values: ['Sibiu', 'Bucuresti', 'Cluj', 'Brasov']
                        },
                        {
                            type: 'input',
                            inputType: 'email',
                            label: 'E-mail',
                            users: 'email',
                            required: true,
                            placeholder: 'User\'s e-mail address',
                            validator: VueFormGenerator.validators.email
                        },
                        {
                            type: 'checkbox',
                            label: 'Status',
                            users: 'status',
                            default: true
                        }
                    ]
                },
                formOptions: {
                    validateAfterLoad: true,
                    validateAfterChanged:
                        true,
                    validateAsync:
                        true
                }

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

</style>
