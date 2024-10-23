basic.forever(function () {
    if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell) == true && calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.hell) == true) {
        calliBot2.motorStop(C2Motor.beide, C2Stop.Bremsen)
        calliBot2.motor(C2Motor.beide, C2Dir.rueckwaerts, 50)
        basic.pause(200)
    } else if (calliBot2.readLineSensor(C2Sensor.rechts, C2SensorStatus.hell) == true) {
        calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 30)
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 100)
    } else if (calliBot2.readLineSensor(C2Sensor.links, C2SensorStatus.hell) == true) {
        calliBot2.motor(C2Motor.links, C2Dir.vorwaerts, 100)
        calliBot2.motor(C2Motor.rechts, C2Dir.vorwaerts, 30)
    } else {
        calliBot2.motor(C2Motor.beide, C2Dir.vorwaerts, 100)
    }
})
