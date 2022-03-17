
import { css } from "@emotion/react";
import { IonIcon, IonItem, IonMenuToggle } from "@ionic/react";
import { Link, useLocation } from "react-router-dom";
import { Tooltip } from "react-tippy";

interface Props {
	to : string;
	icon : string;
	title : string;
	isIconSvg ?: boolean;
}

function NavLink({ to , icon , title, isIconSvg = false} : Props) {
	const location = useLocation();
  return (
     <IonMenuToggle autoHide={false} menu="sidebar">
     	 <Link to={to}>
	          <Tooltip
	              html={
	                  <span className="hidden md:block lg:hidden  px-4 py-2 rounded text-[15px]" css={css`
						  background-color: var(--ion-color-step-150);
					  `}>
	                      {title}
	                  </span>
	              }
	              trigger="mouseenter"
				  css={css`
	
					  ion-item.active {
						--background : var(--ion-color-primary);
					}
				  `}
	          >
	              <IonItem className={`items-center  hover:opacity-80 space-x-3 my-6 rounded`} 
				  css={css`
						${location.pathname === to ? `--background : var(--ion-color-primary);` : ``}
				  `}>
	                 { isIconSvg ? <img src="/assets/icons/FoxTokenLogo.svg" className="h-6 w-6" alt="FoxToken"/> : <IonIcon color="inherit" icon={icon} title={undefined} />}
	                  <p className="block md:hidden lg:block">{title}</p>
	              </IonItem>
	          </Tooltip>
	      </Link>
     </IonMenuToggle>
  );
}

export default NavLink