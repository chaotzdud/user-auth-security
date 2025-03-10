# Projeto de Autenticação de Usuário

Um projeto simples de aplicação de boas práticas de Segurança da Informação na autenticação de senhas de usuários.

## Tabela de Conteúdo
- [Projeto de Autenticação de Usuário](#projeto-de-autenticação-de-usuário)
  - [Tabela de Conteúdo](#tabela-de-conteúdo)
  - [Visão Geral](#visão-geral)
  - [Funcionalidades](#funcionalidades)
  - [Tecnologias](#tecnologias)
  - [Setup](#setup)

## Visão Geral

Este projeto visa implementar boas práticas de Segurança da Informação na autenticação de senhas de usuários. Essa proposta refere-se a uma atividade da disciplina de Segurança da Informação, lecionada pelo prof. Márcio José Santos Nagy, na Faculdade de Tecnologa de Taubaté.

## Funcionalidades 

> Desenvolver um aplicativo que implemente ao menos 5 regras de senha explicadas em aula.


1. **Identificação e Autenticação Segura:**
   - Exigir IDs únicos para cada usuário para garantir a rastreabilidade das ações no sistema.
   - Implementar autenticação multifatorial (MFA), combinando algo que o usuário sabe (senha), algo que o usuário possui (token físico ou dispositivo móvel) e algo que o usuário é (biometria).

2. **Controle de Tentativas de Login:**
   - Limitar o número máximo de tentativas de login sem sucesso (por exemplo, 3 tentativas).
   - Implementar um tempo de espera crescente ou bloqueio temporário da conta após tentativas fracassadas para prevenir ataques de força bruta.
   - Registrar todas as tentativas de login inválidas em logs para auditoria e análise de segurança.

3. **Tratamento de Erros e Mensagens Genéricas:**
   - Exibir mensagens de erro genéricas, como "Credenciais inválidas", sem especificar se o erro foi no ID ou na senha, para evitar facilitar a vida de invasores.
   - Evitar fornecer detalhes do sistema na página de login até que o usuário esteja devidamente autenticado.

4. **Segurança das Senhas:**
   - Exigir senhas fortes e complexas, combinando letras maiúsculas, minúsculas, números e caracteres especiais.
   - Implementar uma política de troca periódica de senhas e proibir a reutilização de senhas antigas.
   - Armazenar senhas usando técnicas seguras, como hashing com salt (por exemplo, bcrypt, Argon2).

5. **Informações Pós-Login e Monitoramento:**
   - Após o login bem-sucedido, exibir informações sobre o último acesso (data, hora e possíveis tentativas de login falhas) para aumentar a consciência do usuário sobre atividades suspeitas.
   - Monitorar continuamente o comportamento do usuário e estabelecer mecanismos de alerta para acessos incomuns ou atividades suspeitas.

Essas práticas aumentam a segurança geral da página de autenticação e ajudam a proteger o sistema contra acessos não autorizados e possíveis ataques.
## Tecnologias

## Setup