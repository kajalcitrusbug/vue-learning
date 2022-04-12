const app = Vue.createApp({
  data: () => {
    return {
      courceGoalA: "Finish",
      couseGoalB: "Master",
      vueLink: "https://www.google.com",
    };
  },
  methods: {
    outpuGoal: () => {
      const randomNumber = Math.random();
      console.log("randomNumber", randomNumber, this.courceGoalA);
      if (randomNumber < 0.5) {
        return this.courceGoalA;
      } else {
        return this.couseGoalB;
      }
    },
  },
});
app.mount("#user-goal");
