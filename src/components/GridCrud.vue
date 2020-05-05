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
            <tr v-for="(grid1, key) in this.users" v-bind:key="key">
                <td>{{ grid1.id }}</td>
                <td>{{ grid1.name }}</td>
                <td>{{ grid1.age }}</td>
                <td>{{ grid1.skills }}</td>
                <td>{{ grid1.email}}</td>
                <td>{{ grid1.status}}</td>
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
            ['users']

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
        margin-left: auto;
        margin-right: auto;
    }
</style>