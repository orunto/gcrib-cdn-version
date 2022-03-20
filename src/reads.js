function Head () {
    return(
    <header className="App-header" id="Reads-header">
        <span id='menu'>Menu</span>
        <img src="../images/logo.png" className="App-logo" />
        <span id='search'>Search</span>
    </header>
    );
}

function Top () {
    return(
        <section className='Top' id="Reads-top">
        <h1>Reads For You</h1>
      </section>
    )
}

function Posts () {
    return (
        <section className='posts' id="Reads-post">
            <div className="ruleofthree">
                <div className='postone'>
                    <img src="../images/Rectangle 15.png" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim orci blandit at donec in nec sem tristique. Eros urna ut purus tellus pharetra arcu.</p>
                    <a className="posts-a" href='#'>Read More</a>
                </div>

                <div className='posttwo'>
                    <img src="../images/Rectangle 15.png" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim orci blandit at donec in nec sem tristique. Eros urna ut purus tellus pharetra arcu.</p>
                    <a className="posts-a" href='#'>Read More</a>
                </div>

                <div className='postthree'>
                    <img src="../images/Rectangle 15.png" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim orci blandit at donec in nec sem tristique. Eros urna ut purus tellus pharetra arcu.</p>
                    <a className="posts-a" href='#'>Read More</a>
                </div>
            </div>

            <div className="ruleofthree" id="two">
                <div className='postone'>
                    <img src="../images/Rectangle 15.png" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim orci blandit at donec in nec sem tristique. Eros urna ut purus tellus pharetra arcu.</p>
                    <a className="posts-a" href='#'>Read More</a>
                </div>

                <div className='posttwo'>
                    <img src="../images/Rectangle 15.png" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim orci blandit at donec in nec sem tristique. Eros urna ut purus tellus pharetra arcu.</p>
                    <a className="posts-a" href='#'>Read More</a>
                </div>

                <div className='postthree'>
                    <img src="../images/Rectangle 15.png" />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim orci blandit at donec in nec sem tristique. Eros urna ut purus tellus pharetra arcu.</p>
                    <a className="posts-a" href='#'>Read More</a>
                </div>
            </div>
        <a href="reads" id='see'>Next Page</a>
      </section>
    )
}

function Footer () {
    return (
        <footer id="Reads-footer"></footer>
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