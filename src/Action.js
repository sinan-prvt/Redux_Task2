export const Increment = 'Increment';
export const Decrement = 'Decrement';
export const Reset = 'Reset';
export const Login = 'Login';
export const Logout = 'Logout';

export const increment = () => ({ type: Increment });
export const decrement = () => ({ type: Decrement });
export const reset = () => ({ type: Reset });

export const login = () => ({ type: Login });
export const logout = () => ({ type: Logout });