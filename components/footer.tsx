import { BackgroundBeamsMain } from "./ui/background-beams-main";

const Footer = () => {
  return (
    <div className="w-full relative h-32 ">
      <div className="absolute inset-0 dark:bg-grid-neutral-900/60 bg-grid-neutral-300/60" />

      <div className="absolute inset-0  bg-gradient-to-b  from-background   via-transparent  to-transparent" />
      <div className="relative w-full h-full flex justify-center items-center">
        {/* <BackgroundBeamsMain /> */}
        <p className="text-xs font-medium bg-background px-3 py-2 rounded-full shadow-sm dark:shadow-white/5">
          © 2024 Ziggy Baker
        </p>
      </div>
    </div>
  );
};

export default Footer;
