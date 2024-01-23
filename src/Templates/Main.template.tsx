import Footer from "../Components/Shared/Footer/Footer"
import Header from "../Components/Shared/Header/Header"

const MainTemplate = ({ children }: any) => {
  return (
    <main>
        <Header />
        {children}
        <Footer />
    </main>
  )
}

export default MainTemplate