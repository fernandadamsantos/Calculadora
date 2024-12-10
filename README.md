# 🧮 Calculadora Web

Uma calculadora funcional e estilizada desenvolvida com HTML, CSS e JavaScript. O projeto utiliza uma interface moderna e responsiva, com funcionalidades básicas de operações matemáticas.

## 📋 Funcionalidades

- Operações Suportadas: Adição, subtração, multiplicação, divisão e porcentagem.
- Cálculos em sequência: Capacidade de inserir expressões matemáticas para cálculos contínuos.
- Limpeza de entrada:
  - CE: Limpa a entrada atual.
  - C: Limpa todas as entradas.
- Troca de sinal: Converte valores positivos em negativos e vice-versa (+/-).
- Botão Igual: Realiza o cálculo da expressão inserida. 

## 🖥️ Tecnologias Utilizadas

- HTML: Estruturação da interface da calculadora.
- CSS: Estilização da calculadora com sombra, gradientes e responsividade.
- JavaScript: Adiciona funcionalidades interativas, como entrada de dados e cálculo dos valores.

## 🚀 Como Executar o Projeto

1. **Clone o repositório**:  

   ```bash
   git clone https://github.com/fernandadamsantos/calculadora.git

2. **Acesse a pasta do projeto**:  

   ```bash
   cd calculadora

3. **Abra o arquivo index.html no navegador**:
- Windows
    
    ```bash
    explorer.exe index.html

- MacOS     
  
    ```bash
    open index.html

 - Linux     
  
    ```bash
    xdg-open index.html

## 🔗 Acesse a calculadora online

[AQUI](https://fernandadamsantos.github.io/calculadora/)

## 📂 Estrutura do Projeto
Abaixo está a estrutura de arquivos do projeto:
    
```plaintext
calculadora/
│
├── index.html       # Estrutura HTML da calculadora
├── style.css        # Estilização da interface
└── script.js        # Funcionalidade interativa com JavaScript
```

## ⚙️ Funcionamento do Código JavaScript

1. appendChar(char): Adiciona caracteres ao visor da calculadora.
2. clearEntry(): Limpa a entrada atual.
3. clearAll(): Reseta o visor.
4. toggleSign(): Alterna o sinal do número (positivo/negativo).
5. calculate(): Avalia a expressão matemática usando eval() e exibe o resultado.

## ⚠️ Observações Importantes

- O uso da função eval() facilita a interpretação da expressão, mas requer cautela em projetos de produção para evitar injeções de código.
- Para ambientes seguros, recomenda-se o uso de um parser de expressões matemáticas.

  
## 🛠️ Melhorias Futuras

- Adicionar suporte a teclas do teclado.
- Melhor tratamento de erros e validação de entradas.
- Implementar cálculos mais avançados, como funções trigonométricas.

## 🖋️ Autor(a)  

Desenvolvido por: **Fernanda Adams dos Santos**  

- [GitHub](https://github.com/fernandadamsantos)  
- [LinkedIn](https://www.linkedin.com/in/fernandadamsantos/)
    
