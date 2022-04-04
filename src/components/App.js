import Header from '../shared/layout/Header';
import './App.css';
import Footer from '../shared/layout/Footer';
import Content from '../shared/layout/Content';
import Exam from './Exam/Exam';

function App() {
  return (
    <div className="App">
      <Header title="Mi App" url="http://github.com" />
      <Content>
        <Exam />
      </Content>
      
      <Footer />
    </div>
  );
}

export default App;
