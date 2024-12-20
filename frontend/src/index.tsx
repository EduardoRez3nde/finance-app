import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer } from 'miragejs';


createServer({
  routes() {
    this.get("/offers", () => ({
      reminders: [
        {
          id: 1,
          title: 'Trasaction 1',
          amount: 450,
          type: 'deposit',
          category: 'Food',
          createAt: new Date()
        }
      ],
    }))
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

