export const createCompany = async (value) => {
  try {
    let response = await fetch(
      "https://wefeed.azurewebsites.net/api/estabelecimentos",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      }
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Deu Erro");
  }
};
export const getCompanies = async () => {
  try {
    let response = await fetch(
      "https://wefeed.azurewebsites.net/api/estabelecimentos",
      {
        headers: { "Content-Type": "application/json" },
      }
    );
    let json = await response.json();
    return json;
  } catch (error) {
    console.log("Deu Erro");
  }
};

export const createItems = async (value) => {
  try {
    let response = await fetch("https://wefeed.azurewebsites.net/api/itens", {
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
    let response = await fetch("https://wefeed.azurewebsites.net/api/itens", {
      headers: { "Content-Type": "application/json" },
    });
    let json = await response.json();
    return json;
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
