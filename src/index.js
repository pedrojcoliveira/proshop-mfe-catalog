// Dev-only: seed a mock user so authService.getUser() works in standalone
if (!localStorage.getItem('userInfo')) {
  localStorage.setItem('userInfo', JSON.stringify({
    _id: 'dev-user',
    name: 'Dev User',
    email: 'dev@dev.com',
    isAdmin: false,
    token: 'dev-token',
  }));
}

import('./bootstrap');
