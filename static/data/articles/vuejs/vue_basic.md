Actually, vue's document is quite nice le.   
But, let me make a brief version of it's basic usage.
1. vue instance   
    To use vuejs, you must initiate a vue instance like below.    
~~~~
    new Vue({
        el: '#app'
        data: {
            //data within this file, called by this.key
            key: value
        },
        methods: {
            //function within this file, called by this.function_name()
            count: function(){}
        },
        computed: {
            //auto updated every time variable inside changes
            sum: function(){}
        },
        mounted: {
            //called when instance mounted
            auto_load: function(){}
        },
        watch: {
            //watcher for sepcial case of computed
        },
        props: [
            //value that passed by parent element
            'parent_passed_value',
        ]
    })
~~~~
2. html part
    - to insert data in html template   

        ~~~~
        <h1>{{value_in_data_or_computed}}</h1> #pure text 
        <h1 v-html="some_html"></h1> #will parse html
        ~~~~ 

    - basic logic control
        - v-if="expression" / v-show="expression"
        - v-else-if="expression"
        - v-else="expression"
        - v-for="item in items" v-for="(val, key) in items"  //works for both array and object
    - event
        - v-on:evnet=" "

            ~~~~
                <button v-on:click="method_name()"></button>
            ~~~~
    
    - bindings (bind class/style with dynamic value)
        - v-bind:class=""
            - v-bind:class="{active: isActive}"
            - v-bind:class="isActive"
            - v-bind:class="[isActive, isAvaliable]"
        - v-bind:style="" //better to use class control style
        - v-model="" //just syntax sugar for updating data on user input

            ~~~~
                //bind the input value to js variable 
                <input v-model="msg" name="name">` 
            ~~~~
    
