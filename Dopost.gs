function doPost(e) {
  if (e == null || e.postData == null || e.postData.contents == null) return
  let requestJSON = e.postData.contents
  let requestObj = JSON.parse(requestJSON)
  let text = requestObj.content.text // 応答メッセージ（今回はオウム返し）

  let env = getEnv_()
  env.userId = requestObj.source.userId

  // LINE WORKS にメッセージを送信
  LINEWORKS.userMessageSend(env, text)
}

function getEnv_() {
  return {
    CLIENT_ID: "dUDPcaaZ4G7f97o5uwDX",
    CLIENT_SECRET: "7u97iaevvL",
    SERVICE_ACCOUNT: "lm8ym.serviceaccount@styleartscorporation",
    PRIVATE_KEY: "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCZWeYmeyC7ZCFM/hjmZyIrAaqI3rvLaQltrPIUDvrEvavvNTYEa9+rAloclbJM9t2bBCpq04z683dmNe7MKDmB1hmtV387G9HRrBDQU/PeJAIUzN5Or6w0wfdvxqOtQ4yF1xOTTAtg+j4bpQrvXj2Mag8LmktboYSnPs5jJC7aPSkSx3ynEKhGFSXlmtytzhsfnMuHFSSoyr036XKOSFJadiKy8D2DQJRtP0joB1phPdbrzkDk7J7dqbmrD90eW/h/toazRkAx4IRT74v/9bfZOJTXWZEq4EmFNhFxGWMrzD+ynlQLiamkFTU3gzT6lZcvSCEu+o+Np4jWopSJTBrxAgMBAAECggEAKtY8/zTX4ODImJxGUl4u4jqV66Pka57MvnFYMhg5HqopFCoWC8gic7+1clSyuOMg5kOUocC0mglWqhuYuDjoT4eCJrTRWq6bvulEzR0We1AtsKfF1c8m2JnyR6wCXs0GvQBmfHf6mb1tigVhd5oosUeTKleQg2ksCBf4SSN7XwTVty7DqIMpxH2QcV8/C+5WbLBbk+yekzis6Ys40pNIslP+z0B2LRsbz58qpjHX5FOs7SkUlUkProt2jwfO9jpOJEZtlxn9ku9MUDedIhF9dhlxCS9ZVBXp22RFFHTYUwj/81sQT0tvW1r9rDscYbyMS1v4OJrTS8n92W2K1Kuk0QKBgQDUI9cDXZxiNW35+XK89mNgN4e6oCXO0R7fiMYO10I6kcYIDYehA+fSemvxs3X4yOKHDWZ80jsSngoO6oyRHW5X5/p2n07U4wUk0jtwS8hQNmvJsRrbMYFwlhPiLaRu6fLwk+tYfW10th8Ai48Rl3/BJq0HhdvRF4nDYNhF/5N+XQKBgQC5Dnrb4d2C4pYDtMkZQOZFdPipToYH6dUsCCgf93WU0Vy0B7XdirKP7rqHnKfk0OYf9nw2tNqQBAJSGi9zWnLC29PPHb85HxqzrnPVibbNLW+aqLjA6tL0feQ+ft/uw2dMyyyW+qtc7QixHBeXplypxsRNWbS08aFnuKs+zaW9pQKBgF/1mlQWax/thULW+HTLiyZB2C6uNIv6AlohF14tNvMhb4/C9v/5sUp/QAbEI/AWhomKoTqDKl+Ah5I5vL4Drx8qexxfcZxQ2MnQIzznusO16koAx+Iw4ZlY+cOM292kC9WRQ5rymal6nEl115CglBR99zT48vcBC7sKOqpnMoOtAoGAKiQN/jx1APUwTC/DC6knxvFYHtXu16Z8EMbavEzRzc3PWn/W/lgzSWuHtpIJ+aVIgkbTCnIsw1bmYGPuIkqaj50XoraXcR6QKhKz9hCiPB74pzN8vxG6cEqqy0CBJhIBWA98W/VBSKwBqrNG/BW6TD8jPKoM6JeNtdzrwiV6dLECgYA5mmbfMtI4+oLqqj2nUvfaZzgSDuQG/x2uMiqjUoNzEPhjN9bjR6P2xC0jWwmOaXL2pM1kDVJrxBY4JxLShonUchXWb6qGqdZavL+mqznkMx7XKgDFbjH9nMtsPMfHQCEb4reJZbDOBHvU+Mk8sxE0lXl7JBOFxBJmevLxmb+fnw==\n-----END PRIVATE KEY-----",
    DOMAIN_ID: 500077108,
    ADMIN_ID: "ueda.negotiation@styleartscorporation",
    BOT_ID: 1418096
  }
}

function createBot() {
  let env = getEnv_()
  env.BOT_ID= LINEWORKS.qiitaSampleBotCreate(env).botId
  LINEWORKS.qiitaSampleBotDomainRegister(env)
  Logger.log("BOT_ID: " + String(env.BOT_ID))
}