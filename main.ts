input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 2; index++) {
        let Score = 0
        basic.showString("" + (Score))
    }
})
radio.onReceivedValue(function (name, value) {
    if (name.substr(0, 4) == "M-SP") {
        music.play(music.stringPlayable("E A D F E G F - ", 240), music.PlaybackMode.UntilDone)
        datalogger.log(datalogger.createCV("Microbits-passed", value))
    }
})
datalogger.setColumnTitles("Microbits-passed")
datalogger.includeTimestamp(FlashLogTimeStampFormat.None)
let idx = 1
basic.forever(function () {
    radio.sendValue("M-SP", control.deviceSerialNumber())
})
