// Napisati funkciju koja uklanja sve falsy vrijednosti iz niza 
function bouncer(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 0 || Number.isNaN(arr[i]) || arr[i] == null || arr[i] == false || arr[i] == "" || arr[i] == undefined) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}

//console.log(bouncer([7, NaN, "ate", "", false, 9]));


// Napisati funkciju koja vraća najmanji indeks na čijoj poziciji treba da se doda vrijednost (drugi argument) u niz (prvi argument) koji treba da ostane sortiran 
function lowestIndex(arr,num){
    arr.sort(
        function(firstNumber,secondNumber){
            return firstNumber-secondNumber;
        }
    );
    
    for (var i in arr){
        if(arr[i]>num){
            arr.splice(i,0,num);
            return i;
            var exists=true;
        }
    }
    if(exists===false){
        i=arr.length;
        arr.splice(i,0,num);
        return i;
    }
   
    
}
/*
console.log(lowestIndex([1,2,3,4], 1.5));
console.log(lowestIndex([20,2,3], 19));
*/


//3. Napisati funkciju koja razbija niz (prvi argument) na grupe dužine zadate kao drugi argument funkcije i vraća novi 2D niz. 
function break_down(arr,arrLen){
    var matrix=[[],[]];
    if(arr.length===arrLen){
       for (let i in matrix){
           matrix[i]=arr.slice();
       }
    }
    else if(arr.length > arrLen){
        matrix[0]=arr.slice(0,arrLen);
        if(2 * arrLen < arr.length){
            matrix[1]=arr.slice(arrLen,arrLen+arrLen);
        }
        else if(2 * arrLen > arr.length){
            //matrix[1]=arr.slice(arrLen-1,0,arr[arrLen-1]);
            matrix[1]=arr.slice(arrLen-(arr.length-(arrLen-1)),arr.length);
            //matrix[1]=arr.slice(arrLen,arr.length);
        }
    }
    return matrix;
}
/*
console.log(break_down([1,2,3],3));
console.log(break_down([1,2,3,4], 3));
console.log(break_down([1,2,3,4,5,6,7],3));

*/


/*Napisati program koji za n elemenata niza (brojevi od 1 do n) generiše parove tako da se niti jedan od elemenata koji je već u paru ne ponovi više ni u 
jednom paru. Npr. (1,4), (2,3), (5,8) su ok, ali (1,6) nije jer je 1 već u paru sa 4, (2,5) takođe nije jer je 2 u paru sa 3, a 5 u paru sa 8. 
*/
function generatePairs(arr){
    if(arr.length % 2 == 0){
        
        while(arr.length>0){
            var prvi = Math.floor(Math.random()* arr.length + 1);
            var drugi = Math.floor(Math.random()* arr.length + 1);
            while(prvi===drugi)
                drugi = Math.floor(Math.random()* arr.length);
                
            let indexPrvog = arr.indexOf(prvi);
            arr.splice(indexPrvog,1);
            let indexDrugog = arr.indexOf(drugi);
            arr.splice(indexDrugog,1);
            if(indexPrvog!=-1 && indexDrugog!=-1)
                console.log("(" + prvi + ", " + drugi +")");
        }
    }else
        console.log("Duzina niza je neparna");
}
//console.log(generatePairs([1,2,3,4,5,6]));


// Napisati funkciju koja provjerava da li se string (prvi argument funkcije) završava sa target stringom 
function endWithString(str1,str2){
    return str1.substr(str1.length-str2.length,str1.length)===str2 ? "String 1 se zavrsava stringom 2" : "string1 se ne zavrsava stringom 2";
}
/*
console.log(endWithString("andrea","ea"));
console.log(endWithString("kokos","oso"));
*/

//Napisati funkciju koja skraćuje string (prvi argument) do unijete dužine (drugi argument).
function cutString(str, len){
    return str.slice(0,len);
}
//console.log(cutString("jagoda",4));

// Narcissistic Number je broj čija suma cifara (tog broja) stepenova sa njegovim brojem  cifara daje isti taj broj. 
function narcisticNum(num){
    let brCifara=0;
    let copyNum = num;
    let copy2=num;
    let sum=0;
    
    while(copy2>0){
        copy2=Math.floor(copy2 / 10);
        brCifara++;
    }
    let br=brCifara;
    console.log(brCifara);
    while(br>0){
       sum += Math.pow(copyNum%10,brCifara);
       console.log(sum);
       copyNum = Math.floor(copyNum/10);
       br--;
    }
    if(num===sum)
        return true;
    else return false;
}
//console.log(narcisticNum(153));

//Napisati program koji provjerava da li se zadati broj nalazi u zadatom  segmentu.
function insideSeg(a,b,num){
    return num >= a && num <= b ? true : false;
}
/*
console.log(insideSeg(3,10,5));
console.log(insideSeg(-10,13 ,-25));
*/

//Napisati program koji za unijeti URL (string), izvlači (parsira) samo domain name i vraća ga kao string. Pretpostaviti da korisnik unosi ispravan URL. 
function get_domain(url){
    var urlParts = url.replace('http://','').replace('https://','').split(/[/?#]/);
    var domain = urlParts[0];
    return domain;
}
//console.log(get_domain("http://scratch99.com/web-development/javascript/how-to-get-the-domain-from-a-url/"));

/*
Dječakov put od škole do kuće je dug. Da bi mu bilo interesantnije, odlučio je da sabira sve brojeve kuća (na svakoj kući piše adresa, tj. broj) pored kojih prođe dok ide do kuće.
 Nažalost, nemaju sve kuće brojeve na njima, a osim toga dječak redovno mijenja ulice, tako da se brojevi ne pojavljuju u nekom definisanom redosledu. U jednom momentu tokom šetnje, 
 dječak naiđe na  kuću na kojoj piše 0, što ga je iznenadilo toliko da je zaboravio (prestao) da sabira brojeve nakon što je naišao na ovu kuću. Za zadati niz kuća 
 (svakaidentifikovana sa brojem) odrediti zbir koji je dječak dobio
*/
function sum(arr){
    let sum=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]!=0)
            sum+=arr[i];
        else
            break;
    }
    return sum;
}
//console.log(sum([5, 1, 2, 3, 0, 1, 5, 0, 2]));