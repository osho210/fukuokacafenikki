export default{
    methods: {
        handleResize: function () {
            if (window.innerWidth <= 550) {
                this.showMobileActive = true
                this.showPcActive = false
            } else {
                this.showMobileActive = false
                this.showPcActive = true
            }
        }
    }
}
