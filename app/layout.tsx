
import {Lato, Roboto} from 'next/font/google'
import "./globals.css";
import Header from './components/header/navbar';


const roboto_init = Roboto({
  subsets: ['latin'],
  weight: ['100','300','400','500','700','900'],
  variable: '--font-roboto'
})

const lato_init = Lato({
  subsets: ['latin'],
  weight: ['100','300','400','700','900'],
  variable: '--font-lato'
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto_init.variable} ${lato_init.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
