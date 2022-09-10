function ReplyTalkroom() {

  //アクセストークン
  let accessToken = getAccessToken()

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

function getAccessToken() {
  let sheet_data = SpreadsheetApp.openById(SHEET_ID).getSheetByName('accessToken');
  let lastrow = sheet_data.getLastRow()
  let getdata = sheet_data.getRange(`A${lastrow}`).getValues()

  //文字列型へ変換
  let tostr_getdata = getdata[0].toString() 

  return tostr_getdata
}