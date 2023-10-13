'use client'
import React from 'react'

import styles from './Footer.module.scss';
import { GrMail } from 'react-icons/gr';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.form}>
          <div className={styles.df}>
            <GrMail color='#d60000' className={styles.svg} fontSize={20}/>
          <h2>  Подпишитесь на рассылку и будьте в курсе! Акции, скидки, распродажи ждут!</h2>
          </div>
          <form>
            <input type="text" placeholder='Введите email' />
            <button>Подписаться</button>
          </form>
        </div>
        <div className={styles.links}>
          <ul>
            <h3>О компании</h3>
            <li>Реквизиты</li>
            <li>О нас</li>
            <li>Информация для инвесторов</li>
            <li>Сертификаты</li>
            <li>Производители</li>
            <li>Правовая информация</li>
          </ul>
          <div>
            <ul>
              <h3>Акции</h3>
              <li>Наши акции</li>
              <li></li>
            </ul>
            <ul>
              <h3>Компаниям</h3>
              <li>Поставщикам</li>
              <li>Организациям</li>
              <li>Франшиза</li>
            </ul>
          </div>
          <ul>
            <h3>Получение и оплата</h3>
            <li>Доставка курьером</li>
            <li>Доставка транспортной компанией</li>
            <li>Самовывоз</li>
            <li>Способы оплаты</li>
          </ul>
          <ul>
            <h3>Сервис и поддержка</h3>
            <li>Сервисный центр ВсеИнструменты.ру</li>
            <li>Обратная связь</li>
            <li>Помощь по работе с сайтом</li>
            <li></li>
            <li>Работа у нас</li>
          </ul>
        </div>
        <div className={styles.letsFriend}>
          <h3>Давайте дружить</h3>
          <div className={styles.letsFriend_items}>
            <div className="bg-[#0077FF]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12.798 17.489C6.652 17.489 3.146 13.369 3 6.5h3.079c.1 5.033 2.37 7.143 4.168 7.604V6.511h2.9v4.34c1.774-.186 3.64-2.164 4.269-4.34h2.899a8.278 8.278 0 0 1-1.38 3.15 8.486 8.486 0 0 1-2.553 2.345 8.841 8.841 0 0 1 2.911 2.263A8.61 8.61 0 0 1 21 17.5h-3.202a5.41 5.41 0 0 0-1.72-2.649 5.606 5.606 0 0 0-2.932-1.274V17.5l-.348-.011Z"></path></svg></div>
            <div className="bg-[#EA3223]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.042 6.49c.28.288.48.647.583 1.04C21 8.978 21 12 21 12s0 3.022-.375 4.47a2.347 2.347 0 0 1-.583 1.04c-.28.288-.627.496-1.008.602C17.63 18.5 12 18.5 12 18.5s-5.63 0-7.032-.388a2.238 2.238 0 0 1-1.009-.602 2.343 2.343 0 0 1-.583-1.04C3 15.022 3 12 3 12s0-3.022.376-4.47c.103-.393.304-.752.583-1.04.28-.289.627-.496 1.009-.602C6.369 5.5 12 5.5 12 5.5s5.63 0 7.034.388c.381.106.729.314 1.008.602ZM14.877 12 10.2 9.215v5.57L14.878 12Z"></path></svg></div>
            <div className="bg-[#25A2E0]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4.237 11.027c4.83-1.976 8.051-3.278 9.662-3.907 4.602-1.797 5.558-2.11 6.182-2.12.137 0 .443.03.642.182.294.225.296.712.263 1.033-.25 2.46-1.328 8.43-1.877 11.183-.232 1.166-.69 1.557-1.133 1.595-.962.083-1.692-.597-2.624-1.171-1.458-.898-2.282-1.459-3.698-2.332-1.636-1.01-.575-1.564.357-2.475.244-.239 4.484-3.86 4.566-4.188.01-.04.02-.194-.077-.275-.096-.08-.24-.053-.343-.03-.146.03-2.476 1.476-6.99 4.337-.661.428-1.26.636-1.797.623-.592-.013-1.73-.315-2.575-.573-1.036-.317-1.862-.486-1.79-1.022.036-.28.446-.567 1.23-.86h.002Z"></path></svg></div>
            <div className="bg-[#000]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M16.44 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.38 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66C7.02 9.2 4 11.88 4 15.3 4 18.63 6.76 21 9.69 21c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48Z"></path></svg></div>
            <div className="bg-[#000]"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.723 3c-.046 3.648-.294 5.7-1.662 7.068C8.694 11.436 6.645 11.684 3 11.73v.54c3.645.045 5.694.294 7.061 1.662 1.368 1.369 1.617 3.42 1.662 7.068h.539c.045-3.648.294-5.7 1.661-7.068 1.367-1.368 3.416-1.617 7.062-1.662v-.54c-3.646-.045-5.695-.294-7.062-1.662-1.367-1.369-1.616-3.42-1.661-7.068h-.54Z"></path></svg></div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer