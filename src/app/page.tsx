import Header from "@/app/_components/home/Header";
import Yx1Earphones from "@/app/_components/home/YX1Earphones";
import ZX7Speaker from "@/app/_components/home/ZX7Speaker";
import ZX9Speaker from "@/app/_components/home/ZX9Speaker";
import BestGear from "@/app/_components/ui/BestGear";
import Categories from "@/app/_components/ui/Categories";

export default function Page() {
  return (
    <div>
      <Header />
      <div className="px-6">
        <Categories />
        <ZX9Speaker />
        <ZX7Speaker />
        <Yx1Earphones />
        <BestGear />
      </div>
    </div>
  );
}
