import { Sidebar } from "flowbite-react";
import { HiChartPie, HiInbox, HiViewBoards } from "react-icons/hi";
export default function SideBar({ SidebarStatus }) {
  return (
    <Sidebar aria-label="Sidebar with call to action button example" className="h-screen bg-amber-400">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="#">
            <figure>
              <img src="" alt="Entity" />
            </figure>
          </Sidebar.Item>
          <Sidebar.Item href="#">
            <figure>
              <img src="" alt="Action" />
            </figure>
          </Sidebar.Item>
          <Sidebar.Item href="#">
            <figure>
              <img src="" alt="Data Store" />
            </figure>
          </Sidebar.Item>
          <Sidebar.Item href="#">
            <figure>
              <img src="" alt="Flow Arrow" />
            </figure>
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
