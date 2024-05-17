import {ChatList} from "@/widgets/chat/ui/chat-list";
import {ChatMessages} from "@/widgets/chat/ui/chat-messages";

export const Chat = () => {
    return (
        <div className="gap-[2px] pl-[72px] flex justify-between h-screen bg-background-dark pt-[82px] fixed w-[100%]">
            <ChatList/>
            <ChatMessages/>
        </div>
    )
}