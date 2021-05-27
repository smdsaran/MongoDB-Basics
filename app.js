const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/people', {useNewUrlParser: true , useUnifiedTopology: true});

const classSchema = new mongoose.Schema({

    class: {
        type: String ,
        required: [true , "Where is class?"]
    } ,
    no: {
        type: Number ,
        min: 200 , 
        max: 210
    }, 
    strength: Number
});

const peopleSchema = new mongoose.Schema({

    position: String ,
    name: String ,
    age: Number , 
    stdclass: classSchema
});

const Class = new mongoose.model("Class" , classSchema);

const cls1 = new Class({
    class: "CE - B" ,
    no: 205 , 
    strength: 35
});

cls1.save();

const People = new mongoose.model("People" , peopleSchema);

const people = new People({
    position: "Student" ,
    name: "skk" , 
    age: 22  ,
    stdclass: cls1
});

people.save();

//mongoose.connection.close();




//mongoose.connection.close();

const cs_a = new Class({
    
    no: 201 , 
    strength: 45
});

const it_a = new Class({
    class: "EC - A" ,
    no: 202 , 
    strength: 50
});

/*  Class.insertMany([cs_a , it_a] , function(err , docs) {
    
    if(err) {
        console.log("Error Occured");
        mongoose.connection.close();
    }

    else {
        mongoose.connection.close();
        console.log(docs);
    }
});  

/* Class.find(function(err , docs) {
    if(err) {
        console.log("Error Occured");
    }

    else {
        docs.forEach(function(cls) {
            console.log(cls.class);
            mongoose.connection.close();
        });
        
    }
}); */

/* Class.updateOne( {_id: "60a925d519cfc77f14d79940"} , {class: "ME - B"} , function(err) {
    if(err) {
        console.log("Error Occured");
    }

    else { 
        console.log("Updated .");
        mongoose.connection.close();
    }


});   */

/* Class.deleteOne( {_id: "60a925d519cfc77f14d79940"}  , function(err) {
    if(err) {
        console.log("Error Occured");
    }

    else { 
        console.log("Deleted .");
        mongoose.connection.close();
    }


});  */

/* People.deleteMany( {position: "Admin"}  , function(err) {
    if(err) {
        console.log("Error Occured");
    }

    else { 
        console.log("Deleted .");
        mongoose.connection.close();
    }


}); */