function blinkenRechts () {
    calliBot2.setLed(C2Motor.rechts, true)
    basic.pause(400)
    calliBot2.setLed(C2Motor.rechts, false)
    basic.pause(400)
}
input.onButtonEvent(Button.A, input.buttonEventClick(), function () {
    status = false
    rechts = false
    links = false
})
function blinkenLinks () {
    calliBot2.setLed(C2Motor.links, true)
    basic.pause(400)
    calliBot2.setLed(C2Motor.links, false)
    basic.pause(400)
}
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    status = true
})
let links = false
let rechts = false
let status = false
status = false
rechts = false
links = false
basic.forever(function () {
    if (status == true) {
        if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell) == true && calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.hell) == true) {
            rechts = false
            links = false
            calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
            calliBot2.motor(C2Motor.beide, C2Dir.rueckwaerts, 50)
            basic.pause(200)
        } else if (calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.hell) == true) {
            links = true
            rechts = false
            calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 30)
            calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 100)
        } else if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell) == true) {
            links = false
            rechts = true
            calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 100)
            calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 30)
        } else {
            rechts = false
            links = false
            calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 100)
        }
    }
})
basic.forever(function () {
    if (links == true) {
        blinkenLinks()
    } else if (rechts == true) {
        blinkenRechts()
    } else {
    	
    }
})
