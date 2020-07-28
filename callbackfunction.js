function welComeGuest(name, greetHandler){
    greetHandler(name)
}
    

 var actorsName = 'tom Hanks';

 function greetmorning ( name){
     console.log('good morning' , name);
 }
  welComeGuest ( actorsName, greetmorning);
  
  welComeGuest ( 'shakib khan' , function(name){
      console.log('special welcome' , name);
  })