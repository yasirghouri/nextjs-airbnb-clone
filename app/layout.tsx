import { Nunito } from "next/font/google";

import ToasterProvider from "@/app/providers/ToasterProvider";

import "./globals.css";
import getCurrentUser from "./actions/getCurrentUser";
import ClientOnly from "./components/ClientOnly/ClientOnly";
import LoginModal from "./components/Modals/LoginModal";
import RegisterModal from "./components/Modals/RegisterModal";
import SearchModal from "./components/Modals/SearchModal";
import RentModal from "./components/Modals/RentModal";
import Navbar from "./components/Navbar/Navbar";

export const metadata = {
  title: "Airbnb",
  description: "Airbnb Clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
      </body>
    </html>
  );
}
