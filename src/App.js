import Header from './components/Header';
import Faculty from './components/Faculty';
import Footer from './components/Footer';
import Students from './components/Students'
import Courses from './components/Courses'
import Header2 from './components/Header2';
import User from './components/User';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header/>
      <Header2/>
      <User name="monika" type="guest"/>
      
      <table>
        <thead>
        <tr>
            <td>DAY</td>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
            <td>7</td>
            <td>8</td>
            <td>9</td>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>MON</td>
            <td>23CS2103A-P-S-14-C017</td>
            <td>23CS2103A-P-S-14-C017</td>
            <td>23AD2001O-L-S-108-C423</td>
            <td>23AD2001O-L-S-108-C423</td>
            <td>23CS06EF-S-S-11-C406</td>
            <td>-</td>
            <td>	23AD2102R-L - S-11 -RoomNo-M121</td>
            <td>-</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Dr. ABC</td>    
            <td>1234 </td>   
            <td>CSE</td>
            <td>POE</td>
        </tr>
        <tr>
            <td>Dr. Nithya</td>    
            <td>5432 </td>   
            <td>CSE</td>
            <td>YOS</td>         
        </tr>
        
        </tbody>
      </table>
      <Faculty/>
      <Students/>
      <Courses/>
      <Footer/>
    </div>
    
  );
}

export default App;
