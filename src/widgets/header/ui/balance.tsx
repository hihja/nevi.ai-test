'use client'
import Image from "next/image";
import {useState} from "react";

export const Balance = () => {

    const [balance, setBalance] = useState(30)

    return (
        <div className="flex gap-[12px] items-center">
            <div className="flex gap-[4px] items-center">
                <Image src={"/sprite/balance.svg"} alt="Balance" height={24} width={24}/>
                <span className="text-[20px] text-white leading-[28px]">{balance}</span>
            </div>
            <button type="button" onClick={() => setBalance(balance + balance)} className="flex items-center justify-center rounded-[12px] border border-border-gray p-[4px]">
                <Image src={"/sprite/plus.svg"} alt="Add Balance" height={24} width={24}/>
            </button>
        </div>
    )
}