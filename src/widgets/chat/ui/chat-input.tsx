import Image from "next/image";

export const ChatInput = () => {
    return (
        <div className="flex items-center gap-[8px] w-full">
            <div className="flex relative w-full items-center">
                <input type="text" placeholder="Введите запрос" className="w-full max-h-[48px] rounded-[16px] p-[14px] pl-[60px] bg-background-gray outline-none"/>
                <Image src={"/sprite/chat/chat_input_attach.svg"} alt="Attach" height={24} width={24} className="absolute left-[20px]"/>
            </div>
            <button type="button" className="flex h-[48px] w-[48px] items-center justify-center p-[12px] bg-background-gray rounded-[100%]">
                <Image src={"/sprite/chat/mic.svg"} alt="Say" height={24} width={24}/>
            </button>
        </div>
    )
}