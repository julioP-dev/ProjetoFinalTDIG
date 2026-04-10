import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { Formik } from 'formik';
import { useNavigation } from '@react-navigation/native';

// ── Componente reutilizável de input com label (Projeto 7, Passo 1) ──
function InputWithLabel({ label, placeholder, value, onChangeText, secureTextEntry, keyboardType }) {
  return (
    <View style={styles.inputGroup}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor="#9CA3AF"
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType || 'default'}
        autoCapitalize="none"
      />
    </View>
  );
}

export default function SignUpScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>🐾 Criar Conta</Text>
        <Text style={styles.subtitle}>Cadastre você e seu pet!</Text>
      </View>

      {/* Formik envolve todo o formulário (Projeto 7, Passo 7) */}
      <Formik
        initialValues={{
          email: '',
          password: '',
          confirmPassword: '',
          petName: '',
          petBirthday: '',
          petBreed: '',
          petFavoriteToy: '',
        }}
        onSubmit={(values) => {
          if (values.password !== values.confirmPassword) {
            Alert.alert('Erro', 'As senhas não coincidem!');
            return;
          }
          console.log('Dados do formulário:', values);
          Alert.alert('Sucesso!', `Bem-vindo, dono de ${values.petName}! 🐶`, [
            { text: 'OK', onPress: () => navigation.navigate('Main') },
          ]);
        }}
      >
        {({ handleChange, handleSubmit, values }) => (
          // ScrollView garante que telas pequenas vejam todos os campos (Passo 5)
          <ScrollView contentContainerStyle={styles.form} showsVerticalScrollIndicator={false}>

            {/* Seção: Dados do usuário */}
            <Text style={styles.sectionTitle}>Seus dados</Text>

            <InputWithLabel
              label="E-mail"
              placeholder="seu@email.com"
              value={values.email}
              onChangeText={handleChange('email')}
              keyboardType="email-address"
            />

            {/* Senha oculta (Passo 4) */}
            <InputWithLabel
              label="Senha"
              placeholder="Mínimo 6 caracteres"
              value={values.password}
              onChangeText={handleChange('password')}
              secureTextEntry
            />

            {/* Confirmação de senha (Passo 4) */}
            <InputWithLabel
              label="Confirmar senha"
              placeholder="Repita sua senha"
              value={values.confirmPassword}
              onChangeText={handleChange('confirmPassword')}
              secureTextEntry
            />

            {/* Seção: Dados do pet */}
            <Text style={styles.sectionTitle}>Dados do seu pet 🐶</Text>

            <InputWithLabel
              label="Nome do pet"
              placeholder="Ex: Rex, Bolinha..."
              value={values.petName}
              onChangeText={handleChange('petName')}
            />

            <InputWithLabel
              label="Data de aniversário"
              placeholder="DD/MM/AAAA"
              value={values.petBirthday}
              onChangeText={handleChange('petBirthday')}
              keyboardType="numeric"
            />

            <InputWithLabel
              label="Raça"
              placeholder="Ex: Golden Retriever"
              value={values.petBreed}
              onChangeText={handleChange('petBreed')}
            />

            <InputWithLabel
              label="Brinquedo favorito"
              placeholder="Ex: bolinha, osso..."
              value={values.petFavoriteToy}
              onChangeText={handleChange('petFavoriteToy')}
            />

            {/* Botões */}
            <TouchableOpacity style={styles.btnPrimary} onPress={handleSubmit}>
              <Text style={styles.btnPrimaryText}>Criar conta</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btnSecondary}
              onPress={() => navigation.navigate('SignIn')}
            >
              <Text style={styles.btnSecondaryText}>
                Já tem conta? <Text style={styles.link}>Entrar</Text>
              </Text>
            </TouchableOpacity>

            <View style={{ height: 32 }} />
          </ScrollView>
        )}
      </Formik>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 24,
    paddingTop: 56,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#8B5CF6',
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#374151',
    marginTop: 16,
    marginBottom: 8,
  },
  form: {
    paddingBottom: 24,
  },
  inputGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: 13,
    fontWeight: '600',
    color: '#374151',
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 14,
    paddingVertical: 11,
    fontSize: 15,
    color: '#111827',
  },
  btnPrimary: {
    backgroundColor: '#8B5CF6',
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 20,
  },
  btnPrimaryText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
  },
  btnSecondary: {
    alignItems: 'center',
    marginTop: 14,
  },
  btnSecondaryText: {
    color: '#6B7280',
    fontSize: 14,
  },
  link: {
    color: '#8B5CF6',
    fontWeight: '600',
  },
});
