// ==UserScript==
// @name         六版人物卡作成
// @author       Director259
// @version      1.0.1
// @description  coc6版规则人物作成，基于szz的ark人物卡做成修改而成，使用方式: .coc6 (<数量>)
// @timestamp    1673598189
// @license      MIT
// @homepageURL  https://github.com/Szzrain
// ==/UserScript==
if (!seal.ext.find('coc6dice-roll')) {
    const ext = seal.ext.new('coc6dice-roll', 'domoki', '1.0.0');
    // 创建一个命令
    const cmdark = seal.ext.newCmdItemInfo();
    cmdark.name = 'coc6th';
    cmdark.help = '使用说明:.coc6th (<数量>) // 制卡指令，返回<数量>组人物属性';
    cmdark.solve = (ctx, msg, cmdArgs) => {
        let val = cmdArgs.getArgN(1)
        switch (val) {
            case 'help': {
                const ret = seal.ext.newCmdExecuteResult(true);
                ret.showHelp = true;
                return ret;
            }
            default: {
                let times = parseInt(val)
                let result = seal.format(ctx,"{$t玩家_RAW}的六版COC人物做成:\n")
                let split = seal.formatTmpl(ctx, "COC:制卡_分隔符")
                if (!parseInt(val) || parseInt(val) == 0) {
                    const ret = seal.ext.newCmdExecuteResult(true);
                    ret.showHelp = true;
                    return ret;
                }
                if (times >= 10) {
                    result += "制卡次数过多，请输入不大于10的数字"
                    seal.replyToSender(ctx, msg, result)
                    return seal.ext.newCmdExecuteResult(true);
                }
                for (let i = 0; i < times; i++) {
                    let ret = seal.format(ctx,
                        "力量:{$t力量=3d6} 体质:{$t体质=3d6} 体型:{$t体型=2d6+6}\n" +
                        "敏捷:{$t敏捷=3d6} 外貌:{$t外貌=3d6} 智力:{$t智力=2d6+6}\n" +
                        "意志:{$t意志=3d6} 教育:{$t教育=3d6+3} 理智:{$t理智=$t意志*5}\n" +
                        "HP:{$tHP=($t体质+$t体型)/2} 总和:{$t总和=$t力量+$t体质+$t体型+$t敏捷+$t外貌+$t智力+$t意志+$t教育} 资产:{$t资产=1d10}"
                        )
                    result = result + ret + split
                }

                seal.vars.strSet(ctx, "$t制卡结果文本", result)
                seal.replyToSender(ctx, msg, result)
            }
        }
        return seal.ext.newCmdExecuteResult(true);
    }
    // 注册命令
    ext.cmdMap['coc6th'] = cmdark;

    // 注册扩展
    seal.ext.register(ext);
}
