<template>
  <form @submit.prevent="addContact">
    <div>
      <label>Name </label>
      <input type="text" v-model="enterNameValue" />
    </div>
    <div>
      <label>Phone </label>
      <input type="text" v-model="enterPhoneValue" />
    </div>
    <div>
      <label>Email </label>
      <input type="text" v-model="enterEmailValue" />
    </div>
    <div>
      <button>Submit</button>
    </div>
  </form>
</template>
<script>
export default {
  emits: ["add-contact-data"],
  data() {
    return {
      enterNameValue: "",
      enterPhoneValue: "",
      enterEmailValue: "",
    };
  },
  methods: {
    addContact() {
      console.log(`call1`);
      this.$emit(
        "add-contact-data",
        this.enterNameValue,
        this.enterPhoneValue,
        this.enterEmailValue
      );
      this.enterNameValue = "";
      this.enterPhoneValue = "";
      this.enterEmailValue = "";
    },
  },
};
</script>