import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from 'miragejs';


createServer({

  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Superliga Volei',
          type: 'deposit',
          category: 'campeonato',
          amount: 4500,
          createdAt: new Date('2024-03-10 10:00:00'),
        },
        {
          id: 2,
          title: 'Tenis Asics Volei',
          type: 'withdraw',
          category: 'Tenis',
          amount: 600,
          createdAt: new Date('2024-01-08 12:30:00'),
        },
      ],
    })
  },

  routes() {

    this.get("/transactions", () => (
      this.schema.all('transaction')
    ));

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transaction', data)
    })
  },
})


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

