<template>
   <button class="buttons">
        <slot> Button Util </slot>
   </button>
</template>

<style>
    .buttons {
        width: 150px;
        height: 30px;
        border: 1px solid #4E5179;
        border-radius: 10px;
        background-color: #F7D1B7;
        color: #4E5179;
        cursor: pointer;
    }

    .buttons:hover {
        color: #fff;
        background-color: #4E5179;

    }


</style>