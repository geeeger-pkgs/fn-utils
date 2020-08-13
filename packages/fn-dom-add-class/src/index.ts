export default function addClass(...tokens: string[]) {
  return (el: Element): void => el.classList.add(...tokens);
}
