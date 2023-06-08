//add(first, second) /* adição de dois números */
//sub(first, second) /* subtração de dois números */
//mul(first, second) /* multiplicação de dois números */
//div(first, second) /* divisão de dois números */
//is_even(number)    /* verificação de que um número é par */

function add(first,second){
    return first+second;
}

function sub(first,second){
    return first-second;
}

function mul(first,second){
    return first*second
}

function div(first,second){
    return first/second
}

function is_even(number){
    if (number%2==0){
        return true
    }
    else{
        return false
    }
}

