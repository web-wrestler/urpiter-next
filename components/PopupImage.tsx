import {RemoveScroll} from 'react-remove-scroll';
import Image from 'next/image';
import styles from '../styles/popup.module.scss'

export function PopupImage({ isOpenPopupImage, linkPopup, onClose }){
  let src = process.env.API_URL_LOCAL || 'https://urpiter.com:1338';

  return (
    <>
      <RemoveScroll enabled={isOpenPopupImage}>
        <div className={`${styles.popup} ${isOpenPopupImage && styles.popup_opened}`}>
          <div className={`${styles.popup__container} ${styles.popup__container_img}`}>
            <div className={styles.popup__button_close} onClick={onClose}>
              <Image loader={() => "/icons/icon-close-modal.svg?w=32"} src={"/icons/icon-close-modal.svg"} width={32} height={32} alt="крестик" />
            </div> 

            <div className={styles.popup__image} >
              <Image loader={() => `${src+linkPopup}?w=800`} src={`${src+linkPopup}`} width={800} height={1100} objectFit='cover' alt="решение" />
            </div> 
          </div> 
        </div>
      </RemoveScroll>
    </>
  )
}