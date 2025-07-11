#Requires AutoHotkey v2.0
;;                                  https://unsplash.com/license
;;                                  https://picsum.photos/
;;request http://picsum.photos/512
;; get request is formed by:
JpgPath := A_WinDir . "\temp\temp_jpg.jpg"
PngPath := A_WinDir . "\temp\temp_png.png"  ; or any other writable path
Cmd := 'ffmpeg -y -i "' JpgPath '" "' PngPath '"' ;no need for resize


^!p:: {
    try {
        Download "https://picsum.photos/512", JpgPath
    } catch {
        MsgBox "Failed to download image."
    }
    Sleep(10)  ; wait for a second before proceeding                                            ;;;;;;;;;;TWEAK THIS IF NEEDED
    RunWait A_ComSpec ' /c ' Cmd, , "Hide" ;;;do the ffmpeg
    Sleep(50)   ; wait for ffmpeg to finish processing                                           ;;;;;;;;;;THIS TOO
    FileDelete(JpgPath) ; remove the temp file
    try {
        WinActivate("[ AVAILABLE ON STEAM : @KanjiCoder's : PHO-SIMP ]")
    } catch Error as e {
        MsgBox "PHOSIMP window not found. Please open PHOSIMP first."
        return
    }
    SendInput("l")
    SendInput("{Enter}")
    Sleep(1000)                                                                               ;;;;ALL THE SLEEPS
    SendInput(PngPath)
    Sleep(300)                                                                              ;;;;TWEAK THIS IF NEEDED                                               
    SendInput("{Enter}")

}


OnExit ExitFunction
ExitFunction(*) {
    if (FileExist(JpgPath)) {
        FileDelete(JpgPath) ; remove the temp file
    }
    if (FileExist(PngPath)) {
        FileDelete(PngPath) ; remove the temp file
    }
}