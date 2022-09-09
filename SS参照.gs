let SHEET_ID = "1LKoTsQ0Pm9nHtOiu6uanajNbbbXtgzsrQhp3NoHooqs"

function ss() {
  var sheet_data = SpreadsheetApp.openById(SHEET_ID).getSheetByName('order');
  
  //最終行を取得している
  lastdata = sheet_data.getLastRow();
  console.log(lastdata)

  //最終行の値を取得
  lastdataUser = sheet_data.getRange(lastdata, 3).getValue() + "さんが注文しました"

return lastdataUser

}
