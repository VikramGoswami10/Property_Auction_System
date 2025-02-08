// Utility functions to handle localStorage operations

const STORAGE_KEY = "user"; // Key to store user data

// Save user data to localStorage
export const saveUserToLocalStorage = (user) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
};

// Retrieve user data from localStorage
export const getUserFromLocalStorage = () => {
    const user = localStorage.getItem(STORAGE_KEY);
    return user ? JSON.parse(user) : null;
};

// Remove user data from localStorage (Logout)
export const removeUserFromLocalStorage = () => {
    localStorage.removeItem(STORAGE_KEY);
};