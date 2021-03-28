//Заккоментированные строчки - обработка ошибки

// const error = true
const error = false 


const dataFromMars = [
  {
    date: '1 июля 2020 г.',
    temperature: '-70,7 ° F',
    windspeed: '11,5 миль/ч',
    pressure: '766,9  ПА',
  },
  {
    date: '2 июля 2020 г.',
    temperature: '-69,6 ° F',
    windspeed: '10 миль/ч',
    pressure: '765  ПА',
  },
]

async function postData(data) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      dataFromMars.push(data)
      if (!error){
          resolve()
      } else {
          reject('500 Internal Server Error')
      }
    }, 1500)
  })
  const res = await promise
}

function getData() { 
    let i = 0
    
  setTimeout(() => {
      dataFromMars.forEach((dataFromMars) => {
          let newCard = document.createElement('div')
          newCard.setAttribute('id', i+'100')
          newCard.className = 'card'
          newCard.innerText= 'Date: ' + dataFromMars.date + ' ' + 'Temperature: ' + ' ' + dataFromMars.temperature + ' ' + 'Windspeed: ' +  ' ' + dataFromMars.windspeed + ' ' + 'Pressure: ' + dataFromMars.pressure
          document.querySelector('body').append(newCard)
          
          
          
          let newButton = document.createElement('button')
          newButton.setAttribute('id', i + '200' )
          let textInNewButton = document.createTextNode('Отправить');
          newButton.appendChild(textInNewButton);
          document.getElementById(i+'100').append(newButton);
            newButton.onclick = sendingData(i+'100')
          
          
        i++
    })
  }, 1000)
}

postData(
  {
    date: '3 июля 2020 г.',
    temperature: '-70,7 ° F',
    windspeed: '11,5 миль/ч',
    pressure: '766,9  ПА',
  }
).then(getData)
.catch( error => {
    let err = document.createElement('p')
    err.setAttribute ('id', 'error')
    err.innerText = error
    document.querySelector('body').append(err)
})


function loading(){
    let loader =  document.createElement('div')
    loader.className = 'preloader'
    loader.setAttribute('id' , 'loader')
    document.querySelector('body').append(loader)
    let preloader = document.createElement('div')
    preloader.className ='preloader__image'
    preloader.setAttribute('id', 'preloader')
    document.getElementById('loader').append(preloader)

    setTimeout(() => {
    document.getElementById('loader').remove()  
    }, 2500);
}
loading()


function sendingData(k){
    if (k===0200){
        const {date, ...otherData} = dataFromMars[0]
        console.log(date, otherData)
    } if (k===1200){
        const {date, ...otherData} = dataFromMars[1]
        console.log(date, otherData)
    }if (k===2200){
        const {date, ...otherData} = dataFromMars[2]
        console.log(date, otherData)
    }
}



document.addEventListener('click',function(e){
    if(e.target && e.target.id== '0200'){
         sendingData(0200)
     } if(e.target && e.target.id== '1200'){
        sendingData(1200)
    } if(e.target && e.target.id== '2200'){
        sendingData(2200)
    } 
 });
