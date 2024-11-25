// utils/scroll.ts

/**
 * 옵셔널한 offset과 함께 특정 element로 이동
 * @param element - 스크롤해서 이동할 타겟 html element
 * @param offset - 옵셔널한 오프셋
 */
export const scrollToElement = (
  element: HTMLElement | null,
  offset = 0,
): void => {
  if (!element) return;

  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition + window.scrollY - offset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
};

/**
   클래스네임으로 element의 height 가져옴
 * @param className - element의 클래스네임
 * @returns element height / 0(못 찾은 경우)
 */
export const getElementHeight = (className: string): number => {
  const element = document.querySelector(className);
  return element ? element.getBoundingClientRect().height : 0;
};
