const mongoose = require("mongoose");

const Schema = mongoose.Schema;



const entrySchema = new Schema({
    date: {
        type:Date,
        required:true
    },
    top_priorities: {
        type:[]
    },
    gratitude: {
        type:[],
    },
    notes:{
        type:String
    },
    mood:{
        type:any
    },
    emotions:{
        type:[]
    },
    tasks:{
        type:[]
    },
    food:{
        type:{
            breakfast:String,
            lunch:String,
            dinner:String,
            water:any
        }
    },
    excersise:{
        type:{
            excersiseDay: Boolean,
            restDay:Boolean,
            activity:String|null,
            duration:{
                hours:Number,
                minutes:Number
            }|null
        }
    }

});

const Entry = mongoose.model('Entry' , entrySchema);
module.exports = Entry;

