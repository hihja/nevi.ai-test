'use client'
import {NavModelItem} from "@/widgets/sidebar/ui/nav-model-item";
import {useState} from "react";

export const NavModels = () => {

    const data = [
        {"id": 1, "name": "chat", "icon": "/sprite/nav-models/model-chat.svg"},
        {"id": 2, "name": "image", "icon": "/sprite/nav-models/model-image.svg"},
        {"id": 3, "name": "video", "icon": "/sprite/nav-models/model-voice.svg"},
        {"id": 4, "name": "voice", "icon": "/sprite/nav-models/model-video.svg"},
    ]

    const [activeId, setActiveId] = useState<number>(data[0].id);

    return (
        <div className="w-[40px] mt-[20px] flex flex-col gap-[12px] items-center rounded-[15px] bg-background-nav border-[2px] border-background-nav">
            {data.map((item) => (
                <NavModelItem key={item.id} {...item} isActive={item.id === activeId} onClick={() => setActiveId(item.id)}/>
            ))}
        </div>
    )
}