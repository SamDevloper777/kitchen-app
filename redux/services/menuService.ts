import axios from 'axios';

const API_URL = '/api/menus/';

// Create new menu item
const createMenu = async (menuData, token) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${token}`
    }
  };

  const response = await axios.post(API_URL, menuData, config);
  return response.data;
};

// Get all menu items
const getMenus = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get menu items by category
const getMenusByCategory = async (categoryId) => {
  const response = await axios.get(`${API_URL}category/${categoryId}/`);
  return response.data;
};

const menuService = {
  createMenu,
  getMenus,
  getMenusByCategory
};

export default menuService;