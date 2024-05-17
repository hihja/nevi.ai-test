import Link from "next/link";

export const WelcomePage = () => {
    return (
        <div className="flex h-screen w-full bg-background justify-center items-center">
            <div className="flex flex-col justify-center items-center bg-background-dark p-[20px] gap-[10px] rounded-[16px]">
                <h1 className="text-[24px]">nevi.AI test</h1>
                <p>Telegram: hihja_dev</p>
                <Link href={'/chat'} className="p-[8px] bg-background-gray rounded-[16px] text-white w-[200px] text-center">Открыть чат</Link>
            </div>
        </div>
    );
}