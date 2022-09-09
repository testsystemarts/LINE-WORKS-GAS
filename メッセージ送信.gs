function ReplyTalkroom() {

  //必要な情報 
  const channelId = "150268941"
  const botId = "1418096"
  const url = `https://www.worksapis.com/v1.0/bots/${botId}/channels/${channelId}/messages`

  //SSで参照した文字列
  let text = ss()

  const options = {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    payload: JSON.stringify({

      'content': {
        'type': 'text',
        'text': text
        //すぷしの関数
      }

    })
  }

  const response = UrlFetchApp.fetch(url, options);

}
