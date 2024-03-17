const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const entrySchema = new Schema({
    date: {
        type:String,
        required:true
    },
    top_priorities: {
        priority_1:{
            label:String,
            checked:Boolean
        },
        priority_2:{
            label:String,
            checked:Boolean
        },
        priority_3:{
            label:String,
            checked:Boolean
        }
    },
    gratitude: {
        gratitude_1:String,
        gratitude_2:String,
        gratitude_3:String
    },
    notes:String,
    mood:String,
    emotions:[],
    tasks:{
        task_1:{
            label:String,
            checked:Boolean
        },
        task_2:{
            label:String,
            checked:Boolean
        },
        task_3:{
            label:String,
            checked:Boolean
        },
        task_4:{
            label:String,
            checked:Boolean
        },
        task_5:{
            label:String,
            checked:Boolean
        },
        task_6:{
            label:String,
            checked:Boolean
        }
    },
    food:{
        breakfast:String,
        lunch:String,
        dinner:String,
        water:{
            water_1:String,
            water_2:String,
            water_3:String,
            water_4:String,
            water_5:String,
            water_6:String,
            water_7:String,
            water_8:String
        }
    },
    exersise:{
        exersiseDay: Boolean,
        restDay:Boolean,
        activity:String,
        duration:{
            hours:Number,
            minutes:Number
        }
    }

});

const Entry = mongoose.model('Entry' , entrySchema);
module.exports = Entry;

