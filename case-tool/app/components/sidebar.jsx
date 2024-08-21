import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiViewBoards } from "react-icons/hi";
export default function SideBar({ SidebarStatus }) {
  return (
    <Sidebar aria-label="Sidebar with call to action button example">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Kanban
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiInbox}>
            Inbox
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
