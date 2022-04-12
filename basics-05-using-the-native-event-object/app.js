const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
    };
  },
  watch: {
    counter(value, oldValue) {
      if (value > 50) {
        this.counter = 0;
      }
    },
  },
  computed: {
    fullname() {
      console.log("running fullname");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
  },
  methods: {
    outputFullName() {
      console.log("running outputFullName");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + this.lastName;
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
