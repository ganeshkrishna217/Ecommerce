export function getCookie(key: string) {
  const b = document.cookie.match("(^|;)\\s*" + key + "\\s*=\\s*([^;]+)");
  return b ? b.pop() : "";
}

export function formatCurrency(amount: number) {
  return "INR " + (amount / 100).toFixed(2);
}
