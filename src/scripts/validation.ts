export function validateName(value: string): boolean {
  return value.trim().length >= 6;
}

export function validateEmail(value: string): boolean {
  const re = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(value) && value.length >= 6;
}

export function validatePhone(value: string): boolean {
  return value.trim().length >= 6;
}

export function validatePassword(value: string): boolean {
  // 12+ chars, 1 upper, 1 lower, 1 digit, 1 special
  return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s]).{12,}$/.test(value);
}

export function validateConfirmPassword(password: string, confirm: string): boolean {
  return password === confirm && validatePassword(password);
}
