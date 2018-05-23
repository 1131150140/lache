<template>
    
  <div class="page">
    <div class="page__bd page__bd_spacing">
      <swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" :circular="circular"  >
        <div v-for="(item,index) in imgUrls" :key="index">
          <swiper-item>
            <image :src="item" class="slide-image" />
          </swiper-item>
        </div>
      </swiper>
    </div>
    <div class="yuyue">
        <div class="content t1 border-bot1">
            <span class="yuyue_bianjie">预约试乘</span><a>便捷预约急速审核</a>
        </div>
         <div class="content border-bot1">
             <i class="chexing icon"></i><a>意向车型</a> <i class="jiantou icon"></i>
        </div>
        <div class="content border-bot1">
            <i class="shouji icon"></i><a>手机号码</a>
        </div>
        <div class="button">预约试乘</div>
        <div class="zuixinchec">
            <div class="zuixinchexing">
                最新车型
            </div>

            <ul>
                <li @click="dianji">
                     <div class="pic">
                           <image class="widget__arrow" src="http://yichelian.oss-cn-hangzhou.aliyuncs.com/oss/1/1526998901966" mode="aspectFill"/> 
                    </div>
                    <div class="wenzi">
                        <div>上汽通用别克威朗2018款15S自动领先版</div>
                        <span class="soufu">首付1.8万</span><span class="yuegong">月供2457元</span>
                    </div>
                </li>
                <li @click="dianji">
                     <div class="pic">
                           <image class="widget__arrow" src="http://yichelian.oss-cn-hangzhou.aliyuncs.com/oss/1/1526998465327" /> 
                    </div>
                    <div class="wenzi">
                        <div>上汽通用别克威朗2018款15S自动领先版</div>
                        <span class="soufu">首付1.8万</span><span class="yuegong">月供2457元</span>
                    </div>
                </li>
                <li @click="dianji">
                   <div class="pic">
                           <image class="widget__arrow" src="http://yichelian.oss-cn-hangzhou.aliyuncs.com/oss/1/1526998901966" mode="aspectFill" /> 
                    </div>
                    <div class="wenzi">
                        <div>上汽通用别克威朗2018款15S自动领先版</div>
                        <span class="soufu">首付1.8万</span><span class="yuegong">月供2457元</span>
                    </div>
                </li>
            </ul>

        </div>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 900,
      circular: true,
      imgUrls: [
        'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
        'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
      ]
    }
  },
  methods: {
      dianji() {
          wx.navigateTo({
                url: '../like/like'
           })
      }
   
  }
}
</script>

<style lang="less">

.page{
    background-color: #f3f4f6;

}
.slide-image {
  width: 100%;
  height: 100%;
}
.page__bd_spacing {
    padding-left:0rpx;
    padding-right:0rpx;
}
.page__bd {
    padding-bottom:0rpx;
}

swiper {
    display:block;
    height:280rpx;
}
.yuyue{
    width: 750rpx;
    height: 504rpx;
    background-color: #fff;
    margin-top: 28rpx;
    .content{
        width: 698rpx;
        height: 98rpx;
        margin: 0 auto;
        line-height: 122rpx;
        color: #959595;
        font-size: 32rpx;
        font-weight: 200;
        display: flex;
        align-items:center;
        .yuyue_bianjie{
            color:#000;
             font-size: 36rpx;
        font-weight: 700;
        }
        .chexing{
            background-image: url(../../../static/images/chexing.png);
        }
        .icon{
            width: 32rpx;
            height: 32rpx;
            background-size: cover;
            display: inline-block;
        }
        .shouji{
            background-image: url(../../../static/images/shouji.png);
        }
        .jiantou{
            background-image: url(../../../static/images/youjiantou.png);
            margin-left:auto;//让某个元素靠右 = float： right
        }
        a{
            display: inline-block;
            padding-left: 12rpx;
        }

    }
    .t1{
        height:122rpx!important;
    }
    .button{
        width: 698rpx;
        height: 98rpx;
        background-color: #ff4615;
        border-radius: 50rpx;
        margin: 42rpx auto;
        line-height: 102rpx;
        text-align: center;
        color: #fffeff;
    }
    .zuixinchec{
        width: 750rpx;
        min-height: 50rpx;
        margin-top: 28rpx;
        background-color: #fff;
        position: absolute;
        .zuixinchexing{
            width: 750rpx;
            height: 100rpx;
            line-height: 150rpx;
            color: #000;
            box-sizing: border-box;
            padding: 0 26rpx;
            font-weight: 700;
            font-size: 36rpx;
        }
        ul {
            overflow: hidden;
            background-color: #f3f4f6;
            li {
                width: 750rpx;
                height: 550rpx;
                background-color: #fff;
                margin-top: 14rpx;
                overflow: hidden;
                &:nth-child(1) {
                    margin-top: 0;
                }
                .pic{
                    width: 698rpx;
                    height: 392rpx;
                    border-radius: 20rpx;
                    margin: 28rpx auto;
                    
                    .widget__arrow{
                        width: 698rpx;
                        height: 392rpx;
                        background-size: cover;
                       
                    }
                }
                .wenzi{
                    width: 698rpx;
                    height: 134rpx;
                    margin: 0 auto;
                    div{
                        font-size: 28rpx;
                        color: #313131;
                    }
                    .soufu{
                        font-size: 24rpx;
                        color:#ff4318;
                        position: relative;
                        top: -10rpx;
                    }
                    .yuegong{
                        font-size: 22rpx;
                        color: #979797;
                        position: relative;
                        top: -10rpx;
                    }
                }
            }
        }
    }
    
}


</style>
