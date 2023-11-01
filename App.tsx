import React, { useState } from 'react';
import { View, TextInput, Button, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const CadastroTela = () => {
  const [codigo, setCodigo] = useState('');
  const [rg, setRG] = useState('');
  const [cpf, setCPF] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [celular, setCelular] = useState('');
  const [telefone, setTelefone] = useState('');
  const [endereco, setEndereco] = useState('');
  const [complemento, setComplemento] = useState('');
  const [dadosCadastrados, setDadosCadastrados] = useState([]);

  const handleCadastro = () => {
    
    const novoCadastro = {
      codigo,
      rg,
      cpf,
      nome,
      email,
      celular,
      telefone,
      endereco,
      complemento,
    };
    setDadosCadastrados([...dadosCadastrados, novoCadastro]);
   
    setCodigo('');
    setRG('');
    setCPF('');
    setNome('');
    setEmail('');
    setCelular('');
    setTelefone('');
    setEndereco('');
    setComplemento('');
  };

  const handleExcluir = (index) => {
   
    const novosDados = dadosCadastrados.filter((_, i) => i !== index);
    setDadosCadastrados(novosDados);
  };

  return (
    
    <ScrollView contentContainerStyle={styles.container}>
      <View >
        <Text style={styles.titulocad}>
        Tela de cadastro
        </Text>
      </View>
      <TextInput
  style={styles.input}                
  placeholder="Código"
  onChangeText={(text) => setCodigo(text)}
  value={codigo}
  keyboardType="numeric"
  
/>
<TextInput
  style={styles.input}
  placeholder="RG"
  onChangeText={(text) => setRG(text)}
  value={rg}
  keyboardType="numeric"
  
/>
<TextInput
  style={styles.input}
  placeholder="CPF"
  onChangeText={(text) => setCPF(text)}
  value={cpf}
  keyboardType="numeric"
  
/>
 <TextInput
  style={styles.input}
  placeholder="Nome"
  onChangeText={(text) => setNome(text)}
  value={nome}        
/>
<TextInput
  style={styles.input}
  placeholder="E-mail"
  onChangeText={(text) => setEmail(text)}
  value={email}
  keyboardType="email-address"
/>
<TextInput
  style={styles.input}
  placeholder="Celular"
  onChangeText={(text) => setCelular(text)}
  value={celular}
  keyboardType="phone-pad"
/>
 <TextInput
  style={styles.input}
  placeholder="Telefone"
  onChangeText={(text) => setTelefone(text)}
  value={telefone}
  keyboardType="phone-pad"
/>
 <TextInput
  style={styles.input}
  placeholder="Endereço"
  onChangeText={(text) => setEndereco(text)}
  value={endereco}
/>
  <TextInput
  style={styles.input}
  placeholder="Complemento"
  onChangeText={(text) => setComplemento(text)}
  value={complemento}
/>
      
      <Button title="Cadastrar"  onPress={handleCadastro}  />
      {dadosCadastrados.map((cadastro, index) => (
        <TouchableOpacity key={index} onPress={() => handleExcluir(index)}>
          <View style={styles.cadastroContainer}>
            <Text style={styles.cadastroTexto}>
              Código: {cadastro.codigo}  ;RG: {cadastro.rg} ;CPF: {cadastro.cpf} ;Nome: {cadastro.nome} ;E-mail: {cadastro.email} ;Celular: {cadastro.celular} ;Telefone: {cadastro.telefone} ;Endereço: {cadastro.endereco} ;Complemento: {cadastro.complemento}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#121214',
    
  },
  input: {
    width: '80%',
    height: 40,
    marginBottom: 10,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    backgroundColor: '#7c8a6e',
    borderRadius: 7,
    color: 'white',
    
  },
  Button: {
    borderRadius: 7,
    backgroundColor: '#121214',
  },
  
  titulocad: {
    marginBottom: 40,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  cadastroContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#eee',
    borderRadius: 5,    
  },
  
  cadastroTexto: {
    fontSize: 16,
  },
});

export default CadastroTela;
