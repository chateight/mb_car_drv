def on_received_number(receivedNumber):
    if receivedNumber == 0:
        fwd()
    elif receivedNumber == 1:
        bwd()
    else:
        rot()
radio.on_received_number(on_received_number)

def fwd():
    pins.digital_write_pin(DigitalPin.P15, 0)
    pins.analog_write_pin(AnalogPin.P16, 1023)
    pins.digital_write_pin(DigitalPin.P13, 0)
    pins.analog_write_pin(AnalogPin.P14, 1023)
    basic.pause(500)
    pins.analog_write_pin(AnalogPin.P16, 0)
    pins.analog_write_pin(AnalogPin.P14, 0)
def rot():
    pins.digital_write_pin(DigitalPin.P15, 0)
    pins.analog_write_pin(AnalogPin.P16, 1023)
    pins.digital_write_pin(DigitalPin.P13, 1)
    pins.analog_write_pin(AnalogPin.P14, 1023)
    basic.pause(500)
    pins.analog_write_pin(AnalogPin.P16, 0)
    pins.analog_write_pin(AnalogPin.P14, 0)
def bwd():
    pins.digital_write_pin(DigitalPin.P15, 1)
    pins.analog_write_pin(AnalogPin.P16, 1023)
    pins.digital_write_pin(DigitalPin.P13, 1)
    pins.analog_write_pin(AnalogPin.P14, 1023)
    basic.pause(500)
    pins.analog_write_pin(AnalogPin.P16, 0)
    pins.analog_write_pin(AnalogPin.P14, 0)
radio.set_group(1)