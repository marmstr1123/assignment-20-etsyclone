let Backbone = require('Backbone')
const $ = require('jquery')

console.log('constructor talking')

let ViewTemplateConstructor = function(domElSelector , htmlTemplFunction){
   this.domEl = domElSelector


   this.buildHTMLTemplate = htmlTemplFunction

   this.render = function(data){
      let tgtEl = document.querySelector(this.domEl)
      tgtEl.innerHTML = this.buildHTMLTemplate(data)
   }
}

module.exports = ViewTemplateConstructor
