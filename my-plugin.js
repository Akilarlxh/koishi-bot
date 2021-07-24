// 如果收到“天王盖地虎”，就回应“宝塔镇河妖”
module.exports = (ctx) => {
  ctx.middleware((session, next) => {
    if (session.content === '天王盖地虎') {
      session.send('宝塔镇河妖')
    }
    return next()
  })
}
