export const loginUser = async (email: string, password: string) => {
  const response = await fetch("http://localhost:8080/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    throw new Error("Login failed");
  }

  return response.json();
};

export const registerUser = async (email: string, password: string) => {
  const response = await fetch("http://localhost:8080/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  if (!response.ok) {
    throw new Error(`Failed to register: ${response.statusText}`);
  }
  return response.json(); 
}

export const isLoggedIn = (): boolean => {
  return Boolean(localStorage.getItem("authToken"));
};

export const logout = () => {
  localStorage.removeItem("authToken");
};
