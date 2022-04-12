const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  watch: {
    result() {
      setTimeout(() => {
        this.result = 0;
      }, 5000);
    },
  },
  methods: {
    add5() {
      this.result += 5;
    },
    add1() {
      this.result = this.result + 1;
    },
    getResult() {
      if (this.result <= 37) {
        return "Not there yet";
      } else {
        return "Too much!";
      }
    },
  },
});
app.mount("#assignment");
