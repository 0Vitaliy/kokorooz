import styles from './home.module.css';
import HeartIcon from '../../assets/icon-heart.svg';
import DollarCoinIcon from '../../assets/icon-dollar-coin.svg';
import CameraIcon from '../../assets/camera-icon.svg';
import Camera2Icon from '../../assets/camera-2.svg';
import DollarIcon from '../../assets/icon-dollar.svg';
import GlassesIcon from '../../assets/glasses.svg';
import AppStoreIcon from '../../assets/app-store.svg';
import GooglePlayIcon from '../../assets/google-play.png';
import PhonesIcon from '../../assets/phones.png';

import KokoroozIcon from '../../assets/kokorooz-icon.svg';
import Image from 'next/image';
import { useState } from 'react';
import { ModalWrap } from '../modal-wrap';

export const HomePage = () => {
  const [isOpenPrivacyPolicy, setIsOpenPrivacyPolicy] = useState(false);
  const [isOpenTerms, setIsOpenTerms] = useState(false);

  const openModalPrivacyPolicy = () => {
    setIsOpenPrivacyPolicy(true);
  };

  const closeModalPrivacyPolicy = () => {
    setIsOpenPrivacyPolicy(false);
  };

  const openModalTerms = () => {
    setIsOpenTerms(true);
  };

  const closeModalTerms = () => {
    setIsOpenTerms(false);
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.phonesBlock}>
        <Image
          src={PhonesIcon}
          alt=''
          width={'100%'}
          style={{ maxWidth: '527px', maxHeight: '549px' }}
        />
      </div>
      <div className={styles.infoBlock}>
        <div>
          <div className={styles.icons}>
            <Image src={HeartIcon} alt='' width={'100%'} />
            <Image src={DollarCoinIcon} alt='' width={'100%'} />
            <Image src={CameraIcon} alt='' width={'100%'} />
            <Image src={Camera2Icon} alt='' width={'100%'} />
            <Image src={DollarIcon} alt='' width={'100%'} />
            <Image src={GlassesIcon} alt='' width={'100%'} />
          </div>
          <Image src={KokoroozIcon} alt='' width={'100%'} />
          <h2 className={styles.title}>for basic instincts</h2>
          <p className={styles.text}>
            Публікуй пропозиції,знаходи своїх людей та знайомся.
          </p>
          <div className={styles.iconsDownload}>
            <Image src={AppStoreIcon} alt='' width={'100%'} />
            <Image src={GooglePlayIcon} alt='' width={'100%'} />
          </div>
        </div>
        <div className={styles.footer}>
          <div className={styles.privacyPolicyAndTerms}>
            <a onClick={openModalPrivacyPolicy}>Privacy Policy</a>
            <a onClick={openModalTerms}>Terms of use</a>
          </div>
          <p className={styles.copyright}>
            Copyright © 2023 KOKOROOZ Inc <br />
            All rights reserved
          </p>
        </div>
        {isOpenPrivacyPolicy && (
          <ModalWrap
            isOpen={isOpenPrivacyPolicy}
            onClose={closeModalPrivacyPolicy}
            title='Privacy Policy'
          >
            <>
              <h3 className={styles.titlePrivacyPolicy}>Частина 1:</h3>{' '}
              <p className={styles.subtitlePrivacyPolicy}>
                Користувацькі права i контроль над даними
              </p>
              <p className={styles.textPrivacyPolicy}>
                a. Доступ до особистих даних: Користувачі мають право запитати
                доступ до своїх особистих даних, які ми зберігаємо. Ви можете
                зробити запит, звернувшись до нашої служби підтримки за
                допомогою контактної інформації, наведеної в кінці цього
                положення.
              </p>
              <p className={styles.textPrivacyPolicy}>
                b. Виправлення та оновлення даних: Ми докладаємо всіх можливих
                зусиль, щоб забезпечити точність та актуальність ваших особистих
                даних. Якщо ви вважаєте, що інформація, яку ми зберігаємо про
                вас, неправильна або застаріла, ви можете звернутися до нас, i
                ми внесемо відповідні корективи.
              </p>
              <p className={styles.textPrivacyPolicy}>
                c. Видалення даних: Ви можете звернутися до нас з проханням
                видалити ваші особисті дані з нашої системи. Ми забезпечимо
                виконання вашого запиту, за винятком випадків, коли ми маємо
                законову обов'язковість зберігати ці дані.{' '}
              </p>{' '}
              <h3 className={styles.titlePrivacyPolicy}>Частина 2:</h3>
              <p className={styles.subtitlePrivacyPolicy}>
                Використання кукі та аналітичних інструментів
              </p>
              <p className={styles.textPrivacyPolicy}>
                a. Використання кукі: Ми використовуємо кукі-файли та інші
                відстежувальні технології для поліпшення функціональності
                додатку та збирання анонімної статистики. Користувачі мають
                можливість керувати налаштуваннями кукі в своєму браузері та
                відмовитись від їх використання, але це може вплинути на деякі
                функції додатку.{' '}
              </p>
              <p className={styles.textPrivacyPolicy}>
                b. Аналітичні інструменти: Ми використовуємо аналітичні
                інструменти, такі як Google Analytics, для збору агрегованої
                інформації про використання додатку. Ці дані допомагають нам
                розуміти та вдосконалювати досвід користувачів. Інформація,
                зібрана цими інструментами, є анонімною і не містить особистих
                даних.{' '}
              </p>{' '}
              <h3 className={styles.titlePrivacyPolicy}>Частина 3:</h3>
              <p className={styles.subtitlePrivacyPolicy}>
                Політика щодо дітей
              </p>
              <p className={styles.textPrivacyPolicy}>
                Додаток "Кокоруз" призначений тільки для осіб, які досягли 18
                років. Ми не збираємо свідомо жодних особистих даних від осіб,
                які не досягли віку 18 років. Якщо ми встановимо, що ми зібрали
                особисті дані дитини без згоди їх батьків або законних
                представників, ми негайно видалимо ці дані з наших серверів.
              </p>{' '}
              <h3 className={styles.titlePrivacyPolicy}>Частина 4:</h3>{' '}
              <p className={styles.subtitlePrivacyPolicy}>
                Зміни у політиці конфіденційності
              </p>
              <p className={styles.textPrivacyPolicy}>
                Ми можемо періодично оновлювати політику конфіденційності з
                метою відповідності змінам законодавства або політики компанії.
                Ми повідомимо вас про будь-які суттєві зміни, розмістивши
                повідомлення про оновлення на нашому веб-сайті або в додатку.
                Рекомендуємо вам періодично переглядати політику
                конфіденційності для ознайомлення зі змінами.
              </p>
              <h3 className={styles.titlePrivacyPolicy}>Частина 5:</h3>{' '}
              <p className={styles.subtitlePrivacyPolicy}>Захист даних</p>
              <p className={styles.textPrivacyPolicy}>
                Ми вживаємо розумних технічних та організаційних заходів для
                забезпечення захисту особистих даних користувачів. Ці заходи
                включають застосування шифрування даних, обмеження доступу до
                особистих даних тільки необхідним співробітникам та встановлення
                механізмів з попередження та виявлення порушень безпеки даних.
              </p>
            </>
          </ModalWrap>
        )}
        {isOpenTerms && (
          <ModalWrap
            isOpen={isOpenTerms}
            onClose={closeModalTerms}
            title='Terms of use'
          >
            <></>
          </ModalWrap>
        )}
      </div>
    </div>
  );
};
