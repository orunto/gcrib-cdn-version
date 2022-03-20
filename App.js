import logo from './logo.png';
import postwan from './Rectangle 15.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <span id='menu'>Menu</span>
        <img src={logo} className="App-logo" />
        <span id='search'>Search</span>
      </header>
      <section className='Top'>
        <h1>Fashion Help</h1>
        <p>Here we help all men become Pros at dressing well. It does not matter where you are coming from, we have something for every man</p>
      </section>
      <section className='posts'>
        <div className='postone'>
          <img src={postwan} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim orci blandit at donec in nec sem tristique. Eros urna ut purus tellus pharetra arcu.</p>
          <a href='#'>Read More</a>
        </div>

        <div className='posttwo'>
          <img src={postwan} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim orci blandit at donec in nec sem tristique. Eros urna ut purus tellus pharetra arcu.</p>
          <a href='#'>Read More</a>
        </div>

        <div className='postthree'>
          <img src={postwan} />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim orci blandit at donec in nec sem tristique. Eros urna ut purus tellus pharetra arcu.</p>
          <a href='#'>Read More</a>
        </div>

        <a href="gcrib/reads" id='see'>See All</a>
      </section>

      <footer>

      </footer>
    </div>
  );
}

export default App;
