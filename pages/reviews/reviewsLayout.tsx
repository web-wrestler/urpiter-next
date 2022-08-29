import { MainLayout } from "../../components/MainLayout";
import React, {useContext} from "react";
import { Context } from "../../popupsContext";
import { MobileMenu } from "../../components/MobileMenu";
import { Popup } from "../../components/Popup";
import Header from "../../components/sections/Header";
import Contacts from "../../components/sections/Contacts";
import Footer from "../../components/sections/Footer";

export default function ReviewsLayout({ children, reviews }) {
  const { 
    handleOpenPopup,
    closeAllModals, 
    toggleMobileMenu, 
    isOpenPopup, 
    isOpenMobileMenu, 
  } = useContext(Context);

  
    return (
      <MainLayout 
        title={reviews ? reviews.title : 'Отзывы | компания «ЮрПитер»'}
        description={reviews ? reviews.description : 'Мы оказываем квалифицированную юридическую помощь по вопросам: семейного, жилищного, уголовного, административного и иного законодательства. Консультация юриста. Услуги юриста. Юридические услуги. Юридическая помощь'}
      >
        <Header toggleMobileMenu={toggleMobileMenu} onClose={closeAllModals}  active='reviews' style="second"/> {/* onOpenPopup={handleOpenPopup} activePage='services'  */}
        
        {children}
        <Contacts onOpenPopup={handleOpenPopup} />
        <Footer />
        <Popup isOpenPopup={isOpenPopup} onClose={closeAllModals}  />
        {
          isOpenMobileMenu && <MobileMenu onClose={closeAllModals} />
        }

      </MainLayout>

    )
}