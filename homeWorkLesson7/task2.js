function bla (num) {
    console.log (num)

    if (num > 0) {
        bla (num-1)
    }     
}
bla(5)