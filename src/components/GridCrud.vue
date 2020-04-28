<template>
    <div>
        <table border='1' width='80%' style='border-collapse: collapse;' class="table table-striped table-dark">
            <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>Age</th>
                <th>City</th>
                <th>Email</th>
                <th>Number</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(user,index) in this.users"  v-bind:key="index">
                <td>{{ user.id }}</td>
                <td>{{ user.name }}</td>
                <td>{{ user.age }}</td>
                <td>{{ user.city }}</td>
                <td>{{ user.email}}</td>
                <td>{{ user.number}}</td>

            </tr>

            </tbody>
        </table>
        <button type="button" class="btn btn-primary btn-lg">Add</button>
    </div>
</template>

<script>
    export default {
        name: 'Model',
        props:
            ['users']

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
</style>
