import SideBar from "@/ChatBotComponents/sidebar/SideBar";

export default function ChatbotLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <div>
        <SideBar>
        {children}
        </SideBar>
        </div>;
}