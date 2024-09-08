const recursion = {
    data() {
        return {
            param1: 5,
        }
    },
    methods: {
        factorial(num) {
            if (num == 1) {
                return num;
            }
            else {
                return num * this.factorial(num - 1);
            }
        }
    },
    // etc.
}

export default recursion