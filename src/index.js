function Head () {
    return(
    <header className="App-header">
        <span id='menu'>Menu</span>
        <img src="./logo.png" className="App-logo" />
        <span id='search'>Search</span>
    </header>
    );
}

function Top () {
    return(
        <section className='Top'>
        <h1>Fashion Help</h1>
        <p>Here we help all men become Pros at dressing well. It does not matter where you are coming from, we have something for every man</p>
      </section>
    )
}

function Posts () {
    return (
        <section className='posts'>
        <div className='postone'>
          <img src="./Rectangle 15.png" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim orci blandit at donec in nec sem tristique. Eros urna ut purus tellus pharetra arcu.</p>
          <a href='#'>Read More</a>
        </div>

        <div className='posttwo'>
          <img src="./Rectangle 15.png" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim orci blandit at donec in nec sem tristique. Eros urna ut purus tellus pharetra arcu.</p>
          <a href='#'>Read More</a>
        </div>

        <div className='postthree'>
          <img src="./Rectangle 15.png" />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim orci blandit at donec in nec sem tristique. Eros urna ut purus tellus pharetra arcu.</p>
          <a href='#'>Read More</a>
        </div>

        <a href="reads" id='see'>See All</a>
      </section>
    )
}

function Footer () {
    return (
        <footer></footer>
    )
}

function Home (){
    return (
        <div>
            <Head />
            <Top />
            <Posts />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Home />, document.getElementById("root"));