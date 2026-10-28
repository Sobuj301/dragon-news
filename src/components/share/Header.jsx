import logo from "@/assets/logo.png"
import Image from "next/image";
import { format } from "date-fns";

const Header = () => {
    return (
        <div className="flex justify-center flex-col items-center py-5">
            <Image src={logo} width={300} height={200} alt="logo" />
            <p className="text-xl font-semibold">Journalism Without Fear or Favour</p>
            {format(new Date(2014, 1, 11), "EEEE, MMMM , yyyy")}
        </div>
    );
};

export default Header;