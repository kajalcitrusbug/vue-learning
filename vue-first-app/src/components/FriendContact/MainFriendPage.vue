<template>
  <section>
    <header>
      <h1>My Friend</h1>
    </header>
    <life-cycle></life-cycle>
    <add-contact @add-contact-data="addFriendContact"></add-contact>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-fav="friend.isFav"
        @toggel-fav="toggleFavStatus"
        @delete-friend="deleteFriend"
      ></friend-contact>
    </ul>
  </section>
</template>

<script>
import FriendContact from "./FriendContact.vue";
import AddContact from "./NewFriend.vue";
export default {
  name: "MainFriendPage",
  components: {
    FriendContact,
    AddContact,
  },
  data() {
    return {
      friends: [
        {
          id: Math.random(),
          name: "kajal Jansari",
          phone: "9687209116",
          email: "kajal@localhost.com",
          isFav: false,
        },
        {
          id: Math.random(),
          name: "Jaimina pandhi",
          phone: "8849828596",
          email: "jaimina@localhost.com",
          isFav: false,
        },
      ],
    };
  },
  methods: {
    toggleFavStatus(fId) {
      const identifiedFriend = this.friends.find((friend) => friend.id === fId);
      identifiedFriend.isFav = !identifiedFriend.isFav;
      console.log("identifiedFriend", identifiedFriend);
    },
    addFriendContact(fName, fPhone, fEmail) {
      console.log(`Name`, fName);
      console.log(`fPhone`, fPhone);
      console.log(`fEmail`, fEmail);
      const newFriendObject = {
        id: Math.random(),
        name: fName,
        phone: fPhone,
        email: fEmail,
        isFav: false,
      };
      this.friends.push(newFriendObject);
    },
    deleteFriend(fId) {
      const filterData = this.friends.filter((item) => item.id !== fId);
      console.log(`filterData`, filterData);
      this.friends = filterData;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
