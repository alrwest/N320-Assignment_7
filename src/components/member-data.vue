<template>
    <card-template>
        <card-header>
            <h2> {{ name }}</h2>
            <h3 @click="filterByRole"> {{ role }}</h3>
        </card-header>
        <card-detail>
            <div v-if="showDetails">
                <p> {{ team }} </p>
                <p> {{ phone }} </p>
                <p> {{ email }} </p>
            </div>
        <div class="member-buttons">
            <buttons-util @click="toggleMemberDetails"> {{ showDetails ? "Hide":"Show" }} Details
            </buttons-util>
            <buttons-util @click ="joinTeam"> Join </buttons-util>
        </div>
        </card-detail>
        
    </card-template>
</template>

<script>
export default {
    components: { 

    },
    data() {
        return {
            showDetails: false,
        }
    },
    props: {
        name: {
            type: String,
            required: true
        },
        team: {
            type: String,
        },
        role: {
            type: String,
            required: true
        },
        phone: String,
        email: String,
    },
    methods: {
        toggleMemberDetails() {
            //console.log("Clicked.." + this.showDetails);
            this.showDetails = !this.showDetails;
        },

        joinTeam() {
            console.log("name:" + this.name);
            this.$emit("join-team", this.name);
        },
        filterByRole() { 
        console.log("clicked!:", this.member.role);
        this.$emit('filter-by-role', this.member.role);
    }
    },
}

</script>

<style>

    .member-buttons {
            width: 350px;
            display: flex;
            justify-content: space-between;
            margin: 20px;
        }


</style>