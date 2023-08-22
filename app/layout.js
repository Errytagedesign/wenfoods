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
    'Wen Foods house, product with Elevating Taste, Nourishing Life, Your Source for Basmati Rice & Healthy Delights.',
  keywords:
    'wenfoods basmati rice, basmatirice, duru, duru bulgur, healthy food, diabetes',
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
