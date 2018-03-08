<template>
  <div class="singer">
    <m-header></m-header>
    <div class="container">
      <scroll class="scroll-wrapper">
        <div>
          <div class="info-box">
            <div class="info-header">
              <span class="h-total">当月总额</span>
              <span class="h-date">日程</span>
            </div>
            <div class="info-body">
              <span v-html="information.allTotal"></span><span class="yuan">元</span>
            </div>
            <div class="info-other">
              <span class="o-all">累计订单总额：{{information.monthTotal}}</span>
              <span class="o-list">当月订单总数：{{information.listCount}}</span>
            </div>
          </div>
          <div class="itemTabs">
            <div v-for="item in itemTabs" :key="item.id" class="item-tab">
              <span><img :src="item.url" alt=""></span>
              <p>{{item.title}}</p>
            </div>
          </div>
          <div class="orderListBox">
            <p>最近订单</p>
            <table>
              <thead>
              <tr>
                <td>订单号</td>
                <td>厂家名称</td>
                <td>任务进度</td>
                <td>订单日期</td>
              </tr>
              </thead>
              <tbody>
                <tr v-for="item in orderList" :key="item.orderid">
                  <td>{{item.orderid}}</td>
                  <td>{{item.cname}}</td>
                  <td>{{item.process}}</td>
                  <td>{{item.date}}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </scroll>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import MHeader from 'components/m-header/m-header'
  import Scroll from 'base/scroll/scroll'
  export default {
    data() {
      return {
        information: {
          allTotal: 4522.22,
          monthTotal: 1513.15,
          listCount: 25
        },
        itemTabs: [
          {
            id: 1,
            url: 'http://edu1.bbquan.cn:80/FileUpload/Album/2018/3/6/bf773a85-145a-49c9-a187-f5a543ce8e68.png',
            title: '客户信息'
          },
          {
            id: 2,
            url: 'http://edu1.bbquan.cn:80/FileUpload/Album/2018/3/6/bf773a85-145a-49c9-a187-f5a543ce8e68.png',
            title: '订单信息'
          },
          {
            id: 3,
            url: 'http://edu1.bbquan.cn:80/FileUpload/Album/2018/3/6/bf773a85-145a-49c9-a187-f5a543ce8e68.png',
            title: '跟单员'
          },
          {
            id: 4,
            url: 'http://edu1.bbquan.cn:80/FileUpload/Album/2018/3/6/bf773a85-145a-49c9-a187-f5a543ce8e68.png',
            title: '厂家信息'
          }
        ],
        orderList: [
          {orderid: 18542, cname: '美国迪士尼', process: '未完成', date: '2017/10/02'},
          {orderid: 18543, cname: '美国迪士尼', process: '未完成', date: '2017/10/02'},
          {orderid: 18544, cname: '美国迪士尼', process: '未完成', date: '2017/10/02'},
          {orderid: 18545, cname: '美国迪士尼', process: '未完成', date: '2017/10/02'}
        ]
      }
    },
    components: {
      MHeader,
      Scroll
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~common/stylus/variable"
  .container
    position: fixed
    width: 100%
    top: 3rem
    bottom: 3rem
    padding 5px 10px
    .scroll-wrapper
      height: 100%;
      overflow: hidden;

  .info-box
    background $color-background-f
    box-shadow 0 0 3px #ddd
    border-radius 5px
    padding 10px
    .info-header
      overflow hidden
      .h-total
        float left
      .h-date
        float right
    .info-body
      font-size 3rem
      text-align center
      padding 3rem 0
      .yuan
        font-size 1.2rem
    .info-other
      font-size .8rem
      overflow hidden
      .o-all
        float left
      .o-list
        float right

  .itemTabs
    background $color-background-f
    overflow hidden
    margin-top 5px
    padding 10px
    .item-tab
      float left
      width 25%
      text-align center
      span
        display inline-block
        width 1.5rem
      p
        margin-top 5px
        font-size .8rem
  .orderListBox
    padding-top 3rem
    p
      font-size 1.2rem
      margin-bottom 1rem
    table
      width 100%
      background $color-background-f
      text-align center
      thead
        line-height 2.5rem
        td
          padding 5px
          border-bottom 1px solid #ddd
      tbody
        line-height 3rem
</style>
