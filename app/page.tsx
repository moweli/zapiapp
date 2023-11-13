"use client";
import Nav from "@/app/components/Nav";
import Hero from "@/app/components/Hero";
import Feature from "@/app/components/Feature";
import Testiomnials from "@/app/components/Testiomnials";
import Pricing from "@/app/components/Pricing";
import Faq from "@/app/components/Faq";
import Footer from "@/app/components/Footer";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="bg-white">
      <Nav />
      <main>
        <Hero />
        <Feature />
        <Testiomnials />
        <Pricing />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
