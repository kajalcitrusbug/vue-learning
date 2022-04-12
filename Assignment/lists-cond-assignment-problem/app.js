const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enterTask: "",
      isShowList: false,
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.enterTask);
      this.enterTask = "";
    },
    setIsShowList() {
      this.isShowList = !this.isShowList;
    },
  },
});
app.mount("#assignment");
