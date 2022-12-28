export const addUserToLocalStorage = (user) => {
  localStorage.setItem('adminToken', JSON.stringify(user));
};

export const removeUserFromLocalStorage = () => {
  localStorage.removeItem("adminToken");
};

export const getUserFromLocalStorage = () => {
  const result = localStorage.getItem('adminToken');
  const user = result ? JSON.parse(result) : null;
  return user;
};
