<template>
    <div>
        <h2> {{ name }}</h2>
        <h3> {{ role }}</h3>
        <button> Show/Hide Details </button>
        <button> Join</button>
        <div>
            <p> {{ phone }} </p>
            <p> {{ email }} </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    }, // props:['name', 'role', 'phone','email']
    props: {
        name: {
            type: String,
            required: true
        },
        role: {
            type: String,
            required: true
        },
        phone: String,
        email: String,
    }
}

</script>