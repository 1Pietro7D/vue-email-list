const countdown = 10;
const app = new Vue({
  el: "#app",
  data: {
    emails: [],
    telephoneNumbers: [],

    loading: true,
  },
  mounted() {
    for (let index = 0; index < countdown; index++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          console.log(response);
          const { status, data } = response;
          if (status === 200) {
            this.emails.push(data.response);
          }
        });
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/phone")
        .then((response) => {
          console.log(response);
          const { status, data } = response;
          if (status === 200) {
            const number = data.response.split(" x");
            this.telephoneNumbers.push(number[0]);
          }
          if (index == countdown - 1) {
            this.loading = false;
          }
        });
    }
  },
  methods: {},
});
