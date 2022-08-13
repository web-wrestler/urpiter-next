import { MainLayout } from "../../components/MainLayout";
import React, {Children, useContext} from "react";
import { Context } from "../../popupsContext";
import { MobileMenu } from "../../components/MobileMenu";
import { Popup } from "../../components/Popup";
import Header from "../../components/sections/Header";
import Contacts from "../../components/sections/Contacts";
import Footer from "../../components/sections/Footer";

export default function ServiceLayout({ children, service }) {
  const { 
    handleOpenPopup, 
    closeAllModals, 
    toggleMobileMenu, 
    isOpenPopup, 
    isOpenMobileMenu, 
    //namePopup 
  } = useContext(Context);

  
    return (
      <MainLayout 
        title={service ? service.title : 'Юридические услуги | компания «ЮрПитер»'}
        description={service ? service.description : 'Мы оказываем квалифицированную юридическую помощь по вопросам: семейного, жилищного, уголовного, административного и иного законодательства. Консультация юриста. Услуги юриста. Юридические услуги. Юридическая помощь'}
      >
        <Header toggleMobileMenu={toggleMobileMenu} onClose={closeAllModals}  active='service' style="second"/> {/* onOpenPopup={handleOpenPopup} activePage='services'  */}
        
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