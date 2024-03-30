import PhotoDetails from '@/app/components/PhotoDetails'
import React from 'react'

export default function PhotoDetailsPage({params: {id, lang}}) {
   // console.log(params)
  return (
     <PhotoDetails id={id} lang={lang}/> 
   
  )
}
