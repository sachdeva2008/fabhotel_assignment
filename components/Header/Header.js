import React from 'react'

const Header = ({search}) => {
  
    return(
        <div className="columns">
            <div className="column col-6 col-xs-12 col-mx-auto">
                <header className="navbar">
                <section className="navbar-section">
                    <a href="#" className="btn btn-link">
                      Fab Hotel Assignment
                    </a>
                </section>
                <section className="navbar-section">
                    <div className="input-group input-inline">
                    {search}
                    </div>
                </section>
                </header>
            </div>
        </div>
    )
}

export default Header