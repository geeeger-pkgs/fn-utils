export default function toggleClass(className: string) {
  return (el: Element): boolean => el.classList.toggle(className);
}
