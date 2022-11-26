// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
const { Router } = require('express');
var express = require('express');
var router = express.Router();
var U =require('../model/produitShema.js')

/* GET users listing. */
router.get('/', function(req, res, next) {

U.find(function(error,data){
if(error) throw error;
//res.json(data);
res.render("produit.twig",{data});


});
});
// get
router.get('/', function(req, res, next) {
    res.render("produit.twig",{data});

});

// delete users by id
// router.get('/delete/:id',function(req,res){
//     var idu = req.params.id;
//     U.findoneAndRemove({_id : idu},function(err){
       
//     });
//     res.redirect('/users/');
// });

router.get('/delete/:id' , function(req, res){
    var idu =req.params.id;
    U.findOneAndRemove({_id : idu}, function(err){
        res.redirect('/produits/');
    })
})
//update produit
router.get('/update/:id',(req,res)=>{
   // res.json(req.params.id);
   var idu=req.params.id;
    U.find({_id : idu}, function(err,d){
        res.render('update.twig',{d})
    })
  
});
/* save update*/
router.post('/updateproduit/', function(req, res){
    var idm= req.body.id;

// res.json(idm);
U.findById({_id:idm},(err,data)=>{
    
    data=Object.assign(data,req.body);
    //res.json(data);
    data.save(
        ()=>{}
    )
})

 });


// //show form of user


// router.get('/showformr' , function(req, res){
//     res.render("produitAdd.twig");

    

// }); 

// router.post('/adduser',function(req,res){
//     user=new U(req.body);
//     user.save(()=>{
//     res.redirect('/users/');
//     });
// });
/*add user */
// router.post('/adduser', function(req, res){
//     user= new U(req.body);
//      user.save(()=>{
//     res.redirect('/users/');
//  });
 
 
//  });





module.exports = router;


