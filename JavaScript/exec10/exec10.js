//função
function fatorial (n){
    if(n == 0){
        return 1;
    }else{
        return (n * fatorial(n -1))
    }
}
//fatorial 1 = 1
//fatorial 5 = 120