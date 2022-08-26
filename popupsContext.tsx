import React, { FC, useState } from "react";

interface IThemeContext {
    handleOpenPopup?: (name?) => void;
    handleOpenPopupImage?: (link) => void;
    closeAllModals?: () => void;
    toggleMobileMenu?: () => void;
    isOpenMobileMenu?: boolean;
    isOpenPopup?: boolean;
    isOpenPopupImage?: boolean;
    namePopup?: string;
    linkPopup?: string;
  }
  
  const defaultState = {
    handleOpenPopup: () => false,
    handleOpenPopupImage: () => false,
    closeAllModals: () => false,
    toggleMobileMenu: () => false,
    isOpenMobileMenu: false,
    isOpenPopup: false,
    namePopup: '',
  };

export const Context = React.createContext<Partial<IThemeContext>>(defaultState); 

export const PopupContext: FC = ({ children }) => {

  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [isOpenPopupImage, setIsOpenPopupImage] = useState(false);
  const [namePopup, setNamePopup] = useState('');
  const [linkPopup, setLinkPopup] = useState('');

  const toggleMobileMenu = () => {
    isOpenMobileMenu ? setIsOpenMobileMenu(false) : setIsOpenMobileMenu(true);
  }

  const handleOpenPopup = (name) => {
    setIsOpenPopup(true);
    setNamePopup(name);
  }
  const handleOpenPopupImage = (link) => {
    setIsOpenPopupImage(true);
    setLinkPopup(link);
  }


  const closeAllModals = () => {
    setIsOpenMobileMenu(false);
    setIsOpenPopup(false);
    setIsOpenPopupImage(false);
    setNamePopup('');
    setLinkPopup('');
  } 

  return (
    <Context.Provider
      value={{
        handleOpenPopup, 
        handleOpenPopupImage,
        closeAllModals, 
        toggleMobileMenu, 
        isOpenMobileMenu, 
        isOpenPopup, 
        isOpenPopupImage,
        linkPopup,
        namePopup
      }}
    >
      {children}
    </Context.Provider>
  );
};