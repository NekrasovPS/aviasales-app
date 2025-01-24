// src/Api/Api.jsx

const API_URL = 'https://aviasales-test-api.kata.academy';

// Функция для получения searchId
export const getSearchId = async () => {
  try {
    const response = await fetch(`${API_URL}/search`);
    const data = await response.json();
    console.log(data);
    return data.searchId;
  } catch (error) {
    console.error('Ошибка при получении searchId', error);
    throw error;
  }
};

// Функция для получения билетов
export const getTickets = async (searchId) => {
  try {
    const response = await fetch(`${API_URL}/tickets?searchId=${searchId}`);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Ошибка при получении билетов', error);
    throw error;
  }
};
