



<template>
  <main>
    <navigation-buttons class="pinned-to-top" @SetViewingPage="setThePage">
      
    </navigation-buttons>

    <component :is="activePage"></component>





  </main>

</template>


<script>
import NavigationButtons from './components/Navigation/NavigationComp.vue'
import VideoPage from './components/Video/VideoPage.vue'
import AudioPage from './components/Audio/AudioPage.vue'

export default 
{
  components: 
  {
    NavigationButtons,
    VideoPage,
    AudioPage
  },
  data() 
  {
    return {
      activePage: 'AudioPage'
    }
  },
  methods:
  {
    setThePage(page)
    {
      console.log('Setting active page to:', page);
      this.activePage = page;
    }
  }
}
</script>




<style>

*
{
  box-sizing: border-box;
}

main
{
  /* background-color: #f1a80a; */
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.pinned-to-top
{
  position: fixed;
  top: 0;
  z-index: 1000; 
}

button
{
    text-decoration: none;
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  border: none;
  border-radius: 5px;
}

.active
{
    color: #f1a80a;
    border-color: #f1a80a;
    background-color: #1a037e;
}
</style>
