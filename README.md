;// TODO: #윈,+쉬,!알,^컨
#F10::
  Suspend
return
;;Loop -> Pause로 정지
#F11::
  Pause
return
;; 종료
#F12::
ExitApp

#y::Reload

!c::
  Send, {CtrlDown}{c}{CtrlUp}
Return
!x::
  Send, {CtrlDown}{x}{CtrlUp}
Return
!v::
  Send, {CtrlDown}{v}{CtrlUp}
Return
;=======페이지 최상단/하단
; !q::
; Loop, 10
; Send, {PgUp}
; 	Return

; !w::
; Loop, 10
; Send, {PgDn}
; 	Return

; 윈도우 컨트롤 우측은 맥 스타일
; 쉬프트+스페이스로한영
+Space::vk19
:*:ftw::Free the whales__사용법 :*:단축어::
  ;Win 키보드
  ;Ctrl-Window-Alt
  ;Command-Ctrl+Option
  ;MAC 키보드
  ;Ctrl-Option-Command
  ;Ctrl-Alt-Windows
  ;실제 키 대응
  ;보조ctrl-Alt-Ctrl
  ;============= Win 키보드

  LCtrl::LWin ; 맥스타일
  LWin::LAlt
  LAlt::LCtrl ; 맥스타일
  RAlt::RCtrl ;
  sc138::RCtrl ; vk15 한영
  vk15::RCtrl ;한영키를 Ctrl로
  ; 한자키 VK 19, SC1F1 
  AppsKey::RAlt ; MS컴팩트 이모지->앱->한자
  ;============= magic keyboard ================
  #If GetKeyState("Scrolllock","T") ; Hotkeys below this can only be activated if ScrollLock is On
    Loop
  {
    if not GetKeyState("Scrolllock", "T") ; Note that we have to keep this because the #If statement doesn't control the hotkey once it's been activated
      LWin::LAlt
    LAlt::LWin
    RWin::RCtrl
    RAlt::vk19
    ; =======================================
    break
  }
return

#if ; this resets the condition so that all hotkeys below this directive can be activated

SetCapsLockState, AlwaysOff
#If GetKeyState("CapsLock", "P")


BackSpace::Delete
Space::vk15
h::Left
^h::
  Send, {ShiftDown}{Left}{ShiftUp}
  Return

j::Down
k::Up
l::Right
^l::
  Send, {ShiftDown}{Right}{ShiftUp}
  Return
; hyper_delete
m::BackSpace
,::Delete

n::
  Send, {CtrlDown}{Backspace}{CtrlUp}
Return
.::
  Send, {CtrlDown}{Delete}{CtrlUp}
Return
; w::
; Send, {AltDown}{F4}{AltUp}
; 	Return

i::
  Send, {CtrlDown}{Left}{CtrlUp}
Return
^i::
  Send, {ShiftDown}{CtrlDown}{Left}{CtrlUp}{ShiftUp}
Return

o::
  Send, {CtrlDown}{right}{CtrlUp}
Return
^o::
  Send, {ShiftDown}{CtrlDown}{right}{CtrlUp}{ShiftUp}
Return
9::
  Send, {home}
Return
0::
  Send, {end}
Return
^9::
  Send, {ShiftDown}{home}{ShiftUp}
Return
^0::
  Send, {ShiftDown}{end}{ShiftUp}
Return

d::^!PgUp
f::^!PgDn
; Send, {CtrlDown}{d}{CtrlUp}{CtrlDown}{c}{CtrlUp}
; Return

; 홈엔드,
Left::Home
Right::End
Up::PgUp
Down::PgDn

; 마우스
; 창 최소화 - 복구 win+down, Alt+tab

c::
  Send, {CtrlDown}{c}{CtrlUp}
Return
x::
  Send, {CtrlDown}{x}{CtrlUp}
Return
v::
  Send, {CtrlDown}{v}{CtrlUp}
Return

Tab::
  Send, {LWinDown}{Down}{LWinUp}
Return

Enter::^z
\::CapsLock

;vscode 스플릿창 좌/우
$[::
  Send {CtrlDown}k{CtrlUp}{CtrlDown}{Left}{CtrlUp}
Return
$]::
  Send {CtrlDown}k{CtrlUp}{CtrlDown}{Right}{CtrlUp}
Return
/::
  Send, {CtrlDown}/{CtrlUp}
return
; 방향키 

;// TODO: 
1:: Run notepad.exe C:\Users\kang\Desktop\오토핫키.txt

#If

*CapsLock::
  KeyWait, CapsLock
  IF A_ThisHotkey = *CapsLock
    Send, {Esc}
Return