<template>
  <li>
    <h2>{{ name }} {{ isFav ? "(Favroit)" : "" }}</h2>
    <button @click="toggeldetails">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggelFav">Toggle fav</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
    <button @click="$emit('delete-friend',id)">Delete</button>
  </li>
</template>
<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFav"],
  props: {
    name: String,
    id: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: {
      type: String,
      required: true,
    },
    isFav: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  // emits: ["toggel-fav"],
  emits: {
    "toggel-fav": (id) => {
      if (id) {
        return true;
      } else {
        return false;
      }
    },
  },
  data() {
    return {
      detailsAreVisible: false,
      // friendIsFav: this.isFav,
    };
  },
  methods: {
    toggeldetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggelFav() {
      this.$emit("toggel-fav", this.id);
      // this.friendIsFav = !this.friendIsFav;
    },
  },
};
</script>