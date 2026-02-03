# Frontend do Portfólio com Modo Laboratório

Este repositório contém o **frontend do projeto de portfólio**, responsável pela interface do usuário e pela integração com uma **API Java segura**, utilizada no **modo laboratório** para testes controlados e demonstração de funcionalidades.

---

<p align="center">
  <img src="https://img.shields.io/badge/Status-Em%20Produ%C3%A7%C3%A3o-blue" alt="Status">
  <img src="https://img.shields.io/badge/Frontend-Angular-DD0031" alt="Angular">
  <img src="https://img.shields.io/badge/Backend-Java%20%7C%20Spring-6DB33F" alt="Java Spring">
  <img src="https://img.shields.io/badge/Auth-JWT-orange" alt="JWT">
  <img src="https://img.shields.io/badge/Infra-Docker%20%7C%20Nginx-2496ED" alt="Docker Nginx">
  <img src="https://img.shields.io/badge/Cloud-OCI-red" alt="Oracle Cloud">
</p>

<img src="https://img.shields.io/github/stars/Antonioafj/portifolio-frontend?style=social" alt="GitHub stars">


## 🌐 Site

### Tela inicial do portfólio
Interface principal do site.


![na_potifo](https://github.com/user-attachments/assets/15e1c822-339f-4ec7-ab4a-0fff40f77591)

---

## 🧭 Navegação

O site é organizado nas seguintes seções:

### Home
Inicio do site

### Projetos
Demonstração dos projetos desenvolvidos, com links diretos para os respectivos repositórios no GitHub.

### Sobre Mim
Breve apresentação pessoal, trajetória de estudos e objetivos profissionais.

### Parceiros de Aprendizagem
Seção dedicada às **plataformas, cursos, ferramentas e escolas** que contribuíram para o meu aprendizado até o momento.  
> Conteúdo em constante evolução.

### Serviços & Soluções
Técnicas estudadas e aplicadas em outros projetos e neste projeto também.

### Contato
Canal para contato direto por meio do site.

---

## 🧪 Modo Laboratório
<img width="1896" height="638" alt="img_1_mod_lab" src="https://github.com/user-attachments/assets/52d14482-45b1-48e5-a2b4-7677b91faf38" />

O **modo laboratório** permite que visitantes testem, de forma segura e controlada, funcionalidades de uma API Java integrada ao frontend.

### Fluxo de acesso
1. Acesse a opção **Entrar como convidado**
2. Solicite um código de acesso via **e-mail**
3. Após a validação do código, um **token de acesso** é gerado
4. O usuário passa a ter acesso ao ambiente de testes da API

> ⚠️ O envio de código via SMS está restrito ao ambiente de testes, pois o serviço Twilio está em modo *trial*.

### Funcionalidades disponíveis no modo laboratório
- Teste de templates de comunicação
- Verificação de métricas de acesso e uso do site
- Consumo de endpoints protegidos da API Java

---

## 🔗 Integração com API Java

O frontend consome uma **API Java protegida**, responsável por:
- Autenticação por código temporário
- Geração e validação de token JWT
- Registro de métricas de uso
- Envio de notificações

Toda a comunicação é feita de forma segura e controlada.

---

## 🧱 Stacks & Tecnologias

Tecnologias utilizadas e estudadas até o momento no desenvolvimento do projeto:

- Angular
- TypeScript
- HTML / CSS
- Integração REST com API Java
- Docker
- Nginx

---

## 🚀 Deploy

O site está em produção, hospedado em ambiente cloud, utilizando:
- Docker
- Docker Hub
- Github Actions
- Nginx
- Oracle Cloud Infrastructure (OCI)
- Domínio próprio

---

## 🔗 Link do site

👉 <a href="https://antonioafj.dev/" target="_blank" rel="noopener noreferrer">
  https://antonioafj.dev/
</a>
