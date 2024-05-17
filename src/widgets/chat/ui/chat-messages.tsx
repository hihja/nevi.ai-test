import {ChatHeader} from "@/widgets/chat/ui/chat-header";
import Image from "next/image";
import {ChatInput} from "@/widgets/chat/ui/chat-input";

export const ChatMessages = () => {

    return (
        <div className="bg-background p-[20px] w-full h-full flex flex-col justify-between">
            <ChatHeader/>
            <div className="flex flex-col justify-center items-center h-full gap-[17px]">
                <Image src={"/sprite/logo-nevi.svg"} alt="Logo" height={100} width={100}/>
                <h2 className="text-[16px] leading-[24px] max-w-[250px] text-center">Добро пожаловать! Я - nevi.ai
                    Чем я могу помочь сегодня?</h2>
            </div>
            <ChatInput/>
        </div>
    )
}