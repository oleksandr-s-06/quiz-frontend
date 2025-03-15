export const setLanguageState = (language) => {
  localStorage.setItem('language', language);
};

export const getLanguage = () => {
  return localStorage.getItem('language');
};

export const setGender = (value) => {
  localStorage.setItem('gender', value);
};

export const getGender = () => {
  return localStorage.getItem('gender');
};

export const setAge = (value) => {
  localStorage.setItem('age', value);
};

export const getAge = () => {
  return localStorage.getItem('age');
};

export const setBooks = (value) => {
  localStorage.setItem('books', value);
};

export const getBooks = () => {
  return localStorage.getItem('books');
};

export const setTopics = (value) => {
  localStorage.setItem('topics', value);
};

export const getTopics = () => {
  return localStorage.getItem('topics');
};

export const setEmail = (value) => {
  localStorage.setItem('email', value);
};

export const getEmail = () => {
  return localStorage.getItem('email');
};

export const clearStorage = () => {
  localStorage.removeItem('language');
  localStorage.removeItem('gender');
  localStorage.removeItem('age');
  localStorage.removeItem('books');
  localStorage.removeItem('topics');
  localStorage.removeItem('email');
};
