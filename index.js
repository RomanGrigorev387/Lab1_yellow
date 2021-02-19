



backPack = getUserInput()
dataWorks(backPack)
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
        return -10
    }
    
}

function output(backPack){
    if(backPack == -9){
        console.log("Error: Invalid arguments")
    }
    else if(backPack == -10){
        console.log("Error: Invalid arguments count")
    }
    else{
        console.log("All pass")
    }
    
}

function dataWorks(backPack){
    var buyPrice = []
    var beginPrice = []
    var endPrice = []
    
    for(k = 0; k < backPack.length; k=k+3){
        buyPrice.push(backPack[k])
    }
    for(k = 1; k < backPack.length; k=k+3){
        beginPrice.push(backPack[k])
    }
    for(k = 2; k < backPack.length; k=k+3){
        endPrice.push(backPack[k])
    }
    console.log("Закупочные цены:   " + buyPrice + "\nНачальные цены:    " + beginPrice +  "\nКонечные цены:     " + endPrice)
}