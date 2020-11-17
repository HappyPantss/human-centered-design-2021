<!-- view -->
<template>
    <div>
        <h1>My Fave Languages</h1>
        <p>{{ keywords.join(' | ')}}</p>
        <input :value="inputValue" @keyup.alt.enter="processInput($event)" />
    </div>
</template>

<!-- logic -->
<script>
export default {
    data() {
        return {   
            inputValue: "",
            index: 0,
            keywords: []
        };
    },
    methods: {
        processInput(event){
            const value = event.target.value
            this.keywords[this.index] = value;
            this.inputValue = ''
            this.index++
        }
    },
}
</script>

<!-- style -->
<style scoped>

</style>