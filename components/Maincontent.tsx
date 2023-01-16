import { Waves } from "../components/svg/Waves";

const MainContent = ({ children }: { children: React.ReactNode }) => (
  <main
    className="z-[0] flex flex-col items-center justify-center min-h-screen w-full  relative bg-gradient-to-b from-[#f5ccb1] to-[#d0cee2] "
    style={{
      background:
        "linear-gradient(to bottom,#f5ccb1 0%,#f5ccb1 50%, #d0cee2 50%, #d0cee2 100%) ",
    }}
  >
    {children}
    <Waves className="absolute z-[-1] w-full h-full pb-24" />
  </main>
);

export default MainContent;
