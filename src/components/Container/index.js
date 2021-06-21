import Footer from '../Footer';
import Header from '../Header';

const Container = ({children}) => {
    return (
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    )
}

export default Container;