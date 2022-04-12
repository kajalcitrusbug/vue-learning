const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: Math.random(),
          name: "kajal Jansari",
          phone: "9687209116",
          email: "kajal@localhost.com",
        },
        {
          id: Math.random(),
          name: "Jaimina pandhi",
          phone: "8849828596",
          email: "jaimina@localhost.com",
        },
      ],
    };
  },
});
app.component("friends-contact", {
  template: `<li>
          <h2>{{friend.name}}</h2>
          <button @click='toggeldetails'>{{detailsAreVisible?'Hide':'Show'}} Details</button>
          <ul v-if='detailsAreVisible'>
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
          </ul>
        </li>`,
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: Math.random(),
        name: "kajal Jansari",
        phone: "9687209116",
        email: "kajal@localhost.com",
      },
    };
  },
  methods: {
    toggeldetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
  },
});
app.mount("#app");
