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

export const HomePage = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.phonesBlock}>
        <Image src={PhonesIcon} alt='' width={'100%'} />
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
            <a href=''>Privacy Policy</a>
            <a href=''>Terms of use</a>
          </div>
          <p className={styles.copyright}>
            Copyright © 2023 KOKOROOZ Inc <br />
            All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
};
