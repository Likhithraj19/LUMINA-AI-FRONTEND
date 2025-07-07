import SideBar from "@/ChatBotComponents/sidebar/SideBar";

export default function ChatbotLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>
        <SideBar>
        {children}
        </SideBar>
        </>;
}