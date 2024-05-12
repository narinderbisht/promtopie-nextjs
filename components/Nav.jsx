"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { signIn, signOut, getProviders, useSession} from 'next-auth/react';

const Nav = () => {
    const [isMobileView, setIsMobileView] = useState(false);
    const [providers, setProviders] = useState(null);
    const { data: session } = useSession();

    useEffect(() => {
        (async () => {
            const provider = await getProviders();
            //console.log('provider', provider);
            setProviders(provider);
        })();

    }, []);
    
  return (
        <nav className="flex-between w-full mb-16 pt-3">
          <Link href={'/'} className="flex gap-2 flex-center">
              <Image src="assets/images/logo.svg"
                  alt="PromptPie"
                  width="30"
                  height="30"
                  className="object-contain" />
              <p className="logo-text">PromptPie</p>
          </Link>
        
            {/** desktop navbar */}
            <div className="sm:flex hidden">
              <div className="flex gap-3 sm:gap-5">
                  {session?.user ? (
                      <>
                        <Link href={'/create-prompt'} className="black_btn">Create Prompt</Link>
                        <Link href={'/profile'} className="">Profile</Link>
                        <button type="button" onClick={() => { signOut() }} className="outline_btn">Sign Out</button>
                      </>
                  ) : (
                          <>
                              
                              {
                                  providers && Object.values(providers).map((provider, index) => (
                                    <button key={index} type="button" name={provider.name} onClick={() => { signIn(provider.id) }} className="outline_btn">Sign In with {provider.name}</button>
                                  ))
                              }
                              
                          </>
                    
                    )}
                    
                </div>
            </div>
          
            {/** mobile navbar */}
            <div className="sm:hidden flex relative">
                <Image src="assets/images/logo.svg"
                    alt="Profile"
                    className="rounded-full"
                    width={30}
                    height={30}
                    onClick={() => { setIsMobileView(true) }}
                />
                {
                    isMobileView && (
                      <div className="dropdown">
                          {session?.user ? (
                              <>
                            <Link href={'/create-prompt'}
                                className="dropdown_link"
                            onClick={() => { setIsMobileView(false)}}>Create Prompt</Link>
                            <Link href={'/profile'}
                                className="dropdown_link"
                                onClick={() => { setIsMobileView(false)}}>Profile</Link>
                            <button type="button" onClick={() => {
                                setIsMobileView(false);
                                signOut()
                                  }} className="outline_btn">Sign Out</button>
                                  </>
                          ) : (
                              <button type="button" onClick={() => { signIn() }} className="outline_btn">Sign In</button>
                          )}
                        </div>
                    )
                }
            </div>
        </nav>
  )
}

export default Nav