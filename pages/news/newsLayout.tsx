import { MainLayout } from "../../components/MainLayout";
import React, {Children, useContext} from "react";
import { Context } from "../../popupsContext";
import { MobileMenu } from "../../components/MobileMenu";
import { Popup } from "../../components/Popup";
import Header from "../../components/sections/Header";
import Contacts from "../../components/sections/Contacts";
import Footer from "../../components/sections/Footer";
import { PopupImage } from "../../components/PopupImage";

export default function NewsLayout({ children, news }) {
  const { 
    handleOpenPopup,
    handleOpenPopupImage, 
    closeAllModals, 
    toggleMobileMenu, 
    isOpenPopup, 
    isOpenPopupImage,
    isOpenMobileMenu, 
    linkPopup
  } = useContext(Context);

  
    return (
      <MainLayout 
        title={news ? news.title : 'Новости | компания «ЮрПитер»'}
        description={news ? news.description : 'Мы оказываем квалифицированную юридическую помощь по вопросам: семейного, жилищного, уголовного, административного и иного законодательства. Консультация юриста. Услуги юриста. Юридические услуги. Юридическая помощь'}
      >
        <Header toggleMobileMenu={toggleMobileMenu} onClose={closeAllModals}  active='news' style="second"/> {/* onOpenPopup={handleOpenPopup} activePage='services'  */}
        
        {children}
        <Contacts onOpenPopup={handleOpenPopup} />
        <Footer />
        <Popup isOpenPopup={isOpenPopup} onClose={closeAllModals}  />
        <PopupImage isOpenPopupImage={isOpenPopupImage} linkPopup={linkPopup} onClose={closeAllModals} />
        {
          isOpenMobileMenu && <MobileMenu onClose={closeAllModals} />
        }

      </MainLayout>

    )
}