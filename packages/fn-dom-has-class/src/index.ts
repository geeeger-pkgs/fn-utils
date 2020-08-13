export default function hasClass(className: string) {
  return (el: Element): boolean => el.classList.contains(className);
}
