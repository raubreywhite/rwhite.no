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
                <h2 className="txt-center">Contact me</h2>
                <p>w@<p className="display-no">foo</p>rwhite.no</p>
                </div>
                </div>
                </section>
                
                <section id="nav">
                <div className="container">
                <div className="column4 prefix4">
                <hr/>
                </div>
                <div className="column10 prefix1 txt-center">
                <h2 className="txt-center">Education</h2>
                <h4>Harvard University, Cambridge, USA (2009 - 2012)</h4>
                <p>Ph.D in Biostatistics</p>
                <p>MA in Biostatistics (Frank Knox fellowship)</p>
                <h4>University of Wollongong, Wollongong, Australia (2005 - 2009)</h4>
                <p>B. Maths (Advanced) Honours (Applied Statistics)</p>
                </div>
                </div>
                </section>
                
                
                <section id="nav">
                <div className="container">
                <div className="column4 prefix4">
                <hr/>
                </div>
                <div className="column10 prefix1 txt-center">
                <h2 className="txt-center">Skills/Languages</h2>
                <p>R (10+ years)</p>
                <p>STATA (10+ years)</p>
                <p>Docker (1 year)</p>
                <p>Python (1 year)</p>
                <p>ReactJS+D3 (6 months)</p>
                </div>
                </div>
                </section>
                
                <section id="nav">
                <div className="container">
                <div className="column4 prefix4">
                <hr/>
                </div>
                <div className="column10 prefix1">
                <h2 className="txt-center">Norwegian Institute of Public Health (NIPH/FHI)</h2>
                
                <h4>Statistician - Infectious Disease Epidemiology and Modelling, Oslo, Norway (06.2016 - now)</h4>
                <ul>
                <li>Advised outbreak teams, researchers, and students in statistical concepts, methods, and programming</li>
                <li>Developed surveillance reports (and all relevant infrastructure and code for signal processing) in the format of interactive websites for:
                <ul>
                <li>Gastritis and upper-respiratory outbreaks using the syndromic surveillance registry</li>
                <li>Outbreaks using the notifiable disease registry</li>
                <li>Excessive mortality using the death registry</li>
                </ul>
                </li>
                <li>Statistician on the data monitoring committee (DMC) for the PEEP RCT in Haydom, Tanzania</li>
                <li>Statistician on the data monitoring committee (DMC) for the Safer Births Moyo RCT in Muhimbili, Tanzania</li>
                </ul>
                
                <h4>Statistician - Infectious Disease Epidemiology, Oslo, Norway (06.2014 - 05.2016)</h4>
                <ul>
                <li>Advised outbreak teams, researchers, and students in statistical concepts, methods, and programming</li>
                <li>Modelled the 2014 Ebola outbreak to estimate the likelihood of a case flying to Norway and the subsequent usefulness of entry screening in Oslo airport</li>
                <li>Modelled the burden of HCV in Norwegian people who inject drugs</li>
                <li>Developed statistical protocol for a 20,000 person longitudinal study regarding Norwegian water usage</li>
                </ul>
                
                <h4>Statistician - Genes and Environment, Oslo, Norway (01.2012 - 05.2014)</h4>
                <ul>
                <li>Advised researchers in statistical concepts, methods, and programming</li>
                </ul>
                </div>
                </div>
                </section>
                
                <section id="nav">
                <div className="container">
                <div className="column4 prefix4">
                <hr/>
                </div>
                <div className="column10 prefix1">
                <h2 className="txt-center">Médecins Sans Frontières (MSF)</h2>
                
                <h4>Statistician - OCB, Oslo, Norway (10.2015 - now)</h4>
                <ul>
                <li>Developed statistical protocol for a 10,000 person stepwise-RCT regarding DR-TB in a Mumbai slum</li>
                <li>Advised on surveillance methods to detect extreme malaria seasons in areas with low quality data</li>
                <li>Identified predictors of death amongst Ebola patients in a Guinean Ebola Treatment Unit</li>
                </ul>
                
                </div>
                </div>
                </section>
                
                <section id="nav">
                <div className="container">
                <div className="column4 prefix4">
                <hr/>
                </div>
                <div className="column10 prefix1">
                <h2 className="txt-center">World Health Organization (WHO)</h2>
                
                <h4>GIS specialist/data manager - GOARN, Kambia, Sierra Leone (01.2015 - 02.2015)</h4>
                <ul>
                <li>Developed and managed a custom surveillance system for the Ebola outbreak in Kambia District</li>
                <li>Trained international and national staff in the use of the Kambian Ebola surveillance system</li>
                <li>Geocoded relevant outbreak data (alerts, cases, border crossings) and mapped them for use by the epidemiological team and in situation reports</li>
                </ul>
                
                <h4>Biostatistician - Mortality and Burden of Disease, Geneva, Switzerland (04.2011 - 11.2011)</h4>
                <ul>
                <li>Collected cause of death data from multiple national cause of death registries into a database and calculated avoidable mortality estimates for disease groups over time, comparing trends in high income versus developing countries</li>
                <li>Produced disease prevalence estimates for the Global Burden of Disease project (GBD 2010), most notably for vision loss, micronutrient deficiency, and osteoarthritis for all UN member nations, in all sex/age combinations, from 1990 to 2010</li>
                </ul>
                
                <h4>Biostatistician - Stop TB Department, Boston, USA (06.2010 - 11.2010)</h4>
                <ul>
                <li>Liaised with NGOs from South Africa, Uzbekistan, Bangladesh, and Peru to gain access to MDR-TB datasets, then managed, cleaned, and analysed the datasets</li>
                <li>Provided recommendations for the WHO Guidelines for the Programmatic Management of Drug Resistant Tuberculosis (3rd edition) via multi-cohort survival analyses to determine factors affecting detection of MDR-TB and survival in a programmatic context</li>
                </ul>
                
                </div>
                </div>
                </section>
                </div>
                );
    }
}

export default App;
