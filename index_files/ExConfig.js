window['UseMinigameH5'] = true
window['projectVersion'] = '1.4.4'
window['v_release'] = '1.2.3'
window['v_releaseMark'] = '01'
window['Platform'] = "WECHAT"
window['appid'] = "wxfed11f69958fe340"
window['IsInWebTest'] = false
window['IsGM'] = true
window['isTestLog'] = false

/**gm服务器开关 */
window['IsGmFromSever'] = true


window['language'] = "VN"  // "ZH_CN" // "EN"; //VN  //TH
window['httpResServerPath'] = "https://glyx.17tcw.com/GameRes/QiShiLaiLe/V45/";


window["useLuckCoin_power"] = true;
window["useLuckCoin"] = false
window["useCDKey"] = false
window["use2021NewYear"] = true
window["useNewYearKey"] = false
/**死斗模式进入次数 */
window['Chuanqu_luandouTime'] = 1

window["useRate"] = false
window['EnableDataReport'] = true
//是否开启引导，目前 ohayoo ios android开启；狂热chop.io ios android开启;  lr 龙锐android 不开
window['isGuidance'] = false

window['useGmCode'] = false

//是否显示隐私授权界面
window['AuthorizationInterface'] = false
//是否显示客服


//传趣签到方案
window['Chuanqu_fangan'] = "2"

//只在minigame apk  fblogin使用
window['FBLogin'] = false

if (window['qq']) {
    window['Platform'] = "QQ"
    window['appid'] = "1111179415"
    window['IsInWebTest'] = false

    window['v_releaseMark'] = '05' //--05为qq渠道
    window['projectVersion'] = '1.0.16'
    // window['httpResServerPath'] = "https://dianli100.com/Hunter/V10/";
    window['httpResServerPath'] = "https://games.cdn.data-eye.cn/qsll/qq/1.0.12/";

}

if (window['tt']) {

    window["useNewYearKey"] = true
    window['IsInWebTest'] = false
    window['Platform'] = "TT"
    window['projectVersion'] = '1.3.6'
    window['appid'] = "tt72d6046bededa267"

    window["useCDKey"] = true

    window['httpResServerPath'] = "https://igame.chinanola.com/1.0.32/";
    //头条的appid，每次更新game.json时候要同步到这里
    window['ttappidList'] = []

    window['v_releaseMark'] = '04' //--04为字节跳动渠道
}


if (window['getAdapterInfo']) {
    window['Platform'] = 'KUAISHOU'
    window['IsInWebTest'] = false
    window["useNewYearKey"] = true
    window['projectVersion'] = '1.0.1'
    window["useCDKey"] = true
    window['IsGM'] = true
    window['v_releaseMark'] = '06' //--06为快手渠道
    window['httpResServerPath'] = "https://igame.chinanola.com/ks/1.0.3/";
}

if (window['qg'] && window['qg'].setLoadingProgress) {
    window['language'] = "ZH_CN"
    window['Platform'] = 'OPPO'
    window['appid'] = "30469555"
    window['IsInWebTest'] = false
    window["useNewYearKey"] = false
    window['projectVersion'] = '1.1.5'
    window["useCDKey"] = false
    window['IsGM'] = false
    window['httpResServerPath'] = "https://games.cdn.data-eye.cn/qsll/oppo/1.0.9/";
    window['v_releaseMark'] = '07' //--07为oppo渠道
} else if (window['qg']) {
    //vivo
    window['language'] = "ZH_CN"
    window['Platform'] = 'VIVO'
    window['appid'] = "105467096"
    window['IsGM'] = false
    window['IsInWebTest'] = false
    window["useNewYearKey"] = false
    window['projectVersion'] = '1.1.6'
    window["useCDKey"] = false

    window['httpResServerPath'] = "https://games.cdn.data-eye.cn/qsll/vivo/1.0.9/";
    window['v_releaseMark'] = '10' //--10为vivo渠道
}




//原生平台判断
if (window.conchConfig) {
    var os = conchConfig.getOS();
    if (os == "Conch-android") {
        window['Platform'] = "ANDROID"
        window['projectVersion'] = bridge.call("getAppVersionName")
        window['IsInWebTest'] = false

        if (window['ProjectSubCode'] == 'lr') {
            window['isGuidance'] = false
        } else {
            window['isGuidance'] = true
        }

        if (window['ProjectSubCode'] == "chop") {//狂热 英文版
            window['language'] = "EN"
            window['useGmCode'] = true
            window['useCDKey'] = false
            window['v_releaseMark'] = '08' //--08为狂热渠道
        }

        if (window['ProjectSubCode'] == "minigame") {//MINIGAME 英文版 apk
            window['language'] = "EN"
            window['useGmCode'] = false
            window['useCDKey'] = false
            window['IsGM'] = false
            window['IsGmFromSever'] = false
            window['FBLogin'] = true;
            window['v_releaseMark'] = '21' //--MINIGAME
            //要关引导
            window['isGuidance'] = false

            //minigame 有越南语版本
            var lang = bridge.call('jsCallNative_getLanguage')
            console.log('lang:' + lang)
            if (lang == "VN") {
                window['language'] = lang
            } else if (lang == "TH") {
                window['language'] = lang
            } else {
                window['language'] = "EN"
            }
        }

        if (window['ProjectSubCode'] == "dalang") {//大浪 英文版
            window['language'] = "EN"
            window['IsGmFromSever'] = true
            window['useGmCode'] = false
            window['IsGM'] = true

            window['v_releaseMark'] = '10' //--08为大浪渠道
        }


        if (window['ProjectSubCode'] == "chuanqu") { // 传趣
            window['EnableDataReport'] = true
            window['AuthorizationInterface'] = true
            window['IsGmFromSever'] = true
            window['useGmCode'] = false
            window['v_releaseMark'] = '09' //--09为传趣渠道
            window['IsGM'] = false
            window["useCDKey"] = true
            window['EnableDataReport'] = true
            window['Chuanqu_fangan'] = "1"
            //乱斗进入次数
            window['Chuanqu_luandouTime'] = 1
        }

        if (window['ProjectSubCode'] == "rrr") { // 卡日曲测试无广告版本

            window['useGmCode'] = false
            window['v_releaseMark'] = '99' //--99为卡日曲测试包
            window['IsGM'] = true

        }


    } else {
        window['Platform'] = "IOS"
        window["useRate"] = true
        window['projectVersion'] = bridge.call("getAppVersionName")
        window['IsGmFromSever'] = false
        window['v_releaseMark'] = '09' //--09为传趣渠道

        window['IsGM'] = false

        window['EnableDataReport'] = false
        window['isGuidance'] = true


        //目前只在chop.io 测试版本开启
        if (window['ProjectSubCode'] == "chop") {//狂热 英文版
            window['useGmCode'] = true
            window['useCDKey'] = false
            window['language'] = "EN"
            window['v_releaseMark'] = '08' //--08为狂热渠道
            window["useCDKey"] = false
        }

        if (window['ProjectSubCode'] == "chuanqu") {

            window["useCDKey"] = true
        }

        if (window['ProjectSubCode'] == "minigame") {//MINIGAME 英文版 ios
            window['language'] = "EN"
            window['useGmCode'] = false
            window['useCDKey'] = false
            window['IsGM'] = false
            window['IsGmFromSever'] = false
            window['FBLogin'] = true;
            window['v_releaseMark'] = '21' //--MINIGAME
            window["useRate"] = false
            //要关引导
            window['isGuidance'] = false
            //minigame 有越南语版本
            var lang = bridge.call('jsCallNative_getLanguage')
            console.log('lang:' + window['language'])
            if (lang == "VN") {
                window['language'] = lang
            } else if (lang == "TH") {
                window['language'] = lang
            } else {
                window['language'] = "EN"
            }

        }

    }

}

//facebook instant  相关参数移到 index.js 设置，防止因fb初始化函数异步执行产生问题
if (window['FBInstant']) {
    window['v_release'] = '1.0.0'
    window['Platform'] = "FBINSTANT"
    window['EnableDataReport'] = false
    window['v_releaseMark'] = '09' //--09为FB Isstant 渠道
    window['IsGmFromSever'] = false
    window["use2021NewYear"] = false
    window['isGuidance'] = false
    window['IsInWebTest'] = false
    window['IsGM'] = false
    window['projectVersion'] = "1.0.26"

    var locale = FBInstant.getLocale();
    console.log('lang',locale)
    if (locale == "vi_VN") {
        window['language'] = "VN"
    } else if (locale == "th_TH") {
        window['language'] = "TH"
    } else {
        window['language'] = "EN"
    }


}
