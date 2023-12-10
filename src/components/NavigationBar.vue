import { RouterLink } from 'vue-router';

<template>
    <header>
        <nav>
            <div class = "router">
                <RouterLink to ="/" class ="route"> Home </RouterLink>
                <RouterLink to = "/teams" class ="route"> Teams </RouterLink>
            </div>
        </nav>
    </header>
</template>

<style>
    .router {
        width: 200px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        padding: 5px;
        margin-left: 20px;
    }

    .route {
        width: 100px;
        height: 25px;
        border-radius: 10px;
        background-color: rgb(76, 11, 181);
        color: white;
        border: 1px solid white;
        text-align: center;
        text-decoration: none;
        margin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 5px;
        margin-left: 20px;
        box-shadow: 2px 2px 4px grey;
    }
</style>