let Backbone = require('Backbone')
let $ = require('jquery')

console.log("model talking")

const EtsyModel =  Backbone.Model.extend({
   url:"",
   })

//console.log(etsyModel)

const EtsyItemColl = Backbone.Collection.extend({
   model: EtsyModel,
   parse: function(rawJSON){
       console.log(rawJSON)
      console.log("checkTest")
      return rawJSON.results
   },

   initialize: function(){
      this.url = 'https://openapi.etsy.com/v2/listings/active.js?&includes=Images&api_key=nrjhn02lcg2tf4s25lamp8u9&callback=?'
   }


})

 console.log(EtsyItemColl)
module.exports = EtsyItemColl
