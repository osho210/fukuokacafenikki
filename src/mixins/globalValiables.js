export default{
    data () {
        return {
        showMobileActive: {},
        showPcActive: {}
        }
    },
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
    },
    created () {
        window.addEventListener('resize', this.handleResize)
        this.handleResize()
        },
    destroyed () {
        window.removeEventListener('resize', this.handleResize)
    }
}
