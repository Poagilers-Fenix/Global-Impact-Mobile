const API_LINK = "https://wefeed.azurewebsites.net/api/";

export const createCompany = async (value) => {
  try {
    let response = await fetch(`${API_LINK}/estabelecimentos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Deu Erro");
  }
};
export const getCompanies = async () => {
  try {
    let response = await fetch(`${API_LINK}/estabelecimentos`, {
      headers: { "Content-Type": "application/json" },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Deu Erro");
  }
};

export const createItems = async (value) => {
  try {
    let response = await fetch(`${API_LINK}/itens`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Deu Erro");
  }
};

export const getItems = async () => {
  try {
    let response = await fetch(`${API_LINK}/itens`, {
      headers: { "Content-Type": "application/json" },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Deu Erro");
  }
};

export const deleteItemById = async (value) => {
  try {
    let response = await fetch(`${API_LINK}/itens/${value}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    });
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Deu Erro");
  }
};

export const updateItem = async (value) => {
  try {
    await fetch(`${API_LINK}/itens/${value.itemId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(value),
    });
  } catch (error) {
    console.log("Deu Erro");
  }
};

export const getAddressByCep = async (value) => {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${value}/json/`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.log(error);
  }
};
