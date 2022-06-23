module.exports.home = function(req,res){
   return res.render('home', {
    title:"Home",
    originalName: "shekhar",
    phNo: 8766951144
   })
}