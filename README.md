# ⚛️ react-query-from-scratch

Reimplementação das principais funcionalidades do [React Query](https://tanstack.com/query/latest) utilizando apenas React puro, com foco educacional e arquitetural.

> 📚 Essa série foi criada para mostrar como ferramentas como o React Query funcionam por baixo dos panos — e como você pode construir soluções poderosas com hooks, contexto e lógica bem estruturada.

---

## 📺 Aulas disponíveis

| Aula | Tema                                               | Link |
|------|----------------------------------------------------|------|
| 0    | Chamando APIs com `fetch`                          | [YouTube](https://www.youtube.com/watch?v=mvZEk04Sfqg&t=114s&pp=0gcJCc4JAYcqIYzv) |
| 0.1  | Criando um Hook Customizado                        | [YouTube](https://www.youtube.com/watch?v=_LfhdqNfJcQ&t=9s) |
| 1    | Cache com Singleton                                | [YouTube](https://www.youtube.com/watch?v=hzTLT_tFsnw) |
| 2    | TTL: Controle de expiração dos dados               | [YouTube](https://www.youtube.com/watch?v=4NB_5ZPnJHU&t=15s) |
| 3    | Deduplicação de chamadas simultâneas               | [YouTube](https://www.youtube.com/watch?v=59t9QSATWAQ&t=16s) |

> 🔗 **Playlist completa:** [YouTube](#)

---

## 🛠 Funcionalidades implementadas

✅ Cache em memória com controle por URL  
✅ Singleton para evitar múltiplas instâncias de cache  
✅ TTL para dados expirarem automaticamente  
✅ Deduplicação de requisições simultâneas  
✅ Refetch automático baseado em tempo  
✅ Refetch manual (via botão ou trigger externo)

---

## 💡 Tecnologias utilizadas

- React (com Vite)
- TypeScript
- Vitest (testes unitários)
- ShadCN UI (interface base)
- Nenhuma lib de dados externa (sem Axios, sem React Query)

---

## 📁 Estrutura do projeto

