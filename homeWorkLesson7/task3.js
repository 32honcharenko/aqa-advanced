function divide (numerator, denominator) {
    
    try {
    if (typeof denominator !== 'number' || typeof numerator !== 'number') {
        throw new Error("The value is not a number")
    }

    if (denominator === 0 ) {
        throw new Error("Sorry denominator = 0")
    }
    return numerator / denominator
        }
     
    catch (error) {
        console.log ("Error:", error.message)
        return null
    } 
        
    finally{
        console.log (`Робота завершена`)
    }
}



try {
    console.log(divide(8, 2));    // Виведе результат ділення (4)
} catch (error) {
    console.error("Error:", error.message);
} 

try {
    console.log(divide(8, 0));    
} catch (error) {
    console.error("Error:", error.message);
}

try {
    console.log(divide(8, "asda")); 
} catch (error) {
    console.error("Error:", error.message);
} 

try {
    console.log(divide("asda", 8)); 
} catch (error){
    console.error("Error:", error.message);
} 
