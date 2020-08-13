export default function removeClass(...tokens: string[]) {
  return (el: Element): void => el.classList.remove(...tokens);
}
