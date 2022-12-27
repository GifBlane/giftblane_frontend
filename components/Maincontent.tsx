import { Waves } from "../components/svg/Waves";

const MainContent = ({ children }: { children: React.ReactNode }) => (
  <main
    className="flex flex-col items-center justify-between min-h-screen w-full py-16 relative bg-gradient-to-b from-[#f5ccb1] to-[#d0cee2]"
    style={{
      background:
        "linear-gradient(to bottom,#f5ccb1 0%,#f5ccb1 50%, #d0cee2 50%, #d0cee2 100%)",
    }}
  >
    {/* <Waves className="absolute w-screen z-[0]" /> */}
    {children}
  </main>
);

export default MainContent;
