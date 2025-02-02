export default {
    name: 'img_url',
    methods: {
        generateImgUrl(filename) {
            if (process.env.NODE_ENV === 'development') {
                 return `./public/${filename}`
            } 
              return `./${filename}`
        }
    }
}

