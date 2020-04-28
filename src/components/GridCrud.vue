<template>
    <div id="demo">
        <table border='1' width='80%' style='border-collapse: collapse;' class="center">
            <thead>


            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>Skills</th>
                <th>Email</th>
                <th>Status</th>

            </tr>

            </thead>
            <tbody>

            <tr v-for="(model,key) in this.model" v-bind:key="key" >
                <td>{{ model.id }}</td>
                <td>{{ model.name }}</td>
                <td>{{ model.age }}</td>
                <td>{{ model.skills }}</td>
                <td>{{ model.email}}</td>
                <td>{{ model.status}}</td>

            </tr>

            </tbody>
        </table>

    </div>
</template>
<script>
    // register the grid component
    export default {
        // template: "#grid-template",

        props:
            ['model']


    }
</script>
<style>
    table {
        font-family: 'Open Sans', sans-serif;
        width: 750px;
        border-collapse: collapse;
        border: 3px solid #44475C;
        margin: 10px 10px 0 10px;

    }

    table th {
        text-transform: uppercase;
        text-align: center;
        background: #44475C;
        color: #FFF;
        padding: 8px;
        min-width: 30px;
    }

    table td {
        text-align: center;
        padding: 8px;
        border-right: 2px solid #7D82A8;
    }
    table td:last-child {
        border-right: none;
    }
    table tbody tr:nth-child(2n) td {
        background: #D4D8F9;

    }
    table.center {
        margin-left:auto;
        margin-right:auto;
    }
</style>