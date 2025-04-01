

<template>

    <div class="main-nav">
        <header>
            <img :src="require('@/assets/AmericanSoundImage.png')" alt="American Sound Image">
        </header>

        <div class="sub-nav">
          <!-- <button @click="setactivePage('AudioPage')">Audio</button>
          <button @click="setactivePage('VideoPage')">Video</button> -->

          <router-link to="/audio">Audio</router-link>
          <router-link to="/video">Video</router-link>
        </div>


        

    </div>



    
</template>


<script>
export default {
   emits: ['SetViewingPage'],
  methods: 
  {
    setactivePage(page)
    {
        console.log('emitting active page to:', page);
        this.$emit('SetViewingPage', page);
    }
  }
};
</script>


<style scoped>

.main-nav
{
    background-color: #333;
    height: 300px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}

header img
{
    width: 200px;
    height: 100px;
}

a 
{
  text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

a:hover,
a:active ,
a.router-link-active
{
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}


</style>