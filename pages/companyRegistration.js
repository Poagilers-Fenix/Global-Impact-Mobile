import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from "react-native";
import InputWithIcon from "../components/input/InputWithIcon";
import { createCompany, getAddressByCep } from "../API/ApiManager";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
export default function CompanyRegistration({ navigation }) {
  const [fantasyName, setFantasyName] = useState("");
  const [email, setEmail] = useState("");
  const [cep, setCep] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [number, setNumber] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(false);

  const pressSave = async () => {
    await createCompany({
      nome: fantasyName,
      Cnpj: cnpj,
      Endereco: {
        Cep: cep,
        Bairro: bairro,
        Cidade: cidade,
        UF: uf,
        Logradouro: logradouro,
        Numero: number,
      },
      Telefone: phoneNumber,
      Email: email,
      senha: password,
    });
    navigation.navigate("MenuScreen");
  };
  const CepConfig = async () => {
    try {
      var res = await getAddressByCep(cep);
      setBairro(res.bairro);
      setCidade(res.localidade);
      setUf(res.uf);
      setLogradouro(res.logradouro);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ alignItems: "center", height: "13%" }}>
        <Image source={require("../assets/logo.png")} style={styles.imagem} />
      </View>
      <View style={{ alignItems: "center", height: "6%", marginBottom: 15 }}>
        <Text style={styles.titulo}>Cadastro de Empresa</Text>
      </View>
      <View style={styles.containerSecondary}>
        <ProgressSteps
          progressBarColor="#666"
          completedProgressBarColor="#CC5353"
          activeStepIconBorderColor="#CC5353"
          disabledStepIconColor="#666"
          completedStepIconColor="#CC5353"
          activeLabelColor="#CC5353"
          completedLabelColor="#aaa"
          labelColor="#aaa"
        >
          <ProgressStep
            label="Contato"
            nextBtnTextStyle={styles.btnEnable}
            nextBtnStyle={styles.nextBtn}
            nextBtnText="Próximo"
            errors={error}
            onNext={() => {
              if (password != repeatPassword) {
                setError(true);
                Alert.alert("Aviso", "Senhas Não Coincidem");
              } else if (
                email == "" &&
                password == "" &&
                repeatPassword == ""
              ) {
                setError(true);
                Alert.alert(
                  "Aviso",
                  "Algum campo não foi preenchido corretamente"
                );
              } else {
                setError(false);
              }
            }}
          >
            <View style={{ alignItems: "center" }}>
              <InputWithIcon
                title="E-mail para login"
                onChange={setEmail}
              ></InputWithIcon>
              <InputWithIcon
                title="Senha"
                onChange={setPassword}
              ></InputWithIcon>
              <InputWithIcon
                title="Repetir Senha"
                onChange={setRepeatPassword}
              ></InputWithIcon>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Empresa"
            nextBtnTextStyle={styles.btnEnable}
            nextBtnText="Próximo"
            previousBtnText="Voltar"
            nextBtnStyle={styles.nextBtn}
            previousBtnStyle={styles.previousBtn}
            previousBtnTextStyle={styles.btnVoltar}
            onNext={() => {
              if (fantasyName == "" && cnpj == "" && phoneNumber == "") {
                setError(true);
                Alert.alert(
                  "Aviso",
                  "Algum campo não foi preenchido corretamente"
                );
              } else {
                setError(false);
              }
            }}
          >
            <View style={{ alignItems: "center" }}>
              <InputWithIcon
                title="Nome fantasia"
                onChange={setFantasyName}
              ></InputWithIcon>
              <InputWithIcon title="Cnpj" onChange={setCnpj}></InputWithIcon>
              <InputWithIcon
                title="Telefone para contato"
                onChange={setPhoneNumber}
              ></InputWithIcon>
            </View>
          </ProgressStep>
          <ProgressStep
            label="Endereço"
            nextBtnTextStyle={styles.btnEnable}
            previousBtnText="Voltar"
            finishBtnText="Finalizar"
            nextBtnStyle={styles.nextBtn}
            previousBtnStyle={styles.previousBtn}
            previousBtnTextStyle={styles.btnVoltar}
            onSubmit={pressSave}
            onNext={() => {
              if (
                cep == "" &&
                cidade == "" &&
                uf == "" &&
                bairro == "" &&
                logradouro == "" &&
                number == ""
              ) {
                setError(true);
                Alert.alert(
                  "Aviso",
                  "Algum campo não foi preenchido corretamente"
                );
              } else {
                setError(false);
              }
            }}
          >
            <View style={{ alignItems: "center", marginBottom: 20 }}>
              <InputWithIcon
                title="Cep"
                onChange={setCep}
                onBlur={CepConfig}
              ></InputWithIcon>
              <InputWithIcon
                title="Cidade"
                onChange={setCidade}
                value={cidade}
              ></InputWithIcon>
              <InputWithIcon
                title="Uf"
                onChange={setUf}
                value={uf}
              ></InputWithIcon>
              <InputWithIcon
                title="Bairro"
                onChange={setBairro}
                value={bairro}
              ></InputWithIcon>
              <InputWithIcon
                title="Logradouro"
                onChange={setLogradouro}
                value={logradouro}
              ></InputWithIcon>
              <InputWithIcon
                title="Número"
                onChange={setNumber}
              ></InputWithIcon>
            </View>
          </ProgressStep>
        </ProgressSteps>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  imgView: {
    width: "100%",
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
  titulo: {
    fontSize: 26,
    flexWrap: "wrap",
    textAlign: "center",
    color: "#666",
    marginTop: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  imagem: {
    width: 200,
    height: 60,
    marginTop: 30,
    marginBottom: 40,
  },
  containerSecondary: {
    flex: 1,
    backgroundColor: "#B7DBD2",
    height: "83%",
    width: "100%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  donateImagem: {
    width: 400,
    height: 300,
    marginTop: 30,
  },
  btnVoltar: {
    height: 50,
    width: 130,
    color: "white",
    borderRadius: 8,
    color: "#a0a0a0",
    backgroundColor: "#ebebeb",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 20,
  },
  btnEnable: {
    height: 50,
    width: 130,
    color: "white",
    borderRadius: 8,
    color: "#fff",
    backgroundColor: "#CC5353",
    textAlignVertical: "center",
    textAlign: "center",
    fontSize: 20,
  },
  nextBtn: {
    marginRight: -20,
    padding: 0,
    marginBottom: -20,
  },
  previousBtn: {
    marginLeft: -20,
    padding: 0,
    marginBottom: -20,
  },
});
