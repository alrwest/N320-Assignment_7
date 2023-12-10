<template>
    <div class = "form-styles">
        <div> 
            <h2> Team Form</h2> 
        </div>
        <div>
             <!-- getting input for team name-->
            <input id = "teamInput" v-model="teamName" type="text" placeholder="Enter Team Name.." />
        </div>
       
        <!-- getting role input -->
        <div>
            <input type="checkbox" id="developer" value="developer" v-model="teamRole" @change ="roleFilter">
            <label for="developer">Developer</label>

            <input type="checkbox" id="designer" value="designer" v-model="teamRole" @change ="filteredRoles">
            <label for="designer">Designer</label>

            <input type="checkbox" id="UXUI" value="UXUI" v-model="teamRole" @change ="filteredRoles">
            <label for="UXUI">UX/UI</label>

            <div class="form-submit">
               <buttons-util @click ="saveTeamName"> Submit </buttons-util>
            </div>  
        </div>   
    </div>
    

</template>

<script>

export default {
    data() { 
        return { 
            teamName: '',
            memberName: '',
           
        }
    },
    emits:['team-form',],
    methods: {
        saveTeamName() {
            console.log("team name:" + this.teamName);
            this.$emit('team-form', this.teamName);
        },
        roleFilter(roleName) { 
        console.log("role", roleName);
        this.filteredMembers = this.members.filter((m) => m.members === roleName);
        console.log("filtered by", roleName);
        return this.filteredMembers;
      },
        
        },
        
    }


</script>

<style>
    .form-styles {
        max-width: 100%;
        height: 200px;
        display: flex;
        justify-content: space-evenly;
        align-items: left;
        padding: 10px;
        margin: 20px;
        flex-direction: column;
        border: 2px solid #141313;
        border-radius: 20px;
        background-color: #F7F7F8;
    }

    .form-styles div {
        margin: 10px;
    }

    #teamInput {
        width: 200px;
        border-radius: 5px;
        border-color: #4E5179;
    }

    .form-submit {
        padding-top: 10px;
        padding-left: 60px;
    }

</style>