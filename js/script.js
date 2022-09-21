console.log("Vue app");
const app = new Vue({
  el: "#app",
  data: {
    emails: [],
    telephoneNumber: [],
    loading: true,
  },
  mounted() {
    for (let index = 0; index < 10; index++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          console.log(response);
          const { status, data } = response;
          if (status === 200) {
            this.emails.push(data.response);
          }
        });
    }
    loading = false;
  },
  methods: {},
});
