import { Inter } from 'next/font/google';

import Navbar from '../components/UI/Navbar/Navbar';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Listado de Tarjetas de Crédito - Banco Atlántida',
  description: 'Prueba técnica Banco Atlántida.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <div className="main-container">
          <div className="wrapper">{children}</div>
        </div>
      </body>
    </html>
  );
}
