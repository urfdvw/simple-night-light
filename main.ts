pixel.setColor(0xff00ff)
forever(function () {
    if (pins.A1.analogRead() > 900) {
        pixel.setBrightness(20)
    } else {
        pixel.setBrightness(0)
    }
})
