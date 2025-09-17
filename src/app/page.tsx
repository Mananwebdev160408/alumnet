import ThemeToggle from "@/components/ThemeToggler";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <nav className="bg-base-200 pt-4">
      <div className=" rounded-4xl justify-between items-center w-[95vw] flex mx-auto border h-[10vh] " >
        <div className="logo h-[70%]  w-[10vw] border "></div>
        <div className="flex justify-between items-center w-[30vw] " >
        </div>
      </div>
    </nav>
      <div className="hero  h-[90vh]">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">AlumNet</h1>
            <p className="py-6">
              The secure alumni network for lifelong connections, career growth, and giving back
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </>
  );
}
