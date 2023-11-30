<template>
    <h2> Team Form </h2>
    <div>
        <!-- getting input for team name-->
        <input v-model="teamName" type="text" />

        <!-- getting role input -->
        <input type="checkbox" id="developer" value="developer" v-model="teamRole">
        <label for="developer">Developer</label>

        <input type="checkbox" id="designer" value="designer" v-model="teamRole">
        <label for="designer">Designer</label>

        <input type="checkbox" id="UXUI" value="UXUI" v-model="teamRole">
        <label for="UXUI">UX/UI</label>
        <button @click="saveTeamName"> Submit </button>
    </div>
    

</template>

<script>

export default {
    data() { 
        return { 
            teamName: ''
        }
    },
    emits:['team-form'],
    methods: {
        submitData() {
            console.log("submit data clicked");
            this.$emit('team-form', this.teamName);
        },
        saveTeamName() {
            console.log("Team Name: ", teamName);

        }
    }
}

</script>