import { MainLayout } from "../../components/MainLayout";
import React, {useContext} from "react";
import { Context } from "../../popupsContext";
import { MobileMenu } from "../../components/MobileMenu";
import { Popup } from "../../components/Popup";
import Header from "../../components/sections/Header";
import Contacts from "../../components/sections/Contacts";
import Footer from "../../components/sections/Footer";
import FormRequest from '../../components/FormRequest';

export default function ContactsPage() {
  const { 
    handleOpenPopup,
    closeAllModals, 
    toggleMobileMenu, 
    isOpenPopup, 
    isOpenMobileMenu, 
  } = useContext(Context);

  
    return (
      <MainLayout 
        title={'Контакты | компания «ЮрПитер»'}
        description={'Мы оказываем квалифицированную юридическую помощь по вопросам: семейного, жилищного, уголовного, административного и иного законодательства. Консультация юриста. Услуги юриста. Юридические услуги. Юридическая помощь'}
      >
        <Header toggleMobileMenu={toggleMobileMenu} onClose={closeAllModals}  active='contacts' style="second"/> {/* onOpenPopup={handleOpenPopup} activePage='services'  */}
        
        <Contacts onOpenPopup={handleOpenPopup} />
        {/* <FormRequest /> */}
        <Footer />
        <Popup isOpenPopup={isOpenPopup} onClose={closeAllModals}  />
        {
          isOpenMobileMenu && <MobileMenu onClose={closeAllModals} />
        }

      </MainLayout>

    )
}