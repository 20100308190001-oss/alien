input.onGesture(Gesture.Shake, function () {
    strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
})
let strip: neopixel.Strip = null
basic.showLeds(`
    # . # . #
    # . # . #
    # # # . #
    # . # . #
    # . # . #
    `)
basic.forever(function () {
    music.play(music.stringPlayable("C5 A F D F A C5 D ", 150), music.PlaybackMode.UntilDone)
})
