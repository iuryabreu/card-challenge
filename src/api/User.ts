
export function getUser() {
  return window.localStorage.getItem("user");
}

export function login(userName: string): void {
  window.localStorage.setItem("user", userName);
}
