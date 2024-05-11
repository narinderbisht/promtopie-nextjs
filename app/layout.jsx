import '@/styles/global.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';
export const metadata = {
    title: 'Promptpie NextJs Application',
    description: 'AI base propmt application using NextJs.'
}
const RootLayout = ({ children }) => {
    
  return (
      <html lang="en">
          <head></head>
          <body>
          <Provider>
              <div className="main">
                  <div className="gradient"/>
              </div>
              <main className="app">̀
                  
                  <Nav/>
                  {children}
                  
                  
                  </main>
                  </Provider>
          </body>
    </html>
  )
}

export default RootLayout;