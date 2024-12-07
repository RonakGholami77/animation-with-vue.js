new Vue({
  el: "#app",
  data: {
    isAnim: false,
    buttonText: "Start Animation",
    leftPosition: 0,
    direction: 1,
    intervalId: null,
  },
  methods: {
    toggleAnim: function () {
      if (this.isAnim) {
        this.buttonText = "Start Animation";
        clearInterval(this.intervalId);
        // this.leftPosition = 0;
      } else {
        this.buttonText = "Pause Animation";
        this.intervalId = setInterval(() => {
          this.leftPosition += this.direction * 7;
          if (this.leftPosition >= 300 || this.leftPosition <= 0) {
            this.direction *= -1;
          }
        }, 20);
      }
      this.isAnim = !this.isAnim;
    },
  },
});
