import Logo from "../Logo/Logo.jsx";
import Button from "../Buttons/Button.jsx";
import WhatsAppLink from "../WhatsAppLink/WhatsAppLink.jsx";
import sprite from "../../assets/sprite.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="app-header">
      <div className="app-header__inner">
        <Logo />
        <div className="app-header__btns">
          <WhatsAppLink href="#">
            <svg width="20" height="20">
              <use href={sprite + "#whatsapp"} />
            </svg>
            <span>WhatsApp</span>
          </WhatsAppLink>
          <Button className="btn--order">Заказать 1 блюдо за 430₽</Button>
          <Button className="btn--user">
            <svg width="16" height="20">
              <use href={sprite + "#user"} />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
