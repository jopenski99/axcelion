<template>
    <div class="card full-width q-pa-md" @click="project.url ? openURL(project.url) : null" :title="project.url ? null : 'Sadly this site has not been maintained and can\'t be found anymore'">
        <header class="card-header item-center"  :style="{'background-color': project.backgound_color, borderRadius:'15px'}" >
            <!--  <p>May 3rd 2023</p> -->
            <span class="title">
                <img :src="project.logo" alt="" style="width:150px; height: 100px; object-fit: contain;">
            </span>
        </header>
        <div class="card-author">
            <a class="author-avatar" href="#">
                <span>
            
                    <img :src="project.company.logo_url" width="40px" style="border-radius:50%; margin-top:5px;"/>
                </span></a>
            <svg class="half-circle" viewBox="0 0 106 57">
                <path d="M102 4c0 27.1-21.9 49-49 49S4 31.1 4 4"></path>
            </svg>
            <div class="author-name">
                <div class="author-name-prefix">{{project.name}}</div>
                <div class="author-company">{{project.company.name}}</div> {{ project.location}}
            </div>
        </div>
        <div class="tags full-width flex justify-center">
           <span v-for="tag in project.techs" :key="tag" class="tag" >
            {{tag}}
           </span>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ProjectCard',
    props: {
        project: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            // Define your data properties here
        };
    },
    methods: {
        openURL(url) {
            window.open(url, '_blank');
        },
    },
    computed: {
        // Define your computed properties here
    },
};
</script>

<style scoped>

.card {
    margin:5px;

    display: flex;
    position: relative;
    flex-direction: column;
    height: 315px;
    
    min-width: 200px;
    padding: 1.5rem 1rem;
    border-radius: 16px;
    background: #303030;
   
    transition: .2s;
    font-family: 'Inter', sans-serif;
}

.card:hover {
    transform: translateY(-0.4rem);
    border:#1976d2 solid 2px;
}

.card-author {
    position: relative;
    display: grid;
    grid-template-columns: 75px 1fr;
    align-items: center;
    
}

.author-name {
    color: #7a7a8c;
    font-size: 0.7rem;
}

.author-name-prefix {
    color: #1976d2;
    font-weight: 600;
    font-size: 0.8rem;
}

.author-avatar span {
    display: block;
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background: #f2f2f2;
    margin: 16px 7px;
  
}
.author-company{
    font-size: 0.9rem;
    font-weight: 600;
}
.half-circle {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 48px;
    fill: none;
    stroke: #1976d2;
    stroke-width: 8;
    stroke-linecap: round;
}

.card-header {
    margin-bottom: 5px;
    color: #7a7a8c;
}

.card-header p {
    font-size: 14px;
    margin: 0 0 1rem;
    color: #7a7a8c;
    border-radius:15px;
}

.card-header .title {
    font-size: 25px;
    margin: .25rem 0 auto;
    cursor: pointer;
    font-family: 'Arial Black', sans-serif;
}

.card-header .title:hover {
    background: linear-gradient(90deg, #1976d2, #e52e71);
    text-shadow: none;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.tags {
    margin: 1rem 0 2rem;
    padding: .5rem 0 1rem;
    line-height: 2;
    margin-bottom: 0;
}

.tags span {
    font-style: normal;
    font-weight: 700;
    color: #7a7a8c;
    text-transform: uppercase;
    font-size: .66rem;
    border: 3px solid #28242f;
    border-radius: 2rem;
    padding: .1rem .85rem .1rem;
    margin:2px;
    position: relative;

}

.tags span:hover {
    background: linear-gradient(90deg, #1668bb, #30b6ce);
    text-shadow: none;
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
    background-clip: text;
    border-color: white;
}
</style>
