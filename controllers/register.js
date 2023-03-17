const { MongoClient } = require('mongodb')
const User = require('../models/user')
var url = "mongodb://localhost:27017/";

exports.postRegister = async(req, res, next) => {
    let userDetails = req.body

    let existingUser = await User.findAll({where:{email: userDetails.email}})

    if(existingUser.length === 0){
        let newUser = await User.create({
            firstname: userDetails.firstname,
            lastname: userDetails.lastname,
            email: userDetails.email,
            country: userDetails.country,
            state: userDetails.state,
            city: userDetails.city,
            gender: userDetails.gender,
            age: userDetails.age
        })
        res.json({flag: true, msg: "User Added"})
    }else{
        res.json({flag:false, msg: "User already there"})
    }
}

exports.getRegister = async(res, req) => { 
    var MongoClient = require('mongodb').MongoClient;
    MongoClient.connect(url, function(err, db){
        if(err) throw err;
        var dbo = db.db("registerform");

        dbo.collection("registerform").find({}).toArray(function(err, result){
            if(err) throw err;
            var obj = '&{result}';
            res.json(obj);
            db.close();
        })
    })
}    
