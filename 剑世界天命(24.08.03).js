// ==UserScript==
// @name         剑世界天命
// @author       domoki259
// @version      1.0.0
// @description  根据海豹自定义文件修改而来的天命插件，使用.spc help 查看帮助，当前版本更新至剑世界大群文件24-8-3
// @timestamp    1723256105
// @diceRequireVer 1.0.0
// @license      Apache-2
// @homepageURL  https://github.com/sealdice/javascript
// ==/UserScript==

var ext=seal.ext.find('spc');
if (!seal.ext.find('spc')){
    //检查扩展不存在
    ext=seal.ext.new('spc','domoki259','1.0.0');//建立新扩展
    seal.ext.register(ext);
}

let cmdspc =seal.ext.newCmdItemInfo();
cmdspc.name='spc';//指令名
cmdspc.help='请在spc指令后面加上您选择的种族。\n可使用.spc种族 关键词查询可选种族，在具体种族后面指定数量可骰多个，默认为1，上限为5。\n示例：\n.spc海曼人3\n也可以使用.spc冒险者<数量>关键词骰人类冒险者的基础能力值\n无效参数返回本段说明文字';//帮助内容

cmdspc.solve=(ctx,msg,cmdArgs)=>{
    cmdArgs.chopPrefixToArgsWith("人類")
    cmdArgs.chopPrefixToArgsWith("人类")
    cmdArgs.chopPrefixToArgsWith("精灵")
    cmdArgs.chopPrefixToArgsWith("精靈")
    cmdArgs.chopPrefixToArgsWith("矮人")
    cmdArgs.chopPrefixToArgsWith("塔比特")
    cmdArgs.chopPrefixToArgsWith("符民")
    cmdArgs.chopPrefixToArgsWith("梦魇")
    cmdArgs.chopPrefixToArgsWith("夢魘")
    cmdArgs.chopPrefixToArgsWith("暗影")
    cmdArgs.chopPrefixToArgsWith("龙人")
    cmdArgs.chopPrefixToArgsWith("聾人")
    cmdArgs.chopPrefixToArgsWith("草原妖精")
    cmdArgs.chopPrefixToArgsWith("草跑者")
    cmdArgs.chopPrefixToArgsWith("草原旅人")
    cmdArgs.chopPrefixToArgsWith("慧人")
    cmdArgs.chopPrefixToArgsWith("海曼人")
    cmdArgs.chopPrefixToArgsWith("女武神")
    cmdArgs.chopPrefixToArgsWith("仙灵")
    cmdArgs.chopPrefixToArgsWith("仙靈")
    cmdArgs.chopPrefixToArgsWith("萤石人")
    cmdArgs.chopPrefixToArgsWith("螢石人")
    cmdArgs.chopPrefixToArgsWith("古猫人")
    cmdArgs.chopPrefixToArgsWith("古貓人")
    cmdArgs.chopPrefixToArgsWith("黑暗矮人")
    cmdArgs.chopPrefixToArgsWith("旭日")
    cmdArgs.chopPrefixToArgsWith("矮精灵")
    cmdArgs.chopPrefixToArgsWith("矮精靈")
    cmdArgs.chopPrefixToArgsWith("小矮灵")
    cmdArgs.chopPrefixToArgsWith("图图人")
    cmdArgs.chopPrefixToArgsWith("圖圖人")
    cmdArgs.chopPrefixToArgsWith("魔动天使")
    cmdArgs.chopPrefixToArgsWith("魔動天使")
    cmdArgs.chopPrefixToArgsWith("第一之剑")
    cmdArgs.chopPrefixToArgsWith("第壹之剑")
    cmdArgs.chopPrefixToArgsWith("第一之劍")
    cmdArgs.chopPrefixToArgsWith("第壹之劍")
    cmdArgs.chopPrefixToArgsWith("第二之剑")
    cmdArgs.chopPrefixToArgsWith("第二之劍")
    cmdArgs.chopPrefixToArgsWith("第贰之劍")
    cmdArgs.chopPrefixToArgsWith("第贰之剑")
    cmdArgs.chopPrefixToArgsWith("第三之剑")
    cmdArgs.chopPrefixToArgsWith("第叁之剑")
    cmdArgs.chopPrefixToArgsWith("第三之劍")
    cmdArgs.chopPrefixToArgsWith("第叁之劍")
    cmdArgs.chopPrefixToArgsWith("冒险者")
    cmdArgs.chopPrefixToArgsWith("冒險者")
    cmdArgs.chopPrefixToArgsWith("贵精灵")
    cmdArgs.chopPrefixToArgsWith("貴精靈")
    cmdArgs.chopPrefixToArgsWith("魔焰人")
    cmdArgs.chopPrefixToArgsWith("德雷克劣民")
    cmdArgs.chopPrefixToArgsWith("黑暗巨魔")
    cmdArgs.chopPrefixToArgsWith("拉米亚")
    cmdArgs.chopPrefixToArgsWith("拉米亞")
    cmdArgs.chopPrefixToArgsWith("兽化人")
    cmdArgs.chopPrefixToArgsWith("獸化人")
    cmdArgs.chopPrefixToArgsWith("狗头人")
    cmdArgs.chopPrefixToArgsWith("狗頭人")
    cmdArgs.chopPrefixToArgsWith("劣化蛮")
    cmdArgs.chopPrefixToArgsWith("劣化蠻")
    cmdArgs.chopPrefixToArgsWith("幼血鬼")
    cmdArgs.chopPrefixToArgsWith("炎魔")
    cmdArgs.chopPrefixToArgsWith("德雷克骑士")
    cmdArgs.chopPrefixToArgsWith("德雷克騎士")
    cmdArgs.chopPrefixToArgsWith("迪亚波罗")
    cmdArgs.chopPrefixToArgsWith("迪亞波羅")
    cmdArgs.chopPrefixToArgsWith("巴西利斯克")
    cmdArgs.chopPrefixToArgsWith("蜥蜴人")
    cmdArgs.chopPrefixToArgsWith("半人马")
    cmdArgs.chopPrefixToArgsWith("半人馬")
    cmdArgs.chopPrefixToArgsWith("梅利亚")
    cmdArgs.chopPrefixToArgsWith("梅里亚")
    cmdArgs.chopPrefixToArgsWith("梅利亞")
    cmdArgs.chopPrefixToArgsWith("梅裏亞")
    cmdArgs.chopPrefixToArgsWith("梅裡亞")
    cmdArgs.chopPrefixToArgsWith("兽人")
    cmdArgs.chopPrefixToArgsWith("獸人")
    cmdArgs.chopPrefixToArgsWith("天人")
    cmdArgs.chopPrefixToArgsWith("提恩斯")
    cmdArgs.chopPrefixToArgsWith("噬魔")
    cmdArgs.chopPrefixToArgsWith("小巨灵")
    cmdArgs.chopPrefixToArgsWith("守宝妖精")
    cmdArgs.chopPrefixToArgsWith("小巨靈")
    cmdArgs.chopPrefixToArgsWith("守寶妖精")
    cmdArgs.chopPrefixToArgsWith("奈落裔")
    cmdArgs.chopPrefixToArgsWith("德雷克")
    cmdArgs.chopPrefixToArgsWith("阿鲁波鲁")
    cmdArgs.chopPrefixToArgsWith("阿魯波魯")
    cmdArgs.chopPrefixToArgsWith("芭芭雅嘎")
    cmdArgs.chopPrefixToArgsWith("巨螯蝎人")
    cmdArgs.chopPrefixToArgsWith("蝎人")
    cmdArgs.chopPrefixToArgsWith("巨鼇蠍人")
    cmdArgs.chopPrefixToArgsWith("蠍人")
    cmdArgs.chopPrefixToArgsWith("多翁")
    cmdArgs.chopPrefixToArgsWith("徳雷克碎劍")
    cmdArgs.chopPrefixToArgsWith("徳雷克碎剑")
    switch(cmdArgs.getArgN(1)){
        case"種族":
        case"种族":{
            seal.replyToSender(ctx,msg,`目前可以选择：人类，精灵，矮人，塔比特，符民，梦魇，暗影，龙人，草原妖精，慧人/海曼人，女武神，仙灵，萤石人，古猫人，旭日，魔动天使，矮精灵/小矮灵，黑暗矮人，贵精灵，魔焰人，迪亚波罗，德雷克劣民，黑暗巨魔，德雷克，阿鲁波鲁，芭芭雅嘎，巨螯蝎人/蝎人，多翁，拉米亚，兽化人，狗头人，劣化蛮，幼血鬼，炎魔，德雷克骑士，巴西利斯克，蜥蜴人，半人马，梅里亚/梅利亚，小巨灵，奈落裔，天人，噬魔，兽人，神形使-第一之剑/第二之剑/第三之剑，对神形使进行车卡骰点时请直接spc第一之剑/第二之剑/第三之剑\n示例：\nspc第一之剑`)
            return seal.ext.newCmdExecuteResult(true)
        }
        case"神形使":{
            seal.replyToSender(ctx,msg,`请直接spc第一之剑/第二之剑/第三之剑\n示例：\nspc第一之剑`)
            return seal.ext.newCmdExecuteResult(true)
        }
        case"人類":
        case"人类":{
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的人类各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 12d = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        }
        case"精靈":
        case"精灵":{
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的精灵各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 11d = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        }
        case"矮人":{
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的矮人各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d+6 = 技+{$ta=2d+6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+1d = 心+{$te=1d6}\n" +
                            "精神 = 心+2d+6 = 心+{$tf=2d+6}\n" +
                            "合计 = 10d+12 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        }
        case"塔比特":{
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的塔比特各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d+6 = 心+{$te=2d6+6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 9d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        }
        case"符民":{
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的符民各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+1d = 心+{$tf=1d6}\n" +
                            "合计 = 10d = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        }
        case"夢魘":
        case"梦魇":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的梦魇各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+1d = 体+{$td=1d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"暗影":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的暗影各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"龙人":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的龙人各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d+6 = 体+{$td=2d6+6}\n" +
                            "智力 = 心+1d = 心+{$te=1d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"草跑者":
        case"草原旅人":
        case"草原妖精":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的草原妖精各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+2d+6 = 体+{$td=2d6+6}\n" +
                            "智力 = 心+1d = 心+{$te=1d6}\n" +
                            "精神 = 心+2d+6 = 心+{$tf=2d6+6}\n" +
                            "合计 = 10d+12 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"海曼人":
        case"慧人":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的海曼人各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+1d = 体+{$td=1d6}\n" +
                            "智力 = 心+1d = 心+{$te=1d6}\n" +
                            "精神 = 心+1d = 心+{$tf=1d6}\n" +
                            "合计 = 8d = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"女武神":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的女武神各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+1d = 心+{$te=1d6}\n" +
                            "精神 = 心+1d+6 = 心+{$tf=1d6+6}\n" +
                            "合计 = 9d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"仙靈":
        case"仙灵":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的仙灵各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+2d+6 = 技+{$tb=2d6+6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+1d = 体+{$td=1d6}\n" +
                            "智力 = 心+1d = 心+{$te=1d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 9d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"螢石人":
        case"萤石人":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的萤石人各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+2d+6 = 体+{$tc=2d6+6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+1d = 心+{$te=1d6}\n" +
                            "精神 = 心+2d+6 = 心+{$tf=2d6+6}\n" +
                            "合计 = 11d+12 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"古貓人":
        case"古猫人":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的古猫人各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d+6 = 心+{$te=2d6+6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"黑暗矮人":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的黑暗矮人各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+1d = 体+{$td=1d6}\n" +
                            "智力 = 心+1d = 心+{$te=1d6}\n" +
                            "精神 = 心+2d+6 = 心+{$tf=2d6+6}\n" +
                            "合计 = 9d+12 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"旭日":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的旭日各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+1d+6 = 体+{$tc=1d6+6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+1d = 心+{$te=1d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 9d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"矮精靈":
        case"小矮灵":
        case"图图人":
        case"圖圖人":
        case"矮精灵":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的矮精灵各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 11d = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"魔動天使":
        case"魔动天使":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的魔动天使各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+1d+6 = 技+{$tb=1d6+6}\n" +
                            "力量 = 体+1d+6 = 体+{$tc=1d6+6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d+12 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"第一之劍":
        case"第壹之剑":
        case"第壹之劍":
        case"第一之剑":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的神形使-第一之剑（人族侧）各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"第贰之劍":
        case"第贰之剑":
        case"第二之劍":
        case"第二之剑":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的神形使-第二之剑（人族侧）各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+1d+6 = 体+{$td=1d6+6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"第叁之劍":
        case"第叁之剑":
        case"第三之劍":
        case"第三之剑":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的神形使-第三之剑（人族侧）各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+1d = 体+{$td=1d6}\n" +
                            "智力 = 心+1d+6 = 心+{$te=1d6+6}\n" +
                            "精神 = 心+1d+6 = 心+{$tf=1d6+6}\n" +
                            "合计 = 7d+12 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"冒險者":
        case"冒险者":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的人类冒险者各项基础能力值属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"技 = 2d = {$t技=2d6}\n" +
                            "体 = 2d = {$t体=2d6}\n" +
                            "心 = 2d = {$t心=2d6}\n" +
                            "合计 = 6d = {$t技+$t体+$t心}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"貴精靈":
        case"贵精灵":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的贵精灵各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 11d = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"魔焰人":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的魔焰人各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+1d+6 = 技+{$tb=1d6+6}\n" +
                            "力量 = 体+2d+6 = 体+{$tc=2d6+6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+1d+6 = 心+{$tf=1d6+6}\n" +
                            "合计 = 10d+18 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"德雷克劣民":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的德雷克劣民各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d+6 = 心+{$te=2d6+6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"黑暗巨魔":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的黑暗巨魔各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d+6 = 体+{$td=2d6+6}\n" +
                            "智力 = 心+1d = 心+{$te=1d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"拉米亞":
        case"拉米亚":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的拉米亚各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"獸化人":
        case"兽化人":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，请在灵巧、敏捷或力量中选择一项+6点，您掷出的兽化人各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d+6 = 体+{$td=2d6+6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 12d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"狗頭人":
        case"狗头人":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的狗头人各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+1d = 体+{$td=1d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"劣化蠻":
        case"劣化蛮":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的劣化蛮各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 12d = {$ta+$tb+$tc+$td+$te+$tf}\n" +
                            "劣化蛮共通种族特征-蛮族的身体：\n迦楼罗：敏捷+3、弱点：冲击属性伤害+3\n巴西利斯克：智力+3、弱点：水‧冰属性伤害+3\n人鱼：精神+3、弱点：炎属性伤害+3\n米诺陶洛斯：力量+3、弱点：魔法伤害+2\n坦诺兹：精神+3、弱点：物理伤害+2"
                        )
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"幼血鬼":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的幼血鬼各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+2d+6 = 体+{$tc=2d6+6}\n" +
                            "生命 = 体+1d = 体+{$td=1d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+1d = 心+{$tf=1d6}\n" +
                            "合计 = 9d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"炎魔":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的炎魔各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d+6 = 体+{$td=2d6+6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+1d = 心+{$tf=1d6}\n" +
                            "合计 = 10d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"德雷克騎士":
        case"德雷克骑士":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的德雷克骑士各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d+6 = 心+{$te=2d6+6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"迪亞波羅":
        case"迪亚波罗":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的迪亚波罗各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+2d+6 = 体+{$tc=2d6+6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+1d = 心+{$te=1d6}\n" +
                            "精神 = 心+1d+6 = 心+{$tf=1d6+6}\n" +
                            "合计 = 10d+12 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"巴西利斯克":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的巴西利斯克各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d+6 = 技+{$ta=1d6+6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+1d = 心+{$te=1d6}\n" +
                            "精神 = 心+1d = 心+{$tf=1d6}\n" +
                            "合计 = 9d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"蜥蜴人":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的蜥蜴人各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+1d = 心+{$tf=1d6}\n" +
                            "合计 = 10d = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"半人馬":
        case"半人马":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的半人马各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d+6 = 技+{$ta=2d6+6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+1d = 心+{$te=1d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"梅利亚":
        case"梅利亞":
        case"梅裏亞":
        case"梅裡亞":
        case"梅里亚":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的梅里亚各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+2d+6 = 体+{$td=2d6+6}\n" +
                            "智力 = 心+1d = 心+{$te=1d6}\n" +
                            "精神 = 心+1d = 心+{$tf=1d6}\n" +
                            "合计 = 7d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"獸人":
        case"兽人":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的兽人各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+1d+3 = 技+{$tb=1d6+3}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+1d+6 = 心+{$te=1d6+6}\n" +
                            "精神 = 心+1d = 心+{$tf=1d6}\n" +
                            "合计 = 8d+9 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"提恩斯":
        case"天人":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的天人各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+1d+3 = 体+{$td=1d6+3}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+2d+3 = 心+{$tf=2d6+3}\n" +
                            "合计 = 10d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"噬魔":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的噬魔各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+1d+3 = 技+{$tb=1d6+3}\n" +
                            "力量 = 体+2d+3 = 体+{$tc=2d6+3}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+1d+6 = 心+{$te=1d6+6}\n" +
                            "精神 = 心+1d = 心+{$tf=1d6}\n" +
                            "合计 = 8d+12 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"守宝妖精":
        case"小巨靈":
        case"守寶妖精":
        case"小巨灵":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的小巨灵各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+1d = 体+{$td=1d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+1d = 心+{$tf=1d6}\n" +
                            "合计 = 8d = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"奈落裔":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的奈落裔各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+1d+6 = 体+{$tc=1d6+6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+1d = 心+{$tf=1d6}\n" +
                            "合计 = 9d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"德雷克":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的德雷克各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d+6 = 心+{$te=2d6+6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"阿魯波魯":
        case"阿鲁波鲁":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的阿鲁波鲁各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+1d+3 = 体+{$td=1d6+3}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d+3 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"芭芭雅嘎":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的芭芭雅嘎各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d = 技+{$ta=2d6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+1d = 体+{$td=1d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+1d+6 = 心+{$tf=1d6+6}\n" +
                            "合计 = 8d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"蝎人":
        case"巨鼇蠍人":
        case"蠍人":
        case"巨螯蝎人":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的巨螯蝎人各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d+6 = 技+{$ta=1d6+6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"多翁":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的多翁各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+2d+6 = 技+{$ta=2d6+6}\n" +
                            "敏捷 = 技+2d = 技+{$tb=2d6}\n" +
                            "力量 = 体+1d = 体+{$tc=1d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d = 心+{$te=2d6}\n" +
                            "精神 = 心+1d = 心+{$tf=1d6}\n" +
                            "合计 = 10d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        case"徳雷克碎剑":
        case"徳雷克碎劍":{              
            switch (cmdArgs.getArgN(2)) {
                default: {
                    let val = cmdArgs.getArgN(2)||1
                    let times = parseInt(val)
                    let result = seal.format(ctx,"{$t玩家_RAW}，您掷出的徳雷克碎剑各项属性为:\n")
                    let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                    if (!parseInt(val) || parseInt(val) == 0) {
                        const ret = seal.ext.newCmdExecuteResult(true);
                        ret.showHelp = true;
                        return ret;
                    }
                    if (times >= 5) {
                        result += "制卡次数过多，请输入不大于5的数字"
                        seal.replyToSender(ctx, msg, result)
                        return seal.ext.newCmdExecuteResult(true);
                    }
                    for (let i = 0; i < times; i++) {
                        let ret = seal.format(ctx,"灵巧 = 技+1d = 技+{$ta=1d6}\n" +
                            "敏捷 = 技+1d = 技+{$tb=1d6}\n" +
                            "力量 = 体+2d = 体+{$tc=2d6}\n" +
                            "生命 = 体+2d = 体+{$td=2d6}\n" +
                            "智力 = 心+2d+6 = 心+{$te=2d6+6}\n" +
                            "精神 = 心+2d = 心+{$tf=2d6}\n" +
                            "合计 = 10d+6 = {$ta+$tb+$tc+$td+$te+$tf}")
                        result = result + ret + split
                    }
    
                    seal.vars.strSet(ctx, "$t制卡结果文本", result)
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true)
            }
        }
        } 
        
        default:{
            const ret = seal.ext.newCmdExecuteResult(true);
            ret.showHelp = true;
            return ret;
        }     
    }

};
ext.cmdMap['spc'] = cmdspc;
