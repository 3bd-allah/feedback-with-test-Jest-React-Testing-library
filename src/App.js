import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FeedbackForm from './FeedbackForm';

function App() {
  const handleSubmit = ({score, comment})=>{
    alert(`Form Submitted \n score is: ${score} , Comment is: (${comment})`)
  }
  return (
    <div className="App">
      <FeedbackForm onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
