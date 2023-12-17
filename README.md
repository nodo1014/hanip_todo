;// TODO: #윈도우,+쉬프트,!알트,^컨트롤
; https://www.autohotkey.com/docs/v1/misc/Remap.htm
LAlt::LCtrl
LWin::LAlt
LCtrl::LWin
RAlt::RCtrl

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
; LCtrl::LWin ; 맥스타일
; LWin::LAlt
; LAlt::LCtrl ; 맥스타일
; sc138::RCtrl ; vk15 한영
; 레노버 키보드 screenshot
vk15::RCtrl
PrintScreen::vk15	;vk15한글
F19::vk15	;vk19한자
;한자키 VK 19, SC1F1 
AppsKey::RAlt ; MS컴팩트 이모지->앱->한자
; 부트캠프


; ::o1:: ① ; o1입력시 ①로 변환
; ::o2:: ②
; ::o3:: ③
; ::o4:: ④
; ::o5:: ⑤
; ::o6:: ⑥
; ::o7:: ⑦
; ::o8:: ⑧
; ::o9:: ⑨

; ::]date::
;   FormatTime, CurrentDateTime,, yyyy-MM-dd (ddd)
;   SendInput %CurrentDateTime%
; return

; ::]time::
;   FormatTime, CurrentDateTime,, yyyy/MM/dd (ddd)-HH:mm
;   SendInput %CurrentDateTime%
; return
; 슬립방지
; #m:: 
; 	Loop 
; 	{
; 		MouseGetPos, MouseX, MouseY
; 		MouseMove, MouseX+10, MouseY+10, 10
; 		MouseMove, MouseX, MouseY, 10
; 		sleep 10000
; 	} until GetKeyState("LButton")
; return



SetCapsLockState, AlwaysOff

#If GetKeyState("Capslock","P")



; 9::PgUp
; 0::PgDn
BackSpace::Delete

h::Left
j::Down
k::Up
l::Right
^h::
Send, {ShiftDown}{Left}{ShiftUp}
Return
^k::
Send, {ShiftDown}{Right}{ShiftUp}
Return

9::Home
0::End
^9::
Send, {ShiftDown}{Home}{ShiftUp}
Return
^0::
Send, {ShiftDown}{End}{ShiftUp}
Return

Space::vk15

i::
Send, {CtrlDown}{Left}{CtrlUp}
Return
o::
Send, {CtrlDown}{Right}{CtrlUp}
Return
^i::
Send, {ShiftDown}{CtrlDown}{Left}{CtrlUp}{ShiftUp}
Return
^o::
Send, {ShiftDown}{CtrlDown}{Right}{CtrlUp}{ShiftUp}
Return

!9::
Send, {ShiftDown}{Home}{ShiftUp}
Return
!0::
Send, {ShiftDown}{End}{ShiftUp}
Return

n::
Send, {CtrlDown}{BackSpace}{CtrlUp}
m::BackSpace
,::Delete
.::
Send, {CtrlDown}{Delete}{CtrlUp}
Return



; i::PgUp
; o::PgDn


; w::
; Send, {AltDown}{F4}{AltUp}
; 	Return




;============== 가상 화면 전환
; Left::
; Send {Ctrl Down}{LWinDown}{Left}{Ctrl Up}{LWinUp}
; Return
; Right::
; Send {Ctrl Down}{LWinDown}{Right}{Ctrl Up}{LWinUp}
; Return
;==== Ctrl D 업글::단어선택+복사 이므로, 삭제, 오려내기까지. 다중 역할
;smemo 캡처
d::^!PgUp
f::^!PgDn
; Send, {CtrlDown}{d}{CtrlUp}{CtrlDown}{c}{CtrlUp}
; Return


;방향키 홈엔드,
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
; m::
; Send, {AltDown}{Tab}{AltUp}

; Return
; Space::Click



; Space::vk15


; Enter::Esc
Enter::
Send, {End}{Enter}
Return

\::CapsLock

^Enter::
Send, {Home}{Enter}{Up}
Return




; Tab::
; Send {AltDown}{Tab}{AltUp}
; Return
; CapsLock::
; Send {CtrlDown}{Tab}{CtrlUp}
; Return
;// TODO: 
1:: Run notepad.exe C:\Users\kang\Desktop\오토핫키.txt

#If

*CapsLock::
KeyWait, CapsLock
IF A_ThisHotkey = *CapsLock
	Send, {Esc}
Return