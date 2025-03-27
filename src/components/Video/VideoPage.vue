

<template>
    <main>
            <h1>Video</h1>
            <p>{{dyanmicStringData}}</p>
            <button :class="{active : isActive}" @click="SendDigitalJoinOne">Im a basic Toggle Button</button>
    </main>
</template>


<script>




export default {
    name: 'VideoPage',
    props:
    {

    },
    emits:
    {

    },
    inject:
    {

    },
    components:
    {

    },
    data()
    {
        return {
            isActive: true,
            dyanmicStringData: ''
        }
    },
    methods:
    {
        // SendDigitalJoinOne()
        // {
        //     this.$CrComLib.publishEvent('digital', '11', !this.isActive); 
        // }
    },
    computed:
    {

    },
    watch:
    {

    },
    created()
    {
        // this.$CrComLib.subscribeState('digital', '11', (value) => 
        // {
        //     this.isActive = value;
        // });

        // this.$CrComLib.subscribeState('string', '11, (value) => 
        // {

        //     console.log('Received string:', value);
        //     this.dyanmicStringData = value;
        // });
    }


};
</script>



<style scoped>

main
{
    background-color: purple;
    height: 500px;
    width:100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
}



</style>