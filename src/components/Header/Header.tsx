import {FC, useState} from "react";
import LIcon from "../lucidIcon/lucidIcon";
import {Button, Dropdown} from "../ui";
import Container from "../Container/Container";
import {icons} from "lucide-react";
import LayoutContainer from "../LayoutContainer/LayoutContainer";


export interface TabItemListProps {
  label?: string
  icon?: string
  isActive?: boolean
}
export interface HeaderProps {
  className?: string;
  tabItemList?: TabItemListProps[];
  logoUrl?: string
  showLanguageMenuItem?: boolean
  showHelpMenuItem?: boolean
  showMyRequestsMenuItem?: boolean
  showAccountDropdownItem?: boolean
  showLogo?: boolean
  showTabBar?: boolean
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
    className={`tab-button grd-relative grd-flex grd-items-center grd-gap-2 grd-py-4 grd-px-2 grd-cursor-pointer grd-transition grd-duration-400 ${className}
    after:grd-absolute after:grd-w-full after:grd-bottom-0 after:grd-left-0 after:grd-border-b-2 after:grd-border-transparent after:grd-transition after:grd-duration-400
    ${props?.isActive ? "grd-text-blue-500 after:grd-content-[''] after:!grd-border-blue-500" : ""}`}>
    <LIcon name={props.icon} size={props.size || 20} />
    <span>{props.label}</span>
  </div>
}

const Header: FC<HeaderProps> = ({
   className,
   tabItemList,
   logoUrl,
   showLanguageMenuItem = true,
   showHelpMenuItem = true,
   showMyRequestsMenuItem = true,
   showAccountDropdownItem = true,
   showTabBar = true,
   showLogo = true}) => {

  const [ActiveTab, setActiveTab] = useState(tabItemList && tabItemList.find(item => item.isActive)!.label)


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
          className="grd-flex grd-gap-3 grd-items-center grd-py-2.5 grd-px-4 grd-cursor-pointer"
          eventKey={"myProfile"}
        >
          <LIcon className="grd-shrink-0" name="User" size={16}></LIcon>
          <p>
            Profilim
          </p>
        </Dropdown.Item>
        <hr />
        <Dropdown.Item
          className="grd-flex grd-gap-3 grd-items-center grd-py-2.5 grd-px-4 grd-cursor-pointer"
          eventKey={"goPanel"}
        >
          <LIcon className="grd-shrink-0" name="User" size={16}></LIcon>
          <p>
            EVA Corporate Panel’e git
          </p>
        </Dropdown.Item>
        <hr />
        <Dropdown.Item
          className="grd-flex grd-gap-3 grd-items-center grd-py-2.5 grd-px-4 grd-cursor-pointer"
          eventKey={"logout"}
        >
          <LIcon className="grd-shrink-0" name="LogOut" size={16}></LIcon>
          <p>
            Çıkış yap
          </p>

        </Dropdown.Item>
      </Dropdown.Menu>
    )
  }


  return (
    <div className={`main-header grd-mx-auto grd-z-10 ${className}`}>
      <div className="top-bar grd-border-b grd-border-gray-200 grd-py-3.5">
        <Container className="grd-flex grd-items-center">
          <div className="logo-area grd-mr-auto">
            {showLogo && (
              <a className="logo grd-flex grd-max-w-[120px] grd-max-h-[40px]" href="javascript;">
                <img
                  className="grd-max-w-full grd-max-h-full grd-object-contain grd-object-left"
                  src={logoUrl ? logoUrl : "https://place-hold.it/120x40?text=logo bulunamadi"} alt="logo"/>
              </a>
            )}
          </div>

          <nav>
            <ul className="grd-flex grd-gap-4">
              {showLanguageMenuItem && (
                <li className="grd-flex grd-items-center grd-text-gray-500 grd-text-sm grd-font-medium">
                  <Button variant="ghost">
                    <LIcon name="Globe" size={20}/>
                    <span>Türkçe, TL</span>
                  </Button>
                </li>
              )}

              {showHelpMenuItem && (
                <li className="grd-flex grd-items-center grd-text-gray-500 grd-text-sm grd-font-medium">
                  <Button variant="ghost">
                    <LIcon name="HelpCircle" size={20}/>
                    <span>Yardım</span>
                  </Button>
                </li>
              )}

              {showMyRequestsMenuItem && (
                <li>
                  <Button variant="outline">
                    <LIcon name="Inbox" size={20}/>
                    <span>Taleplerim</span>
                  </Button>
                </li>
              )}

              {showAccountDropdownItem && (
                <li>
                  <Dropdown items={renderHeaderDropdownItems} className="grd-text-gray-800 grd-text-sm grd-rounded-xl grd-mt-2">
                    <Button variant="outline">
                      <LIcon name="User" size={20}/>
                      <span>Can Yılmaz</span>
                    </Button>
                  </Dropdown>
                </li>
              )}

            </ul>
          </nav>
        </Container>
      </div>
      <div className="bottom-bar">
        <Container>
          {showTabBar && (
            <div className="tab-item-group grd-flex grd-gap-8 grd-text-gray-500 grd-font-medium grd-text-sm">
              {tabItemList && tabItemList.map((item: any, index: number) => {
                return (
                  <TabButton
                    key={item.label + index}
                    onClick={(tabName: any) => {
                      setActiveTab(tabName)
                    }} label={item.label} icon={item.icon} size={20}
                    isActive={ActiveTab === item.label}
                  />
                )
              })}
            </div>
          )}

        </Container>
      </div>
    </div>
  );
};

export default Header;
