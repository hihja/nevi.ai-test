import Image from "next/image";
import {ChatListSwitch} from "@/widgets/chat/ui/chat-list-switch";

export const ChatList = () => {
    return (
        <div className="bg-background w-full px-[20px] max-w-[312px] h-full p-[20px]">
            <ChatListSwitch/>

            <div className="flex mt-[24px] gap-[8px] items-center">
                <button type="button">
                    <Image src={"/sprite/chat/chat_add.svg"} alt="Add chat" height={24} width={24}/>
                </button>
                <button type="button">
                    <Image src={"/sprite/chat/folder_add.svg"} alt="Add chat" height={24} width={24}/>
                </button>
            </div>

            <button type="button" className="flex gap-[4px] items-center mt-[24px] text-[14px]">
                <Image src={"/sprite/chat/folder_arrow.svg"} alt="All chats" height={16} width={16}/>
                <Image src={"/sprite/chat/folder.svg"} alt="All chats" height={24} width={24}/>
                Все чаты
            </button>

            <div className="flex flex-col items-center justify-center gap-[8px] text-[16px] mt-[24px]">
                <Image src={"/sprite/chat/chats.svg"} alt="Chats" height={60} width={60}/>

                Список чатов пуст
            </div>
        </div>
    )
}