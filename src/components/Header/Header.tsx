import {FC, ReactElement, useState} from "react";
import LIcon from "../lucidIcon/lucidIcon";
import {Button, Dropdown} from "../ui";
import Container from "../Container/Container";
import {icons} from "lucide-react";

export interface HeaderProps {
  username: string;
}
export interface HeaderTabBarProps {
  icon: keyof typeof icons;
  className?: string;
  size?: number;
  label?: string;
  isActive?: boolean;
  onClick?(label: string | undefined): void;
}

export const TabButton = (props: HeaderTabBarProps) => {
  const {className = ""} = props

  return <div
    onClick={() => props.onClick && props.onClick(props.label)}
    className={`tab-button relative flex items-center gap-2 py-4 px-2 cursor-pointer transition duration-400 ${className}
    after:absolute after:w-full after:bottom-0 after:left-0 after:border-b-2 after:border-transparent after:transition after:duration-400
    ${props?.isActive ? "text-primary-500 after:content-[''] after:!border-primary-500" : ""}`}>
    <LIcon name={props.icon} size={props.size || 20} />
    <span>{props.label}</span>
  </div>
}

const Header: FC<HeaderProps> = (props) => {

  const TabItemList = [
    {label: "Otel", icon: "Home", isActive: true},
    {label: "Uçak", icon: "Plane"},
    {label: "Transfer", icon: "CarFront"},
  ]

  const [ActiveTab, setActiveTab] = useState(TabItemList.find(item => item.isActive)!.label)


  const renderHeaderDropdownItems = ({onClose, className, onClick, ref} : any) => {

    const handleSelect = (eventKey: any) => {
      if (eventKey) {
        onClose()
        switch (eventKey) {
          case "myProfile":
            alert("Profilim tiklandi")
            return
          case "goPanel":
            alert("panele git tiklandi")
            return
          case "logout":
            alert("cikis yap tiklandi")
            return
          default:
            return
        }
      }
    }
    return (
      <Dropdown.Menu
        className={`${className}`}
        //style={{left: 50}}
        ref={ref}
        onSelect={handleSelect}
      >
        <Dropdown.Item
          className="flex gap-3 items-center py-2.5 px-4 cursor-pointer"
          eventKey={"myProfile"}
        >
          <LIcon className="shrink-0" name="User" size={16}></LIcon>
          <p>
            Profilim
          </p>
        </Dropdown.Item>
        <hr />
        <Dropdown.Item
          className="flex gap-3 items-center py-2.5 px-4 cursor-pointer"
          eventKey={"goPanel"}
        >
          <LIcon className="shrink-0" name="User" size={16}></LIcon>
          <p>
            EVA Corporate Panel’e git
          </p>
        </Dropdown.Item>
        <hr />
        <Dropdown.Item
          className="flex gap-3 items-center py-2.5 px-4 cursor-pointer"
          eventKey={"logout"}
        >
          <LIcon className="shrink-0" name="LogOut" size={16}></LIcon>
          <p>
            Çıkış yap
          </p>

        </Dropdown.Item>
      </Dropdown.Menu>
    )
  }

  return (
    <div className="main-header bg-white">
      <div className="top-bar border-b border-gray-200 py-3.5">
        <Container className="flex items-center">
          <div className="logo-area mr-auto">
            <a className="logo flex max-w-[120px] max-h-[40px]" href="javascript;">
              <img
                className="max-w-full max-h-full object-contain object-left"
                src="https://place-hold.it/120x40" alt="logo"/>
            </a>
          </div>
          <nav>
            <ul className="flex gap-4">
              <li className="flex items-center text-gray-500 text-sm font-medium">
                <Button variant="ghost">
                  <LIcon name="Globe" size={20}/>
                  <span>Türkçe, TL</span>
                </Button>
              </li>
              <li className="flex items-center text-gray-500 text-sm font-medium">
                <Button variant="ghost">
                  <LIcon name="HelpCircle" size={20}/>
                  <span>Yardım</span>
                </Button>
              </li>
              <li>
                <Button variant="outline">
                  <LIcon name="Inbox" size={20}/>
                  <span>Taleplerim</span>
                </Button>
              </li>
              <li>
                  <Dropdown items={renderHeaderDropdownItems} className="text-gray-800 text-sm rounded-xl mt-2">
                    <Button variant="outline">
                      <LIcon name="User" size={20}/>
                      <span>Can Yılmaz</span>
                    </Button>
                  </Dropdown>
              </li>
            </ul>
          </nav>
        </Container>
      </div>
      <div className="bottom-bar">
        <Container>
            <div className="tab-item-group flex gap-8 text-gray-500 font-medium text-sm">
              {TabItemList && TabItemList.map((item: any, index: number) => {
                return (
                  <TabButton
                    key={item.label + index}
                    onClick={(tabName: any) => {
                      console.log(tabName + " " + index)
                      setActiveTab(tabName)
                    }} label={item.label} icon={item.icon} size={20}
                    isActive={ActiveTab === item.label}
                  />
                )
              })}
            </div>
        </Container>
      </div>
    </div>

  );
};

export default Header;
