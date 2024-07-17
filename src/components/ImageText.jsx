import React from 'react'

export const ImageText = ({order, imgMobile,imgDesktop,title,text}) => {
  return (
    <div className={`${order} relative sm:pt-[350px] pt-[398px] tablet:pt-[150px] md:pt-[160px] lg:pt-[250px] xl:pt-[350px] desktop:pt-[398px]`}>
      <picture className="absolute top-0 z-[-1] ">
        <source media='(max-width:639px)' srcSet={imgMobile} />
        <source media='(min-width:640px)' srcSet={imgDesktop} />
        <img src={imgMobile} alt="Imagen principal"></img>
      </picture>
      <h2 className="text-center font-Fraunces text-[28px] text-Dark-desaturated-cyan mb-7">{title}</h2>
      <p className="text-center font-Barlow text-Dark-desaturated-cyan mx-3 mb-[60px] tablet:text-sm lg:w-[300px] lg:mx-auto">{text}</p>
    </div>
  )
}
