let Backbone = require('Backbone')
let $ = require('jquery')



let homeTemplate = function(collectionData){
   // console.log(collectionData)
   // console.log("look above 1")
   let bigStr =`<div class="row">
               <div class="col-sm-12">
                  <form class="navbar-form navbar-left" role="search">
                     <div class="form-group">
                        <input type="text" class="form-control" placeholder="Search">
                     </div>
                     <button type="submit" class="btn btn-default">Submit</button></form>
               </div></div>`
       bigStr += collectionData.models.map(function(personObj){
      //console.log(personObj.get('title'))

      return `
      <div class="col-md-4">
            <div class="thumbnail">
            <img src="${personObj.get('Images')[0].url_75x75}" alt="...">
               <div class="caption">
                  <h4>${personObj.get('title')}</h4>
                  <h5 class="textRight">${personObj.get('price')}</h5>
               </div>
            </div>
         </div>
      `
   }).join('')
//console.log(bigStr)
   return bigStr

}


module.exports = homeTemplate
