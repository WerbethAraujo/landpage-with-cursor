"use client"

import React from "react"

export function WhatsappButton() {
  // Substitua pelo número da sua empresa (com o código do país e DDD, ex: 5511999999999)
  const phoneNumber = "5511999999999" 
  
  // Mensagem automática opcional codificada para a URL
  const message = encodeURIComponent("Olá! Vim através da landing page Lumina e gostaria de mais informações.")
  
  const whatsappUrl = `https://wa.me{phoneNumber}?text=${message}`

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2"
      aria-label="Fale conosco no WhatsApp"
      title="Fale conosco no WhatsApp"
    >
      {/* Ícone customizado em SVG do WhatsApp */}
      <svg
        className="h-7 w-7 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://w3.org"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.713-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.503 4.933 1.503 5.433 0 9.851-4.414 9.853-9.852.001-2.634-1.025-5.11-2.891-6.977C16.618 1.963 14.14 1.936 11.51 1.936c-5.435 0-9.853 4.414-9.855 9.854-.001 1.77.466 3.498 1.354 5.03l-.993 3.626 3.73-.978zm11.567-4.643c-.314-.157-1.854-.915-2.137-1.018-.283-.103-.488-.157-.693.157-.204.314-.79.1.1-.986 1.112-.196.223-.393.18-.707-.043-.314-.313-.827-.692-.916-.363-.085-.694-.157-.962-.157-.204 0-.379.043-.523.251-.144.208-.55.536-.55 1.309s.562 1.52.64 1.624c.079.103 1.107 1.69 2.68 2.37.374.162.666.26.894.333.376.12 1.18.064 1.626-.002.496-.074 1.52-.619 1.733-1.189.213-.569.213-1.057.15-1.159-.064-.103-.237-.16-.551-.317z" />
      </svg>
    </a>
  )
}
