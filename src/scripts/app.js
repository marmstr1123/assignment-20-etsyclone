let Backbone = require('Backbone')
let $ = require('jquery')
import EtsyItemColl from './modelColl.js';
import ViewTemplateConstructor from './constructor.js';
import homeTemplate from './views.js';
import showItemTemplate from './views.js';

//console.log(Backbone)

//console.log('lookie here!')


//console.log(homeTemplate)
let AppRouter = Backbone.Router.extend({
   routes: {

      "": "showHome"
   },

   showHome: function(){
      console.log("routingHome")

      let homeColl = new EtsyItemColl()
      homeColl.fetch().then(function(){
         let homeProfile = new ViewTemplateConstructor('#app-container', homeTemplate )
         homeProfile.render(homeColl)
      })


   },


   initialize: function(){
      Backbone.history.start()
   }

})

let app = new AppRouter()
