"use client"
import LoginPrompt from "@/components/LoginPrompt"
import { useAuth } from "@/utils/Firebase"
import Chat from "@/components/Chat"
import FontPicker from "@/components/lifonts/lifp";

export default function Page() {
    const { signedIn } = useAuth();
    return (
        <main className="w-full">
            <FontPicker/>
            {signedIn ? <Chat /> : <LoginPrompt />}
        </main>
    )
}