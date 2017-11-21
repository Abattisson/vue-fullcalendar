<template>
  <div class="full-calendar-header">
    <div class="header-left">
      <slot name="header-left">
      </slot>
    </div>
    <div class="header-center">
      <span class="prev-month" @click.stop="goPrev">{{leftArrow}}</span>
      <span class="title">{{title}}</span>
      <span class="next-month" @click.stop="goNext">{{rightArrow}}</span>
    </div>
    <div class="header-right">
      <slot name="header-right">
      </slot>
    </div>
  </div>
</template>
<script type="text/babel">
  import dateFunc from './dateFunc'
  import moment from 'moment';

  export default {
    props : {
      currentMonth : {},
      titleFormat  : {},
      firstDay     : {},
      monthNames   : {},
      locale       : {}
    },
    data () {
      return {
        leftArrow  : `<svg class="triangle icon" id="leftArrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 128 128" enable-background="new 0 0 128 128" xml:space="preserve">
    <path fill-rule="evenodd" clip-rule="evenodd" class="cls-1" d="M108,61.3l-68.4-46c-5.4-3.6-12.7,0.2-12.7,6.7V114
      c0,6.5,7.3,10.4,12.7,6.7l68.4-46C112.8,71.5,112.8,64.5,108,61.3z"/>
    </svg>`,
        rightArrow : `<svg class="triangle icon" id="rightArrow" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
       viewBox="0 0 128 128" enable-background="new 0 0 128 128" xml:space="preserve">
    <path fill-rule="evenodd" clip-rule="evenodd" class="cls-1" d="M108,61.3l-68.4-46c-5.4-3.6-12.7,0.2-12.7,6.7V114
      c0,6.5,7.3,10.4,12.7,6.7l68.4-46C112.8,71.5,112.8,64.5,108,61.3z"/>
    </svg>`
      }
    },
    computed: {
      title () {
        if (!this.currentMonth) return;
        return this.currentMonth.locale(this.locale).format('MMMM YYYY')
      }
    },
    methods : {
      goPrev () {
        var newMonth = moment(this.currentMonth).subtract(1, 'months').startOf('month');
        this.$emit('change', newMonth);
      },
      goNext () {
        var newMonth = moment(this.currentMonth).add(1, 'months').startOf('month');
        this.$emit('change', newMonth);
      }
    }
  }
</script>
<style lang="scss">
.full-calendar-header{
  display: flex;
  align-items: center;
  .header-left,.header-right{
    flex:1;
  }
  .header-center{
    flex:3;
    text-align:center;
    .title{
      margin: 0 10px;
    }
    .prev-month,.next-month{
      cursor: pointer;
    }
    .prev-month{
      transform: rotate(90deg);
    }
    .next-month{
      transform: rotate(0);
    }
  }
}
</style>
