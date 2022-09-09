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