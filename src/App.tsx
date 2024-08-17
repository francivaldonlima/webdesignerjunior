import React from 'react';
import Footer from './components/footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Outras partes da aplicação */}
      <main className="flex-grow">
        {/* Conteúdo principal */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
