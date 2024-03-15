const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const entrySchema = new Schema({
    date: {
        type:String,
        required:true
    },
    top_priorities: {
        priority_1:String,
        priority_2:String,
        priority_3:String
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
        task_1:String,
        task_2:String,
        task_3:String,
        task_4:String,
        task_5:String,
        task_6:String
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

