 function trader() {
    var Number(a), Number(b), Number(c),
     //  street = "#faf",
     //   a = street.charCodeAt(1),
     //   b = street.charCodeAt(2),
     //   c = street.charCodeAt(3),
        n = Math.floor(Math.random() * 10);
                
    if (n <= 3){ 
console.log(0);
        
        while (a < 47 && b < 47 && c < 47) { a = 47; b = 47; c = 47; console.log(a,b,c);}
        
        
        if (a != 57 && a <= 101) { a++; }
            else { a = (a == 57) ? 97:48; }
        console.log(a);
    }
    else if (3 < n && n <= 6) {
  
        console.log(1);

        if (b != 57 && b <= 101) { b++;}
            else if (b == 57) {
                 b = 97;
            } else {
                    b = 48;          
                } 
        console.log(b);
}
        
    else if (6 < n) {
      
        console.log(2);
        
        if (c != 57 && c <= 101)  { c++; }
            else if (c == 57) {
                    c = 97; 
            } else {
                    c = 48;
              }
        console.log(c);
    }

    document.getElementById('insane').style.backgroundColor = "#" + String.fromCharCode(a) + String.fromCharCode(b) + String.fromCharCode(c);
       console.log("here");
   }
      document.getElementById("bkg").addEventListener("click", function(){ trader(); } ); 

console.log('%c nice text %c error text','color:#28f','color:#f45' );