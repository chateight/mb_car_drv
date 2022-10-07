radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        fwd()
    } else {
        if (receivedNumber == 1) {
            bwd()
        } else {
            rot()
        }
    }
})
function fwd () {
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 1023)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
}
function rot () {
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 1023)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P14, 1023)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
}
function bwd () {
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.analogWritePin(AnalogPin.P16, 1023)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P14, 1023)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
}
radio.setGroup(1)
