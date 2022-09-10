function myFunction() {

let text = ss()

console.log(text)

  const options = {
    payload: JSON.stringify({

      'content': {
        'type': 'text',
        'text': text
        //すぷしの関数
      }

    })
  }


console.log(options)




}

function test(){

  let sheet_data = SpreadsheetApp.openById(SHEET_ID).getSheetByName('accessToken');
  let lastrow = sheet_data.getLastRow()
  let getdata = sheet_data.getRange(`A${lastrow}`).getValues()

  //文字列型へ変換
  let tostr_getdata = getdata[0].toString() 

  //console.log(tostr_getdata)
}