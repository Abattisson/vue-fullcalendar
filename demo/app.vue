<template>
  <div>
  	<p>
  		Here is the demo of vue-fullcalendar, no jquery fullcalendar.js required!
  	</p>
    <full-calendar class="test-fc" :events="fcEvents"
      first-day='1' locale="fr"
      @changeMonth="changeMonth"
      @eventClick="eventClick"
      @dayClick="dayClick"
      @moreClick="moreClick">
        <template slot="fc-event-card" scope="p">
            <p><i class="fa">sadfsd</i> {{ p.event.title }} test</p>
        </template>
    </full-calendar>
  </div>
</template>
<script>
let demoEvents = [
    {
      title    : 'one',
      start    : '2017-11-25',
      end      : '2017-11-27',
      cssClass : 'family',
      eventType: 'ski'
    },
    {
      title    : 'two',
      start    : '2017-11-25',
      end      : '2017-11-27',
      cssClass : 'family',
      eventType: 'ski'
    },
    {
      title    : 'one',
      start    : '2017-11-25',
      end      : '2017-11-27',
      cssClass : 'family',
      eventType: 'ski'
    },
    {
      title    : 'two',
      start    : '2017-11-25',
      end      : '2017-11-27',
      cssClass : 'family',
      eventType: 'ski'
    },
    {
      title    : 'one',
      start    : '2017-11-25',
      end      : '2017-11-27',
      cssClass : 'family',
      eventType: 'ski'
    },
    {
      title    : 'two',
      start    : '2017-11-25',
      end      : '2017-11-27',
      cssClass : 'family',
      eventType: 'ski'
    },
    {
      title    : 'threee',
      start    : '2017-11-25',
      end      : '2017-11-27',
      cssClass : 'family',
      eventType: 'ski'
    },
    {
      title    : 'four',
      start    : '2017-09-15',
      end      : '2017-09-17',
      cssClass : 'family',
      eventType: 'tree'
    }
  ];

export default {
	data () {
		return {
            name:'Sunny!',
            fcEvents : demoEvents
        }
	},
  methods : {
    'changeMonth' (start, end, current) {
      console.log('changeMonth', start.format(), end.format(), current.format())
    },
    'eventClick' (event, jsEvent, pos) {
       console.log('eventClick', event, jsEvent, pos)
    },
    'dayClick' (day, jsEvent) {
      console.log('dayClick', day, jsEvent)
    },
    'moreClick' (day, events, jsEvent, dayClosed) {
      console.log('moreCLick', day, events, jsEvent, dayClosed)
    }
  },
  components : {
    'full-calendar' : require('src/fullCalendar')
  }
}
</script>
<style lang='scss'>
  .app{
    color:green;
  }
</style>
