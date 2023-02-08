radio.onReceivedNumber(function (receivedNumber) {
    TEMPERATURA_EXTERIOR = receivedNumber
})
input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
let TEMPERATURA_EXTERIOR = 0
radio.setGroup(2)
