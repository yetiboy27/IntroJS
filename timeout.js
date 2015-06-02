var log = function(){
    console.log('hi!')
}

// setTimeout(log, 2000)


var intervalID = setInterval(log, 2000)
clearInterval(intervalID)



$('#myElement').addClass('moving')

setTimout(function(){
    setTimeout(function(){
        
    })
    $('#myElement').removeClass('moving')
}, 2000)