import Footer from "@/components/website/footer";
import Navbar from "@/components/website/navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className=" fixed w-full bg-primary-350 z-40  flex justify-center px-4">
        <div className=" w-9/12 ">
          <Navbar />
        </div>
      </div>
      <div className="w-full md:w-9/12 mx-auto  overflow-x-hidden px-4 pt-16">
        {children}

        <Footer />
      </div>
    </div>
  );
}
