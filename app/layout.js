import './globals.css';
import NavBar from '@/Components/Navbar/NavBar';
import Footer from '@/Components/Footer/Footer';
import AOSAnimation from '@/utils/AosInit';
import localFont from 'next/font/local';

const Outfit = localFont({
  src: [
    {
      path: '../public/Fonts/Outfit-VariableFont_wght.ttf',
    },
  ],
});

export const metadata = {
  title: 'Wen Foods Stores',
  description:
    'Expert Visa Solutions offers comprehensive assistance with work visas, study visas, permanent residency, citizenship, business visas, and tourist visas. We also provide convenient reservations for flights, hotels, and apartments worldwide.',
  keywords:
    'airline ticketing system, ticketing and reservation, online booking process, air ticketing and reservation in nigeria, airline ticketing and reservation, visas assistance, study visas assistance in nigeria',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={Outfit.className}>
        <NavBar />
        <AOSAnimation>{children}</AOSAnimation>
        <Footer />
      </body>
    </html>
  );
}
