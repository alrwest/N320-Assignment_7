<template>
    <div class="member-container">
        <slot></slot>
    </div>
</template>
<script>
export default {
    data() {
        return {
            showDetail: false,
        }
    }
}

</script>


<style>
    .member-container {
        max-width: 100%;
        padding: 10px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        border-radius: 30px;
        background-color: #F7F7F8;
        color: #4E5179;
        margin: 20px;
    }
</style>