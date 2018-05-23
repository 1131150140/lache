<template>
    <div class="page">
        <div class="top1">
            <div class="rentou">
                <span class="pic"></span>
                <span class="log">未登录</span>
            </div>
        </div>
        <div class="xinxi">
            <ul>
                <li class="border-bot1">
                    <span>我的证件</span>
                    <i></i>
                </li>
                 <li>
                    <span>我的订单</span>
                    <i></i>
                </li>
            </ul>
        </div>
        <div class="xinxi">
            <ul>
                 <li>
                    <span>修改手机</span>
                    <i></i>
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
    .top1{
        width: 750rpx;
        height: 308rpx;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #fff;
        .rentou{
            width: 586rpx;
            height: 124rpx;
            line-height: 124rpx;
            display: flex;
            .pic{
                width: 124rpx;
                height: 124rpx;
                display: inline-block;
                background-size: cover;
                background-image: url('../../../static/images/rentoupic.jpg')
            }
            .log{
                padding-left: 26rpx;
                font-size: 34rpx;
            }  
        }
    }
    .xinxi{
        width: 750rpx;
        min-height: 50rpx;
        box-sizing: border-box;
        padding: 0 30rpx;
        margin-top: 26rpx;
        background-color: #fff;
        ul {
            li {
                height: 122rpx;
                line-height: 122rpx;
                display: flex;
                align-items: center;
                i{
                    width: 31rpx;
                    height: 42rpx;
                    background-image: url('../../../static/images/youjiantou1.jpg');
                    background-size: cover;
                    margin-left: auto;
                }

            }
        }
    }

</style>
