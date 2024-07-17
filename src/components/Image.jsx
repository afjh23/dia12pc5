import React from 'react'

export const Image = ({order, imgMobile,imgDesktop}) => {
  return (
    <picture className={order}>
        <source media='(max-width:639px)' srcSet={imgMobile}></source>
        <source media='(min-width:640px)' srcSet={imgDesktop}></source>
        <img src={imgMobile} alt="imagen servicio" />
        </picture>
  )
}
