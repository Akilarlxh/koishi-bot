// 如果收到“天王盖地虎”，就回应“宝塔镇河妖”
module.exports = (ctx) => {
  ctx.middleware((session, next) => {
    if (session.content === '天王盖地虎') {
      session.send('宝塔镇河妖')
    }
    return next()
  })
  ctx.middleware((session, next) => {
    // 仅当接收到的消息包含了对机器人的称呼时才继续处理（比如消息以 @机器人 开头）
    if (session.parsed.appel) {
      return session.send('是你在叫我吗？发送【提问清单】可以获取所有目前已知的提问内容')
    } else {
      // 如果去掉这一行，那么不满足上述条件的消息就不会进入下一个中间件了
      return next()
    }
  })
}
