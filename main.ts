radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        fwd()
    } else if (receivedNumber == 1) {
        bwd()
    } else {
        rot(1)
    }
})
function fwd () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # .
        # . . . .
        # . . . .
        `)
    pins.digitalWritePin(DigitalPin.P15, 1)
    pins.analogWritePin(AnalogPin.P16, 1023)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P14, 1023)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
}
function rot (数値: number) {
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 1023)
    pins.digitalWritePin(DigitalPin.P13, 1)
    pins.analogWritePin(AnalogPin.P14, 1023)
    basic.pause(数値 * 250)
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
}
control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_EVT_ANY, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    rot(1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    control.reset()
})
function bwd () {
    basic.showLeds(`
        # # # # .
        # . . . #
        # # # # .
        # . . . #
        # # # # .
        `)
    pins.digitalWritePin(DigitalPin.P15, 0)
    pins.analogWritePin(AnalogPin.P16, 1023)
    pins.digitalWritePin(DigitalPin.P13, 0)
    pins.analogWritePin(AnalogPin.P14, 1023)
    basic.pause(500)
    pins.analogWritePin(AnalogPin.P16, 0)
    pins.analogWritePin(AnalogPin.P14, 0)
}
radio.setGroup(1)
pins.setEvents(DigitalPin.P0, PinEventType.Pulse)
