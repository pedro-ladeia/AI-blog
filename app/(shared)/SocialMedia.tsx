import Image from 'next/image'
import React from 'react'
import Twitter from '/public/assets/social_twitter.png' 
import Facebook from '/public/assets/social_facebook.png' 
import Discord from '/public/assets/social_discord.png' 
import Google from '/public/assets/social_google.png' 
import Instagram from '/public/assets/social_instagram.png' 
import Pinterest from '/public/assets/social_pinterest.png' 

type Props = {
    isDark?: boolean;
}

const SocialMedia = ({isDark = false}: Props) => {
  return (<div className='flex justify-between items-center gap-7'>
    <a href="https://twitter.com" target='_blank' rel='noreferrer'>
        <Image className={`${isDark? 'brightness-0' : ''} hover:opacity-50`} src={Twitter} alt='Twitter logo' width={20} height={20}/>
    </a>

    <a href="https://facebook.com" target='_blank' rel='noreferrer'>
        <Image className={`${isDark? 'brightness-0' : ''} hover:opacity-50`} src={Facebook} alt='Facebook logo' width={20} height={20}/>
    </a>

    <a href="https://discord.com" target='_blank' rel='noreferrer'>
        <Image className={`${isDark? 'brightness-0' : ''} hover:opacity-50`} src={Discord} alt='Discord logo' width={20} height={20}/>
    </a>

    <a href="https://google.com" target='_blank' rel='noreferrer'>
        <Image className={`${isDark? 'brightness-0' : ''} hover:opacity-50`} src={Google} alt='Google logo' width={20} height={20}/>
    </a>

    <a href="https://instagram.com" target='_blank' rel='noreferrer'>
        <Image className={`${isDark? 'brightness-0' : ''} hover:opacity-50`} src={Instagram} alt='Instagram logo' width={20} height={20}/>
    </a>

    <a href="https://pinterest.com" target='_blank' rel='noreferrer'>
        <Image className={`${isDark? 'brightness-0' : ''} hover:opacity-50`} src={Pinterest} alt='Pinterest logo' width={20} height={20}/>
    </a>
  </div>)
}

export default SocialMedia