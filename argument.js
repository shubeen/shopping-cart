function getFullName(){
     
    var fullName = ' ';
    for (i=0; i< arguments.length; i++){
        var namePart = arguments[i];
        fullName = fullName + ' ' + namePart;
    }

    return fullName;
}
    
var name = getFullName( 'omuk', 'bin', 45 ,'hanif' ,'sonket', 'poribohon', 'upostapok', 'comedian');
console.log(name);