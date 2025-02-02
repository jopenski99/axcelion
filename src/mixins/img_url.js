export default {
    name: 'img_url',
    methods: {
        generateImgUrl(filename) {
            if (process.env.NODE_ENV === 'prod') {
                return `./${filename}`
            } else {
                return `./public/${filename}`
            }
        }
    }
}

