# Projeto Frontend - Urban Vale

## 📋 Descrição
Este é o portal de uma imobiliária moderna desenvolvido com Next.js, oferecendo uma experiência completa para visualização, compra e aluguel de imóveis. O projeto implementa um design responsivo e uma interface intuitiva para usuários.

## 🚀 Tecnologias Utilizadas
- **Next.js 15.3.0** - Framework React para desenvolvimento web
- **React 19.1.0** - Biblioteca JavaScript para construção de interfaces
- **Framer Motion** - Biblioteca para animações
- **Zustand** - Gerenciamento de estado
- **Axios** - Cliente HTTP para requisições
- **Swiper** - Biblioteca para carrosséis
- **React Icons** - Ícones para a interface

## 🏗️ Estrutura do Projeto
```
projeto-frontend/
├── app/                   # Diretório principal da aplicação
│   ├── login/             # Página de login
│   ├── cadastro/          # Página de cadastro
│   ├── comprar-imovel/    # Seção de compra de imóveis
│   ├── alugar-imoveis/    # Seção de aluguel de imóveis
│   ├── imovel/            # Detalhes do imóvel
│   ├── consultores/       # Página de consultores
│   └── nosso-valor/       # Página institucional
├── public/                # Arquivos estáticos
├── store/                 # Gerenciamento de estado (Zustand)
└── src/                   # Código fonte adicional
```

## 🎨 Funcionalidades Principais
- Sistema de autenticação (login/cadastro)
- Visualização detalhada de imóveis
- Galeria de imagens com carrossel
- Sistema de busca e filtros
- Interface responsiva
- Modo escuro/claro
- Integração com API de imóveis

## 🛠️ Instalação e Execução

1. Clone o repositório:
```bash
git clone https://github.com/MinYonhee/projeto-frontend.git
```

2. Instale as dependências:
```bash
cd projeto-frontend
npm install
```

3. Execute o projeto em modo de desenvolvimento:
```bash
npm run dev
```

4. Para build de produção:
```bash
npm run build
npm start
```

## 🔧 Scripts Disponíveis
- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm start` - Inicia o servidor de produção
- `npm run lint` - Executa a verificação de linting

## 🎯 Características Técnicas
- Arquitetura baseada em componentes
- Roteamento dinâmico com Next.js
- Animações suaves com Framer Motion
- Gerenciamento de estado com Zustand
- Design responsivo e adaptativo
- Suporte a temas claro/escuro

## 🤝 Contribuição
Para contribuir com o projeto:
1. Faça um fork do repositório
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença
Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
