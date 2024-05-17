import Image from "next/image";
import {NavModels} from "@/widgets/sidebar/ui/nav-models";

export const Sidebar = () => {
    return (
        <div className="flex flex-col bg-background-dark h-full w-[80px] p-[20px] items-center justify-between">
            <div className="flex flex-col items-center justify-center w-full">
                <Image src={'/sprite/logo.svg'} alt="Logo" height={40} width={40}/>
                <div className="flex mt-[20px] w-[24px] h-[1px] bg-background-gray"/>
                <NavModels/>
            </div>
            <div className="flex flex-col gap-[24px] items-center">
                <Image src={'/fake/avatar.png'} alt="User" height={40} width={40}/>
                <button type="button">
                    <Image src={'/sprite/logout.svg'} alt="Logout" height={24} width={24}/>
                </button>
            </div>
        </div>
    )
}