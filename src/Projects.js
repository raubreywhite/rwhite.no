import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem, Panel } from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';

// css from https://github.com/susielu/minimal-ui

class App extends Component {
    
    render() {
        
        return (
                <div>
                <section id="usage">
                <div className="container">
                <div className="column10 prefix1 txt-center">
                <h2 className="txt-center">A Compendium Of Statistics Questions</h2>
                <p>A <a href="stats/">compendium</a> of questions I have received as part of my work as a statistician.</p>
                <p>You can also download the pdf version <a href="stats/a-compendium-of-statistics-questions.pdf">here</a>.</p>
                </div>
                </div>
                </section>
                
                <section id="usage">
                <div className="container">
                <div className="column4 prefix4">
                <hr/>
                </div>
                <div className="column10 prefix1 txt-center">
                <h2 className="txt-center">Detecting excessive mortality using the death registry</h2>
                <p>The <a href="https://www.fhi.no/sv/influensa/influensaberedskap/overvaking-totaldodelighet">Norwegian</a> contribution to <a href="http://www.euromomo.eu">Euromomo</a></p>
                </div>
                <div className="column6 prefix3">
                <img src="normomo.png"/>
                </div>
                <div className="column10 prefix1 txt-center">
                <h4>In the media</h4>
                </div>
                <div className="column10 prefix1 txt-left">
                <blockquote>
                <p>Fra og med uke 50 i 2016 og til og med uke 1 i 2017, døde det flere enn ventet. Den første uken i det nye året var dødeligheten betydelig høyere enn ventet.</p>
                - <a className="txt-subtitle" href="http://www.vg.no/nyheter/innenriks/eldre/uvanlig-mange-eldre-har-doedd-de-siste-ukene-skyldes-trolig-influensa/a/23909691/">Uvanlig mange eldre har dødd de siste ukene – skyldes trolig influensa (vg.no)</a>
                </blockquote>
                <br/>
                <blockquote>
                <p>De siste ukene har det vært en merkbar økning i dødelighet blant eldre over 65 år. En sannsynlig årsak til dette er at årets influensa rammer eldre særlig hardt.</p>
                - <a className="txt-subtitle" href="http://www.fosna-folket.no/nyheter/2017/01/29/Økning-i-dødelighet-blant-eldre-–-influensa-er-trolig-grunnen-14129425.ece">Økning i dødelighet blant eldre – influensa er trolig grunnen (fosna-folket.no)</a>
                </blockquote>
                <p></p>
                <p></p>
                </div>
                </div>
                </section>
                                
                </div>
                );
    }
}

export default App;
