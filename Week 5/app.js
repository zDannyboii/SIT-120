var app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "Danny"
        }
    },
    methods: {
        increase_1: function() {
            this.counter = this.counter + 1;
        },
        decrease_1: function() {
            this.counter = this.counter - 1 ;
        }   
    }
});

app.component("game_1",{
    props: ["player_name"],
    template: "<button v-on:click='game_1 ++'>{{player_name}} Clicked: <br/> {{game_1}}</button>",
    data: function() {
        return {
            game_1: 0,
        }
    }
});