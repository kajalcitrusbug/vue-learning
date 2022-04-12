const app = Vue.createApp({
  data: () => {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
      boxDSelected: false,
      boxESelected: false,
    };
  },
  computed: {
    boxDClasses() {
      return { active: this.boxDSelected };
    },
  },
  methods: {
    boxSelected(type) {
      if (type === "A") {
        this.boxASelected = !this.boxASelected;
      } else if (type === "B") {
        this.boxBSelected = !this.boxBSelected;
      } else if (type === "C") {
        this.boxCSelected = !this.boxCSelected;
      } else if (type === "D") {
        this.boxDSelected = !this.boxDSelected;
      } else if (type === "E") {
        this.boxESelected = !this.boxESelected;
      }
    },
  },
});
app.mount("#styling");
