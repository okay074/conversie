input.onButtonPressed(Button.A, function () {
    binair = "" + binair + "1"
})
function converteer (binairgetal: string) {
    totaal = 0
    for (let index = 0; index <= binairgetal.length - 1; index++) {
        totaal = totaal + 2 ** (index + parseFloat(binairgetal.charAt(index)))
    }
    return totaal
}
input.onButtonPressed(Button.AB, function () {
    omgekeerde_tekst = keerom(binair)
})
input.onButtonPressed(Button.B, function () {
    binair = "" + binair + "0"
})
function som (getal1: number, getal2: number) {
    uitkomst = getal1 + getal2
    return uitkomst
}
function keerom (input2: string) {
    omgekeerd = ""
    for (let waarde of input2) {
        omgekeerd = "" + waarde + omgekeerd
    }
    return omgekeerd
}
let omgekeerd = ""
let uitkomst = 0
let omgekeerde_tekst = ""
let totaal = 0
let binair = ""
binair = ""
