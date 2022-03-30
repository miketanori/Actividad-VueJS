var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Turismo en Monterrey'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        bucl:[
            { message:"Parque Fundidora"  },
            { message:"Museo Marco" },
            { message:"Parque Ecológico Chipinque" },
            { message: "Paseo Santa Lucía" },
            { message: "Bioparque Estrella" },
        ]
    }
  })


var app3 = new Vue({
    el: '#hide',
    data: {
      isHidden: false,
      imag: GetRandomImage()
    }
  })


function GetRandomImage(){
    let picturePath = ''
    let imageBank = ['https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fstatic1.makeuseofimages.com%2Fwordpress%2Fwp-content%2Fuploads%2F2015%2F09%2Flearn-music.jpg&f=1&nofb=1','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.incimages.com%2Fuploaded_files%2Fimage%2F1920x1080%2Fgetty_636337794_372776.jpg&f=1&nofb=1','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.mypetzilla.co.uk%2Ffiles%2F2515%2F4177%2F7324%2FMaltipoo_Dog.jpg&f=1&nofb=1','https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapercave.com%2Fwp%2FYy1rcP0.jpg&f=1&nofb=1']
    picturePath += imageBank[Math.floor(Math.random()* imageBank.length)]
    return picturePath
}

var detalle = new Vue({
    el: '#detalle',
    data: {
        name: 'Miguel Tanori',
        date: '29 de marzo de 2022',
    } 
})

var mensaje = new Vue({
    el: '#mensaje',
    data: {
        message: ''
    } 
})