// z-index 토큰 정의
// 겹치는 컴포넌트가 여럿(Modal · BottomSheet · SideSheet · Popover · Snackbar ·
// Tooltip · sticky HeaderBar)이라 각 컴포넌트가 자기 숫자를 들고 있으면 소비자가
// 자기 오버레이를 얹을 때 안전한 값을 알 방법이 없다. 층 이름으로 고정해두고
// 컴포넌트는 이 토큰만 참조한다.
//
// 층 순서의 근거:
// - sticky(HeaderBar)는 본문 위, 오버레이 아래
// - modal은 overlay(배경 딤) 위
// - popover/tooltip은 모달 안에서도 떠야 하므로 modal 위
// - toast(Snackbar)는 모달 위에서 알림을 띄우는 흔한 조합이라 modal 위
export const zIndex = {
  base: '0',
  dropdown: '1000',
  sticky: '1100',
  overlay: '1200',
  modal: '1300',
  popover: '1400',
  toast: '1500',
  tooltip: '1600',
} as const;
