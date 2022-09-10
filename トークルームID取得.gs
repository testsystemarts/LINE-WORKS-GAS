// const accessToken = "jp2AAABIYzX8M0ok19Q8N73+px2m0FJ0zU9x8bPDeUmuBwNMk8A6bFo0tL549d14NXLfZ/O4bfOoW7D2YCsiGmWqEpFDkzb+8Qk2KO4KuH328UTOQv7zwhDss8hsq0C+VhtmBiI3qqLXMJQeLyyDnisQl64SVOOSY/0se9nkIQnVcpFyg5kFgyQj4jOz/be4bAzQIiApGHTKdDdFjwrLBDf5xulv+YrIYXXhZwZNzKYB3L/AeJH0ESdnmOeAMeg33L3Kz9vB9UUlleVfiTej8pyh0BRGjrt+aaj9w4OXpww9rvWAJ/2yrg1DjegsPXCWfa7VsWE8U6LX49XCC4jkWfznv2pDGc78Txd6vBtVUDUhvtLLLEX09a7ROG7kXFEqNPpfhrUgxUzRPns8WMVihxujcBBTqI="

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