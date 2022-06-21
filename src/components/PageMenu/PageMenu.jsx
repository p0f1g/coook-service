import sprite from "../../assets/sprite.svg";
import "./PageMenu.scss";

const PageMenu = () => {
  return (
    <div className="page-menu">
      <ul className="menu-list">
        <li className="menu-list__item">
          <a
            className="menu-list__link menu-list__link--green"
            href="https://wa.me/"
            target="_blank"
            rel="noreferrer"
          >
            <svg width="20" height="20">
              <use href={sprite + "#whatsapp"} />
            </svg>
            <span>WhatsApp</span>
          </a>
        </li>
        <li className="menu-list__item">
          <a className="menu-list__link" href="tel:+3800000000">
            <svg width="20" height="20">
              <use href={sprite + "#phone"} />
            </svg>
            <span>+3(80)000-00-00</span>
          </a>
        </li>
        <li className="menu-list__item">
          <a className="menu-list__link" href="mailto:">
            <svg width="20" height="20">
              <use href={sprite + "#letter"} />
            </svg>
            <span>Написать на E-mail</span>
          </a>
        </li>
      </ul>

      <ul className="menu-list">
        <li className="menu-list__item">
          <a className="menu-list__link" href="/#">
            <svg width="20" height="20">
              <use href={sprite + "#sup"} />
            </svg>
            <span>Меню для частных клиентов</span>
          </a>
        </li>
        <li className="menu-list__item">
          <a className="menu-list__link" href="/#">
            <svg width="20" height="20">
              <use href={sprite + "#marshmallow"} />
            </svg>
            <span>Меню для корпоративных заказов</span>
          </a>
        </li>
        <li className="menu-list__item">
          <a className="menu-list__link" href="/#">
            <svg width="20" height="20">
              <use href={sprite + "#scooter"} />
            </svg>
            <span>О доставке</span>
          </a>
        </li>
      </ul>

      <ul className="menu-list">
        <li className="menu-list__item">
          <a className="menu-list__link" href="/#">
            <svg width="20" height="20">
              <use href={sprite + "#confidentiality"} />
            </svg>
            <span>Политика конфиденциальности</span>
          </a>
        </li>
        <li className="menu-list__item">
          <a className="menu-list__link" href="/#">
            <svg width="20" height="20">
              <use href={sprite + "#signature"} />
            </svg>
            <span>Пользовательское соглашение</span>
          </a>
        </li>
        <li className="menu-list__item">© 2022 COOOK service</li>
      </ul>
    </div>
  );
};

export default PageMenu;
