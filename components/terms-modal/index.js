import { ModalWrap } from '../modal-wrap';
import styles from './terms-modal.module.css';

export const TermsModal = ({ isOpen, onClose }) => {
  //
  return (
    <ModalWrap isOpen={isOpen} onClose={onClose} title='Terms of use'>
      <>
        <h4 className={styles.title}>УМОВИ ВИКОРИСТАННЯ ДОДАТКУ "КОКОРУЗ"</h4>
        <h3 className={styles.titlePrivacyPolicy}>Прийняття умов</h3>{' '}
        <p className={styles.textPrivacyPolicy}>
          1.1. Ці Умови використання (надалі - "Умови") становлять юридично
          зобов'язуючу угоду між вами та розробниками додатку "Кокоруз" (надалі
          - "Ми", "Наш", "Розробник"), що регулює ваш доступ та використання
          додатку "Кокоруз" (надалі - "Додаток").{' '}
        </p>
        <p className={styles.textPrivacyPolicy}>
          1.2. Перед використанням Додатка ви зобов'язані уважно прочитати ці
          Умови та прийняти їх у повному обсязі. Використовуючи Додаток, ви
          погоджуєтеся з цими Умовами та заявляєте, що маєте право укласти
          юридично зобов'язуючу угоду з Розробником.
        </p>{' '}
        <h3 className={styles.titlePrivacyPolicy}>2. Реєстрація</h3>{' '}
        <p className={styles.textPrivacyPolicy}>
          {' '}
          2.1. Для використання Додатка вам необхідно зареєструватися та
          створити обліковий запис. При реєстрації ви повинні надати достовірну
          та актуальну інформацію про себе, включаючи електронну адресу, гендер,
          орієнтацію, дату народження, верифікацію у вигляді власного селфі та
          нікнейм.
        </p>{' '}
        <p className={styles.textPrivacyPolicy}>
          2.2. Ви погоджуєтесь, що всю надану вами інформацію буде зберігатись
          та оброблятись згідно з нашою Політикою конфіденційності. Ви
          погоджуєтесь, що інформація, надана вами, може використовуватись для
          надсилання вам повідомлень, сповіщень та інших комунікаційних
          матеріалів.{' '}
        </p>{' '}
        <p className={styles.textPrivacyPolicy}>
          2.3. Ви підтверджуєте, що вам виповнилося 18 років на момент
          реєстрації. Додаток доступний тільки для осіб, які досягли повноліття.
        </p>{' '}
        <h3 className={styles.titlePrivacyPolicy}>3. Конфіденційність</h3>{' '}
        <p className={styles.textPrivacyPolicy}>
          {' '}
          3.1. Ми докладаємо всіх зусиль для збереження конфіденційності ваших
          особистих даних. Ми не передаємо вашу інформацію третім особам, за
          винятком випадків, передбачених законом або в разі вашої згоди.
        </p>{' '}
        <p className={styles.textPrivacyPolicy}>
          3.2. Ви розумієте та погоджуєтеся, що використання Додатка може
          залежати від збору та обробки деяких особистих даних, таких як ваша
          геолокація. Ви надаєте згоду на збір, обробку та використання таких
          даних відповідно до нашої Політики конфіденційності.{' '}
        </p>{' '}
        <h3 className={styles.titlePrivacyPolicy}>4. Створення пропозицій</h3>{' '}
        <p className={styles.textPrivacyPolicy}>
          4.1. Ви можете створювати власні оголошення на різні тематики та
          пропонувати їх іншим користувачам. При створенні пропозиції ви можете
          вказати різні налаштування, такі як категорія оголошення, гендер,
          інтереси, вік, орієнтація, геолокація, тривалість пропозиції та
          додаткові налаштування.{' '}
        </p>{' '}
        <p className={styles.textPrivacyPolicy}>
          4.2. Ви погоджуєтесь, що ви несете повну відповідальність за зміст та
          точність вашої пропозиції. Ви зобов'язуєтесь не розміщувати
          образливий, непристойний, незаконний або шкідливий контент.{' '}
        </p>{' '}
        <h3 className={styles.titlePrivacyPolicy}>
          5. Взаємодія з іншими користувачами{' '}
        </h3>{' '}
        <p className={styles.textPrivacyPolicy}>
          5.1. Інші користувачі можуть виражати своє зацікавлення та лайкати
          ваші оголошення. Ви маєте право підтвердити чи відхилити такі запити,
          щоб почати спілкування в чаті.{' '}
        </p>{' '}
        <p className={styles.textPrivacyPolicy}>
          5.2. Ви повинні поводитись з іншими користувачами Додатка ввічливо та
          поважно. Не допускається образливе, загрозливе, дискримінаційне або
          непристойне поводження. Ми залишаємо за собою право припинити доступ
          до Додатка користувачам, які порушують ці правила поведінки.{' '}
        </p>{' '}
        <h3 className={styles.titlePrivacyPolicy}>
          6. Відмова від відповідальності
        </h3>{' '}
        <p className={styles.textPrivacyPolicy}>
          6.1. Ви розумієте та погоджуєтеся, що використання Додатка
          відбувається на ваш ризик. Ми не несемо відповідальності за будь-які
          втрати, шкоду або наслідки, що виникають внаслідок використання
          Додатка.{' '}
        </p>{' '}
        <p className={styles.textPrivacyPolicy}>
          6.2. Ми не несемо відповідальності за дії або поведінку інших
          користувачів Додатка. Ви самостійно відповідаєте за взаємодію з іншими
          користувачами.{' '}
        </p>{' '}
        <h3 className={styles.titlePrivacyPolicy}>7. Зміни умов</h3>{' '}
        <p className={styles.textPrivacyPolicy}>
          7.1. Ми можемо змінювати ці Умови з часом. Будь ласка, періодично
          переглядайте ці Умови для ознайомлення зі змінами. Ваше продовження
          використання Додатка після внесення змін в Умови вважатиметься вашою
          згодою зі зміненими Умовами.{' '}
        </p>{' '}
        <h3 className={styles.titlePrivacyPolicy}>8. Заключні положення</h3>{' '}
        <p className={styles.textPrivacyPolicy}>
          8.1. Ці Умови підпадають під юридичне право та підлягають тлумаченню
          згідно з ним.{' '}
        </p>{' '}
        <p className={styles.textPrivacyPolicy}>
          8.2. Якщо будь-яке положення цих Умов визнається судом недійсним або
          незастосовним, це не вплине на залишок Умов, які залишаються повністю
          чинними та ефективними.
        </p>{' '}
      </>
    </ModalWrap>
  );
};
