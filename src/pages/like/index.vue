<template>
    <div class="page">
       <image src="http://yichelian.oss-cn-hangzhou.aliyuncs.com/oss/1/1527045415446" class="slide-image" />
        <div class="car_des border-bot1">
            <div class="car_des1">上汽通用别克威朗2018款15S自动领先版</div>
            <span class="te_ri1">外观珍珠白+内饰米咖色</span>
            <span class="te_ri">官方指导价15.47万</span>
        </div>
        <div class="youli">
            <span>有礼</span><a>支付99元意向金可抵2000元提车服务费</a>
        </div>
        <div class="des ">
            <div class="xianyong">
                    先用一年
            </div>
            <div class="tishi">
                <div class="diyi">
                    <i>首付款</i>
                    <span>9999元</span>
                </div>
                <div class="dier border-lef1 border-rig1">
                     <i>月供</i>
                    <span>3690元</span>
                </div>
                <div class="disan">
                     <i>期数</i>
                    <span>12期</span>
                </div>
            </div>
            <div class="yuanxing">
                <span class="yaunhu">含购置税</span>
                <span class="yaunhu">送一年保险</span>
                <span class="tiche"><i></i>提车服务费2000元</span>
            </div>
             <div class="xianyong biandi">
                    一年后
            </div>
            <div class="weikuan">
                <div class="qiankuan"><span>88560</span>元尾款可支持(3690*24)分期支付</div>
                <span class="shanga">还可以选择过户到你名下或者直接还车</span>
            </div>
            

        </div>
            <div class="tichebuzhou">
                <Image class="pic1" src="http://yichelian.oss-cn-hangzhou.aliyuncs.com/oss/1/1527065695729" />
            </div>
            <div class="goumaixuzhi">
                <div class="xuzhi">购买须知</div>
                <ul>
                    <li class="border-bot1">
                        <span>必须资料</span><a>需要提供有效身份证、驾驶证以及银行卡</a>
                    </li>
                    <li class="border-bot1">
                        <span>车辆归宿</span><a>租赁期内车辆归宿辣个车,过户后转移所有权</a>
                    </li>
                     <li class="border-bot1">
                        <span>购置税费</span><a>含购置税，你无需支付额外费用</a>
                    </li>
                     <li>
                        <span>牌照手续</span><a>上牌手续由辣个车办理</a>
                    </li>
                </ul>
            </div>
            <div class="liudi">

            </div>
            <div class="anniu">
                 立即预约   
            </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
    .page{
        width: 750rpx;
        height: auto;
        .slide-image{
            width: 750rpx;
            height: 422rpx;
            background-size: cover;
        }
        .car_des{
            width: 750rpx;
            height: 132rpx;
            box-sizing: border-box;
            padding: 0 30rpx;
            background-color: #fff;
            display: flex;
            align-items:center;
            flex-wrap: wrap;
            .car_des1{
                font-weight: 700; 
                font-size: 30rpx;
            }
            .te_ri1{
                color: #bababa;
                font-size: 24rpx;
                position: relative;
                top: -12rpx;
            }
            .te_ri{
                 position: relative;
                top: -12rpx;
               margin-left: auto;
                color: #c5c5c5;
                font-size: 22rpx;
            }
        }
        .youli{
            width: 750rpx;
            height: 88rpx;
            box-sizing: border-box;
            padding: 0 30rpx;
            background-color: #fff;
            display: flex;
            align-items: center;
            color: #ff4b22;
             font-size: 26rpx;
             span{
                 width: 70rpx;
                 height: 40rpx;
                 border-radius: 20rpx;
                 text-align: center;
                 line-height: 40rpx;
                 color: #fff;
                 background: linear-gradient(to right, #ff7326 , #ff4612); /* 标准的语法 */ 
             }
             a{
                 padding-left: 20rpx;
             }
        }
        .des{
            width: 750rpx;
            height: 564rpx;
            background-color: #fff;
            margin-top: 30rpx;
            overflow: hidden;
            .xianyong{
                width: 164rpx;
                height: 64rpx;
                background: linear-gradient(to right, #ff7326 , #ff4612); /* 标准的语法 */ 
                text-align: center;
                border-radius: 0 32rpx 32rpx 0;
                line-height: 64rpx;
                margin-top: 44rpx;
                color:#fff;
            }
            .biandi{
                margin-top: 0rpx;
            }
            .tishi{
                width: 696rpx;
                height: 135rpx;
                margin-top:26rpx;
                margin: 26rpx auto 0 auto; 
                border-radius: 8rpx;
                 background-color: #f5f5f5;
                display: flex;
                align-items: center;
                .dier, .diyi, .disan {
                    width: 242rpx;
                    height: 64rpx;
                    text-align: center;
                    display: inline-block;
                    i{
                        font-size: 28rpx;
                        color:#6e6e6e;
                    }
                    span{
                        font-size: 32rpx;
                        color: #ff4a1a;
                        font-weight: 700;
                        position: relative;
                        top: -14rpx;
                    }
                }
                .border-lef1{
                    &:after{
                        border-left: 1rpx solid #dcdcdc; 
                    }
                }
               
            }
            .yuanxing{
               
                width: 750rpx;
                height: 80rpx;
                line-height: 80rpx;
                box-sizing: border-box;
                padding: 0 30rpx;
               
                .yaunhu{
                    border: 1px solid #fcb08c;
                    border-radius: 8rpx;
                    height: 26rpx;
                    font-size: 22rpx;
                    color: #ff6935;
                    padding: 4rpx 8rpx;
                    &:nth-child(2) {
                        margin-left: 10rpx;
                    }
                }
                .tiche{
                    color: #c8c8c8;
                    font-size: 26rpx;
                    float: right;
                    i{  position: relative;
                        top:8rpx; 
                        display: inline-block;
                        width: 29rpx;
                        height: 29rpx;
                        background-size: cover;
                       background-image: url('../../../static/images/123.png')
                    }
                }
            }
            .weikuan{
                width: 750rpx;
                height: 92rpx;
                box-sizing: border-box;
                padding: 14rpx 30rpx;
                .qiankuan{
                    font-size: 26rpx;
                    color : #fb4223;
                    span{
                        font-size: 32rpx;
                         color : #fb4223;
                         font-weight: 700;
                    }
                }
                .shanga{
                    color:#969696;
                    font-size: 26rpx;
                    position: relative;
                    top: -6rpx;
                }
            }
        }
        .tichebuzhou{
                width: 750rpx;
                height: 712rpx;
                .pic1{
                    width: 750rpx;
                    height: 712rpx;
                    background-size: cover;
                }

            }
            .goumaixuzhi{
                width: 750rpx;
                height: 412rpx;
                margin-top: 30rpx;
                background-color: #fff;
                .xuzhi{
                    width: 750rpx;
                    height: 80rpx;
                    line-height: 110rpx;
                    box-sizing: border-box;
                    padding: 0 30rpx;
                    font-size: 32rpx;
                    font-weight: 700;
                }
                ul {
                    box-sizing: border-box;
                    padding: 0 30rpx;
                    li {
                        height: 80rpx;
                        line-height: 80rpx;
                        span{
                            font-size: 28rpx;
                            font-weight: 700;
                            color:#000;
                            width: 150rpx;
                            display: inline-block;
                        }
                        a{
                            font-size: 28rpx;
                            display: inline-block;
                            color: #7d7d7d;
                        }

                    }
                

                }
                
            }
            .liudi{
                width: 750rpx;
                height: 128rpx;
                background-color: #f3f4f6;
            }
            .anniu{
                width: 750rpx;
                height: 100rpx;
                background-color: #ff4615;
                text-align: center;
                font-size: 32rpx;
                line-height: 100rpx;
                position: fixed;
                left: 0;
                bottom: 0;
                color:#fff;
                font-weight: 700;
            }
    }

</style>
