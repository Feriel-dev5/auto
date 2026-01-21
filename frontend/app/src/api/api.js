// ✅ CORRECTION : PORT 3000 au lieu de 5000
const apiURL = "http://localhost:3000";

class api {
  constructor() {
    this.token = localStorage.getItem("token") || "";
  }

  getToken() {
    return this.token;
  }

  setToken(token) {
    this.token = token;
    localStorage.setItem("token", token);
  }

  get(path) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiURL}${path}`, {
          mode: "cors",
          method: "GET",
          credentials: "include",
          headers: { 
            "Content-Type": "application/json", 
            ...(this.token && { Authorization: `Bearer ${this.token}` })
          },
        });

        if (!response.ok) {
          const error = await response.json();
          return reject(error);
        }

        const res = await response.json();
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  }

  put(path, body) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiURL}${path}`, {
          mode: "cors",
          method: "PUT",
          credentials: "include",
          headers: { 
            "Content-Type": "application/json", 
            ...(this.token && { Authorization: `Bearer ${this.token}` })
          },
          body: typeof body === "string" ? body : JSON.stringify(body),
        });

        if (!response.ok) {
          const error = await response.json();
          return reject(error);
        }

        const res = await response.json();
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  }

  postFormData(path, file) {
    let formData = new FormData();
    console.log("file", file);
    formData.append(file.name, file, file.name);
    return new Promise(async (resolve, reject) => {
      try {
        console.log(`${apiURL}${path}`);
        const response = await fetch(`${apiURL}${path}`, {
          mode: "cors",
          method: "POST",
          credentials: "include",
          headers: {},
          body: formData,
        });

        if (!response.ok) {
          const error = await response.json();
          return reject(error);
        }

        const res = await response.json();
        console.log("e", res);
        resolve(res);
      } catch (e) {
        console.log("e", e);
        reject(e);
      }
    });
  }

  remove(path) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiURL}${path}`, {
          mode: "cors",
          credentials: "include",
          method: "DELETE",
          headers: { 
            "Content-Type": "application/json", 
            ...(this.token && { Authorization: `Bearer ${this.token}` })
          },
        });

        if (!response.ok) {
          const error = await response.json();
          return reject(error);
        }

        const res = await response.json();
        resolve(res);
      } catch (e) {
        reject(e);
      }
    });
  }

  post(path, body) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiURL}${path}`, {
          mode: "cors",
          method: "POST",
          credentials: "include",
          headers: { 
            "Content-Type": "application/json", 
            ...(this.token && { Authorization: `Bearer ${this.token}` })
          },
          body: typeof body === "string" ? body : JSON.stringify(body),
        });

        const res = await response.json();
        
        if (!response.ok) {
          console.log("res", res);
          return reject(res);
        }
        
        resolve(res);
      } catch (e) {
        console.log("e", e);
        reject(e);
      }
    });
  }

  download(path, body) {
    return new Promise(async (resolve, reject) => {
      try {
        const response = await fetch(`${apiURL}${path}`, {
          mode: "cors",
          method: "POST",
          credentials: "include",
          headers: { 
            "Content-Type": "application/json", 
            ...(this.token && { Authorization: `Bearer ${this.token}` })
          },
          body: typeof body === "string" ? body : JSON.stringify(body),
        });

        if (!response.ok) {
          return reject(response);
        }
        resolve(response);
      } catch (e) {
        reject(e);
      }
    });
  }
}

const API = new api();
export default API;