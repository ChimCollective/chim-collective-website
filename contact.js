console.log('It works')
$(document).ready(function () {
   $('.submit').click(function (event) {
     event.preventDefault()
     console.log('Clicked Button')

     var Name = $('.Name').val()
     var Email = $('.Email').val()
     var Phone number = $('.Phone number').val()
     var Message = $('.Message').val()
     var statusElm = $('.status')
     statusElm.empty()
     if(Email.length>5 && email.includes('@'') && email.includes('.')){
      statusElm.append('<div>Email is valid </div>')
      }else {
        statusElm.append('<div>Email is not valid </div>')
      }
      if(Name.length>=2){
       statusElm.append('<div>name is valid </div>')
       { else {
         statusElm.append('<div>name is not valid </div>')
       }
      if(Phone number.length>=9){
        statusElm.append('<div>phone number is valid </div>')
        { else {
          statusElm.append('<div>phone number is not valid </div>')
        }
   })
})
