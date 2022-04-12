const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
    setConfirmedName() {
      this.confirmedName = this.name;
    },
    setName(e, lasName) {
      this.name = e.target.value + lasName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;
    },
    submitForm() {
      alert("submit Data");
    },
  },
});

app.mount("#events");
