'use client'
import {useState} from "react";

interface Interface {
    type: "list" | "archive"
}

export const ChatListSwitch = () => {

    const [isActive, setActive] = useState<Interface>({type: "list"})

    const getButtonClass = (buttonType: "list" | "archive") => {
        return `pb-[8px] ${isActive.type === buttonType ? 'border-b-2 border-white' : 'border-b-2 border-transparent text-muted'}`;
    }

    return (
        <div className="flex items-center gap-[8px] h-[36px] text-[14px]">
            <button
                type="button"
                onClick={() => setActive({ type: "list" })}
                className={getButtonClass("list")}
            >
                Список
            </button>
            <button
                type="button"
                onClick={() => setActive({ type: "archive" })}
                className={getButtonClass("archive")}
            >
                Архив
            </button>
        </div>
    )
}