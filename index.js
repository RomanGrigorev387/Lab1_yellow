

backPack = getUserInput()
output(backPack)

function getUserInput(){
    let i = 2
    let currencyBag = []
    //Внесение значений в массив
    while(process.argv[i] != undefined)
    {
        currencyBag[i] = process.argv[i]
        i++
    }
    //Проверка на нули и отрицательные значения
    for(k = 0; k < currencyBag.length; k++){
        if (currencyBag[k] <= 0){
            return -9
            break
        }
    }
    //Проверка количества аргументов
    currencyBag.splice(0,2)
    invalidCountElementCheck = currencyBag.length / 3

    if( Number.isInteger(invalidCountElementCheck) == true)
    {
        return currencyBag
    }
    else
    {
        return -9
    }
    
}

function output(backPack){
    if(backPack == -9){
        console.log("Error: Invalid arguments")
    }
    else{
        console.log(backPack)
    }
    
}