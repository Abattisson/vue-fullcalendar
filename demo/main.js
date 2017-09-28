// main entry file
// var Vue = require('vue')
import Vue from 'vue'
import App from './app'
import moment from 'moment'
// new Vue({
//   el : '#app',
//   components : {
//     'app' : require('./app')
//   }
// })

Vue.filter('dateFormat', function(value){
    let formattedDate = moment(value).format('YYYY-MM-DD')
    return formattedDate
})

new Vue({
  el : '#app',
  render: h => h(App),
  template : '<App/>',
  components : {
    App
  }
});


