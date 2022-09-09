const accessToken = "jp2AAABH6s3Ku5XtKaFTNHyQOmMvoUpZjon0NDiJMVvHbbFNhIUb7xtK7C1dMd6zKakc/2E7kQgbzogUSQ+c8pCXrwZ913/FmRXE710cEq9pv69O8ARgp84g/SKL0aZb9cfQnC6vppoAwPyUwlfL9hPM5kcCK4MDYc1DtSakRtpYVZ7lNMgVwdQl9rwqvwJhdvFJ9UOKj0XI5i+NBXVFeaidhTKhS8S5spQ+Yo51lYXVdLCoQPhZxw7vK9oVzXxPRxF/SkVFe5jR9TPci3HU87HXqa8/CUqFwTnnxLK4IGrDQ1G1Xv47f5AKJQClHZ5rIiayGba1oBTQtFqDHNQ6Edaje0urnu31d5uQKDMUWbjyiaogAOxNFrDf/ToXX1ejMrv4mSm5Q=="

const botId = "1418096"

function group_register() {
  const url = 'https://www.worksapis.com/v1.0/bots/1418096/channels'
  const options = {
    method: 'post',
    headers: {
      'Authorization': `Bearer ${accessToken}`,
      'Content-Type': 'application/json'
    },
    payload: JSON.stringify({
      
        "members": [
          "ueda.negotiation@styleartscorporation", "shain@styleartscorporation"
        ],
        "title": "Example title"
      
    })
}

const response = UrlFetchApp.fetch(url, options);

Logger.log(response)
}