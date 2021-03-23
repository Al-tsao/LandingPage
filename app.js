new Vue({
  el: '#app',
  data: {
    RA: true,
    BD: false,
    DT: false,
    WD: false,
  },
  methods: {
    ClickRA() {
      this.RA = true;
      this.BD = false;
      this.DT = false;
      this.WD = false;
    },
    ClickBD() {
      this.RA = false;
      this.BD = true;
      this.DT = false;
      this.WD = false;
    },
    ClickDT() {
      this.RA = false;
      this.BD = false;
      this.DT = true;
      this.WD = false;
    },
    ClickWD() {
      this.RA = false;
      this.BD = false;
      this.DT = false;
      this.WD = true;
    }
  }
})