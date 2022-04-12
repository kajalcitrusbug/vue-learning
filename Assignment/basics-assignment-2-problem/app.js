const app = Vue.createApp({
  data() {
    return {
      output: "",
      confireOutput: "",
    };
  },
  methods: {
    showAlert() {
      console.log("ok");
      alert("show alert");
    },
    setOutput(e) {
      this.output = e.target.value;
    },
    setConfireOutput() {
      this.confireOutput = this.output;
    },
  },
});
app.mount("#assignment");
