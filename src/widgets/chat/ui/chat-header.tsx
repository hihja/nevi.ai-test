import {Select} from "@/shared/ui/select/select";
import Image from "next/image";

export const ChatHeader = () => {

    const models = ["GPT4 Trubo", "GPT3.5", "GPT3.5 Turbo"]
    const items = ["Рейчел", "Еще что-то"]

    return (
        <div className="flex items-center justify-between w-full">
            <div className="flex items-center w-full gap-[8px]">
                <Select items={models}/>
                <Select items={items}/>
                <button type="button" className="p-[8px] bg-background-gray rounded-[16px]">
                    <Image src={"/sprite/chat/tuning.svg"} alt="Tuning" height={24} width={24}/>
                </button>
                <button type="button" className="p-[8px] bg-background-gray rounded-[16px]">
                    <Image src={"/sprite/chat/minimalistic.svg"} alt="Tuning" height={24} width={24}/>
                </button>
            </div>
            <div className="flex items-center gap-[8px]">
                <button type="button" className="p-[8px] bg-background-gray rounded-[16px]">
                    <Image src={"/sprite/chat/voice.svg"} alt="Tuning" height={24} width={24}/>
                </button>
                <button type="button" className="p-[8px] bg-background-gray rounded-[16px]">
                    <Image src={"/sprite/chat/document.svg"} alt="Tuning" height={24} width={24}/>
                </button>
            </div>

        </div>
    )
}