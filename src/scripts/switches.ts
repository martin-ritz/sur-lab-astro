// Run `handler` whenever the switch called `name` is flipped
export function onSwitch(name: string, handler: (on: boolean) => void) {
  document
    .querySelector(`[data-switch="${name}"]`)
    ?.addEventListener("switch-change", (e) => handler((e as CustomEvent<boolean>).detail));
}

// Set a switch from code (e.g. when Esc leaves full screen)
export function setSwitch(name: string, on: boolean) {
  document.querySelector(`[data-switch="${name}"]`)?.setAttribute("aria-checked", String(on));
}

// Show a switch that started hidden
export function showSwitch(name: string) {
  const row = document.querySelector<HTMLElement>(`[data-switch-row="${name}"]`);
  if (row) row.hidden = false;
}