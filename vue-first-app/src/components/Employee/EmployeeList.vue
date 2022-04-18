<template>
  <button @click="onConfirm">confirm</button>
  <div><h1>Emplyee List</h1></div>
  <div>
    <table border="1px">
      <tr>
        <td>Name</td>
        <td>Salary</td>
        <td>Age</td>
      </tr>
      <tr v-for="emp in empList" :key="emp.id">
        <td>{{ emp.employee_name }}</td>
        <td>{{ emp.employee_salary }}</td>
        <td>{{ emp.employee_age }}</td>
      </tr>
    </table>
  </div>
</template>
<script>
// import Vue from'vue';
// import VueAxios from 'vue-axios';
import axios from "axios";
// Vue.use(VueAxios,axios)
export default {
  name: "EmployeeList",
  data() {
    return {
      empList: [],
    };
  },
  methods: {
    onConfirm() {
      this.$router.push("/friend");
    },
  },
  mounted() {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((res) => {
        console.log("res", res.data.data);
        this.empList = res.data.data;
      });
  },
};
</script>