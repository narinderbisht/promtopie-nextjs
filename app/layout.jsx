import '@/styles/global.css';
export const metadata = {
    title: 'Promptpie NextJs Application',
    description: 'AI base propmt application using NextJs.'
}
const RootLayout = ({ children }) => {
    
  return (
      <html lang="en">
          <head></head>
          <body>
              <div className="main">
                  <div className="gradient"/>
              </div>
              <main className="root">
                  {children}
              </main>
          </body>
    </html>
  )
}

export default RootLayout;