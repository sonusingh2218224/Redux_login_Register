import axios from 'axios'


// Register user
const register = async (userData) => {
  const response = await axios.post("https://e-commerce-backend-sigma.vercel.app/api/register", userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post("https://e-commerce-backend-sigma.vercel.app/api/login", userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}


const profile = async (userData) => {
  const response = await axios.get("https://e-commerce-backend-sigma.vercel.app/api/user-profile", userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  console.log(response.data)
  return response.data
  
}

// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,
}

export default authService
