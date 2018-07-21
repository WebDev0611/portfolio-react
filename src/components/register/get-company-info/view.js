import React, { Component } from 'react';
import { 
  Row,
  Nav,
  Grid,
  NavItem ,
  FormGroup,
  FormControl, 
  ControlLabel
} from 'react-bootstrap';
import Modal from './modal';

import './styles.scss';

class GetCompanyInfo extends Component {

  state = {
    value: '',
    activeTab: 'company',
    modalIsOpen: false
  }

  getValidationState = () => {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
    return null;
  }

  handleChange = e => {
    this.setState({ value: e.target.value });
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  isActive = tab => {
    return tab == this.state.activeTab ? 'active' : '';
  }

  smoothScroll = top => {
    const handler = setInterval(() => {
      if(window.scrollY > top || window.scrollY + window.innerHeight >= document.body.offsetHeight) {
        clearInterval(handler);
      } else {
        window.scrollTo(0, window.scrollY + 15);
      }
    }, 1);
  }

  setActive = activeTab => {
    this.setState({ activeTab });
    const offsetTop = document.getElementById(activeTab).offsetTop;
    this.smoothScroll(offsetTop);
  }

  componentDidMount() {
    const tabEl = document.getElementById('nav-tab');
    const offsetTop = tabEl.offsetTop;
    window.addEventListener('scroll', () => {
      if(window.scrollY >= offsetTop) {
        tabEl.style.position = 'fixed';
        tabEl.style.top = '0px';
        tabEl.style.background = 'white';
        tabEl.style.width = '100%';
      } else {
        tabEl.style.position = 'initial';
      }
    })
  }

  render() {
    const { modalIsOpen } = this.state;

    return (
      <Grid id="company-container">
        <Row className="header">
          <div><img src={'/images/client-icon@3x.png'} alt="client-image"/></div>
          <h2>Complete Registration</h2>
        </Row>
        <Row>
          <p className="notice">Please complete the full registration to begin using<br/> Importist.</p>
        </Row>
        <Row id="nav-tab">
          <Nav bsStyle="tabs" activeKey="1">
            <NavItem href="#" className={this.isActive('company')} onClick={() => { this.setActive('company') }}>
              Company
            </NavItem>
            <NavItem href="#" className={this.isActive('details')} onClick={() => { this.setActive('details') }}>
              Company Details
            </NavItem>
            <NavItem href="#" className={this.isActive('user')} onClick={() => { this.setActive('user') }}>
              User Information
            </NavItem>
          </Nav>
        </Row>
        <div className="company-info" id="company">
          <Row><h2>Company</h2></Row>
          <Row>
            <FormGroup
              validationState={this.getValidationState()}
            >
              <ControlLabel className="form-label">Company Name</ControlLabel>
              <FormControl
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Row>
          <Row>
            <ControlLabel className="form-label logo">Logo</ControlLabel>
          </Row>
          <Row>
            <button><img src={'/images/photo-icon@3x.png'} alt="upload-photo" /> Upload Photo</button>
            <p>Max file size: 512kb</p>
          </Row>
          <Row className="img-upload">
            
          </Row>
          <Row>
            <FormGroup
              className="line-1"
              validationState={this.getValidationState()}
            >
              <ControlLabel className="form-label">Address Line 1</ControlLabel>
              <FormControl
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup
              className="line-2"
              validationState={this.getValidationState()}
            >
              <ControlLabel className="form-label">Address Line 2</ControlLabel>
              <FormControl
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup
              className="zip"
              validationState={this.getValidationState()}
            >
              <ControlLabel className="form-label">Zip / Postal Code</ControlLabel>
              <FormControl
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup
              className="country"
              validationState={this.getValidationState()}
            >
              <ControlLabel className="form-label">Country</ControlLabel>
              <FormControl
                className="form-control"
                componentClass="select"
                value={this.state.value}
                onChange={this.handleChange}>

                <option value="select"></option>
                <option value="AF">Afghanistan</option>
                <option value="AX">Åland Islands</option>
                <option value="AL">Albania</option>
                <option value="DZ">Algeria</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="AI">Anguilla</option>
                <option value="AQ">Antarctica</option>
                <option value="AG">Antigua and Barbuda</option>
                <option value="AR">Argentina</option>
                <option value="AM">Armenia</option>
                <option value="AW">Aruba</option>
                <option value="AU">Australia</option>
                <option value="AT">Austria</option>
                <option value="AZ">Azerbaijan</option>
                <option value="BS">Bahamas</option>
                <option value="BH">Bahrain</option>
                <option value="BD">Bangladesh</option>
                <option value="BB">Barbados</option>
                <option value="BY">Belarus</option>
                <option value="BE">Belgium</option>
                <option value="BZ">Belize</option>
                <option value="BJ">Benin</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia, Plurinational State of</option>
                <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                <option value="BA">Bosnia and Herzegovina</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option>
                <option value="CO">Colombia</option>
                <option value="KM">Comoros</option>
                <option value="CG">Congo</option>
                <option value="CD">Congo, the Democratic Republic of the</option>
                <option value="CK">Cook Islands</option>
                <option value="CR">Costa Rica</option>
                <option value="CI">Côte d'Ivoire</option>
                <option value="HR">Croatia</option>
                <option value="CU">Cuba</option>
                <option value="CW">Curaçao</option>
                <option value="CY">Cyprus</option>
                <option value="CZ">Czech Republic</option>
                <option value="DK">Denmark</option>
                <option value="DJ">Djibouti</option>
                <option value="DM">Dominica</option>
                <option value="DO">Dominican Republic</option>
                <option value="EC">Ecuador</option>
                <option value="EG">Egypt</option>
                <option value="SV">El Salvador</option>
                <option value="GQ">Equatorial Guinea</option>
                <option value="ER">Eritrea</option>
                <option value="EE">Estonia</option>
                <option value="ET">Ethiopia</option>
                <option value="FK">Falkland Islands (Malvinas)</option>
                <option value="FO">Faroe Islands</option>
                <option value="FJ">Fiji</option>
                <option value="FI">Finland</option>
                <option value="FR">France</option>
                <option value="GF">French Guiana</option>
                <option value="PF">French Polynesia</option>
                <option value="TF">French Southern Territories</option>
                <option value="GA">Gabon</option>
                <option value="GM">Gambia</option>
                <option value="GE">Georgia</option>
                <option value="DE">Germany</option>
                <option value="GH">Ghana</option>
                <option value="GI">Gibraltar</option>
                <option value="GR">Greece</option>
                <option value="GL">Greenland</option>
                <option value="GD">Grenada</option>
                <option value="GP">Guadeloupe</option>
                <option value="GU">Guam</option>
                <option value="GT">Guatemala</option>
                <option value="GG">Guernsey</option>
                <option value="GN">Guinea</option>
                <option value="GW">Guinea-Bissau</option>
                <option value="GY">Guyana</option>
                <option value="HT">Haiti</option>
                <option value="HM">Heard Island and McDonald Islands</option>
                <option value="VA">Holy See (Vatican City State)</option>
                <option value="HN">Honduras</option>
                <option value="HK">Hong Kong</option>
                <option value="HU">Hungary</option>
                <option value="IS">Iceland</option>
                <option value="IN">India</option>
                <option value="ID">Indonesia</option>
                <option value="IR">Iran, Islamic Republic of</option>
                <option value="IQ">Iraq</option>
                <option value="IE">Ireland</option>
                <option value="IM">Isle of Man</option>
                <option value="IL">Israel</option>
                <option value="IT">Italy</option>
                <option value="JM">Jamaica</option>
                <option value="JP">Japan</option>
                <option value="JE">Jersey</option>
                <option value="JO">Jordan</option>
                <option value="KZ">Kazakhstan</option>
                <option value="KE">Kenya</option>
                <option value="KI">Kiribati</option>
                <option value="KP">Korea, Democratic People's Republic of</option>
                <option value="KR">Korea, Republic of</option>
                <option value="KW">Kuwait</option>
                <option value="KG">Kyrgyzstan</option>
                <option value="LA">Lao People's Democratic Republic</option>
                <option value="LV">Latvia</option>
                <option value="LB">Lebanon</option>
                <option value="LS">Lesotho</option>
                <option value="LR">Liberia</option>
                <option value="LY">Libya</option>
                <option value="LI">Liechtenstein</option>
                <option value="LT">Lithuania</option>
                <option value="LU">Luxembourg</option>
                <option value="MO">Macao</option>
                <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                <option value="MG">Madagascar</option>
                <option value="MW">Malawi</option>
                <option value="MY">Malaysia</option>
                <option value="MV">Maldives</option>
                <option value="ML">Mali</option>
                <option value="MT">Malta</option>
                <option value="MH">Marshall Islands</option>
                <option value="MQ">Martinique</option>
                <option value="MR">Mauritania</option>
                <option value="MU">Mauritius</option>
                <option value="YT">Mayotte</option>
                <option value="MX">Mexico</option>
                <option value="FM">Micronesia, Federated States of</option>
                <option value="MD">Moldova, Republic of</option>
                <option value="MC">Monaco</option>
                <option value="MN">Mongolia</option>
                <option value="ME">Montenegro</option>
                <option value="MS">Montserrat</option>
                <option value="MA">Morocco</option>
                <option value="MZ">Mozambique</option>
                <option value="MM">Myanmar</option>
                <option value="NA">Namibia</option>
                <option value="NR">Nauru</option>
                <option value="NP">Nepal</option>
                <option value="NL">Netherlands</option>
                <option value="NC">New Caledonia</option>
                <option value="NZ">New Zealand</option>
                <option value="NI">Nicaragua</option>
                <option value="NE">Niger</option>
                <option value="NG">Nigeria</option>
                <option value="NU">Niue</option>
                <option value="NF">Norfolk Island</option>
                <option value="MP">Northern Mariana Islands</option>
                <option value="NO">Norway</option>
                <option value="OM">Oman</option>
                <option value="PK">Pakistan</option>
                <option value="PW">Palau</option>
                <option value="PS">Palestinian Territory, Occupied</option>
                <option value="PA">Panama</option>
                <option value="PG">Papua New Guinea</option>
                <option value="PY">Paraguay</option>
                <option value="PE">Peru</option>
                <option value="PH">Philippines</option>
                <option value="PN">Pitcairn</option>
                <option value="PL">Poland</option>
                <option value="PT">Portugal</option>
                <option value="PR">Puerto Rico</option>
                <option value="QA">Qatar</option>
                <option value="RE">Réunion</option>
                <option value="RO">Romania</option>
                <option value="RU">Russian Federation</option>
                <option value="RW">Rwanda</option>
                <option value="BL">Saint Barthélemy</option>
                <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                <option value="KN">Saint Kitts and Nevis</option>
                <option value="LC">Saint Lucia</option>
                <option value="MF">Saint Martin (French part)</option>
                <option value="PM">Saint Pierre and Miquelon</option>
                <option value="VC">Saint Vincent and the Grenadines</option>
                <option value="WS">Samoa</option>
                <option value="SM">San Marino</option>
                <option value="ST">Sao Tome and Principe</option>
                <option value="SA">Saudi Arabia</option>
                <option value="SN">Senegal</option>
                <option value="RS">Serbia</option>
                <option value="SC">Seychelles</option>
                <option value="SL">Sierra Leone</option>
                <option value="SG">Singapore</option>
                <option value="SX">Sint Maarten (Dutch part)</option>
                <option value="SK">Slovakia</option>
                <option value="SI">Slovenia</option>
                <option value="SB">Solomon Islands</option>
                <option value="SO">Somalia</option>
                <option value="ZA">South Africa</option>
                <option value="GS">South Georgia and the South Sandwich Islands</option>
                <option value="SS">South Sudan</option>
                <option value="ES">Spain</option>
                <option value="LK">Sri Lanka</option>
                <option value="SD">Sudan</option>
                <option value="SR">Suriname</option>
                <option value="SJ">Svalbard and Jan Mayen</option>
                <option value="SZ">Swaziland</option>
                <option value="SE">Sweden</option>
                <option value="CH">Switzerland</option>
                <option value="SY">Syrian Arab Republic</option>
                <option value="TW">Taiwan, Province of China</option>
                <option value="TJ">Tajikistan</option>
                <option value="TZ">Tanzania, United Republic of</option>
                <option value="TH">Thailand</option>
                <option value="TL">Timor-Leste</option>
                <option value="TG">Togo</option>
                <option value="TK">Tokelau</option>
                <option value="TO">Tonga</option>
                <option value="TT">Trinidad and Tobago</option>
                <option value="TN">Tunisia</option>
                <option value="TR">Turkey</option>
                <option value="TM">Turkmenistan</option>
                <option value="TC">Turks and Caicos Islands</option>
                <option value="TV">Tuvalu</option>
                <option value="UG">Uganda</option>
                <option value="UA">Ukraine</option>
                <option value="AE">United Arab Emirates</option>
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>
                <option value="UM">United States Minor Outlying Islands</option>
                <option value="UY">Uruguay</option>
                <option value="UZ">Uzbekistan</option>
                <option value="VU">Vanuatu</option>
                <option value="VE">Venezuela, Bolivarian Republic of</option>
                <option value="VN">Viet Nam</option>
                <option value="VG">Virgin Islands, British</option>
                <option value="VI">Virgin Islands, U.S.</option>
                <option value="WF">Wallis and Futuna</option>
                <option value="EH">Western Sahara</option>
                <option value="YE">Yemen</option>
                <option value="ZM">Zambia</option>
                <option value="ZW">Zimbabwe</option>
              </FormControl>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup
              className="telephone"
              validationState={this.getValidationState()}
            >
              <ControlLabel className="form-label">Telephone</ControlLabel>
              <FormControl
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup
              className="website"
              validationState={this.getValidationState()}
            >
              <ControlLabel className="form-label">Website</ControlLabel>
              <FormControl
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Row>
          <hr />
        </div>


        <div className="company-details" id="details">
          <Row><h2>Company Details</h2></Row>
          <Row>
            <FormGroup className="about">
              <ControlLabel className="form-label">About</ControlLabel>
              <FormControl
                className="form-control about-control"
                type="text" />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup
              className="staff"
              validationState={this.getValidationState()}
            >
              <ControlLabel className="form-label">Staff</ControlLabel>
              <FormControl
                className="form-control"
                componentClass="select"
                onChange={this.handleChange}>

                <option value="select"></option>
                <option value="other">1 - 10</option>
                <option value="other">11 - 50</option>
                <option value="other">51 - 100</option>
                <option value="other">101 - 500</option>
                <option value="other">500+</option>
              </FormControl>
            </FormGroup>
            <FormGroup
              className="revenue"
              validationState={this.getValidationState()}
            >
              <ControlLabel className="form-label">Revenue</ControlLabel>
              <FormControl
                className="form-control"
                componentClass="select"
                onChange={this.handleChange}>

                <option value="select"></option>
                <option value="other">$0 - 1M</option>
                <option value="other">$1M - $5M</option>
                <option value="other">$5M - $20M</option>
                <option value="other">$20M - $100M</option>
                <option value="other">$100M - $1B</option>
                <option value="other">$1B+</option>
              </FormControl>
            </FormGroup>
          </Row>
          <Row>
            <FormGroup
              className="established"
              validationState={this.getValidationState()}
            >
              <ControlLabel className="form-label">Established</ControlLabel>
              <FormControl
                className="form-control"
                componentClass="select"
                onChange={this.handleChange}>

                <option value="select"></option>
                <option value="2013">2018</option>
                <option value="2013">2017</option>
                <option value="2013">2016</option>
                <option value="2013">2015</option>
                <option value="2013">2014</option>
                <option value="2013">2013</option>
                <option value="2012">2012</option>
                <option value="2011">2011</option>
                <option value="2010">2010</option>
                <option value="2009">2009</option>
                <option value="2008">2008</option>
                <option value="2007">2007</option>
                <option value="2006">2006</option>
                <option value="2005">2005</option>
                <option value="2004">2004</option>
                <option value="2003">2003</option>
                <option value="2002">2002</option>
                <option value="2001">2001</option>
                <option value="2000">2000</option>
                <option value="1999">1999</option>
                <option value="1998">1998</option>
                <option value="1997">1997</option>
                <option value="1996">1996</option>
                <option value="1995">1995</option>
                <option value="1994">1994</option>
                <option value="1993">1993</option>
                <option value="1992">1992</option>
                <option value="1991">1991</option>
                <option value="1990">1990</option>
                <option value="1989">1989</option>
                <option value="1988">1988</option>
                <option value="1987">1987</option>
                <option value="1986">1986</option>
                <option value="1985">1985</option>
                <option value="1984">1984</option>
                <option value="1983">1983</option>
                <option value="1982">1982</option>
                <option value="1981">1981</option>
                <option value="1980">1980</option>
                <option value="1979">1979</option>
                <option value="1978">1978</option>
                <option value="1977">1977</option>
                <option value="1976">1976</option>
                <option value="1975">1975</option>
                <option value="1974">1974</option>
                <option value="1973">1973</option>
                <option value="1972">1972</option>
                <option value="1971">1971</option>
                <option value="1970">1970</option>
                <option value="1969">1969</option>
                <option value="1968">1968</option>
                <option value="1967">1967</option>
                <option value="1966">1966</option>
                <option value="1965">1965</option>
                <option value="1964">1964</option>
                <option value="1963">1963</option>
                <option value="1962">1962</option>
                <option value="1961">1961</option>
                <option value="1960">1960</option>
                <option value="1959">1959</option>
                <option value="1958">1958</option>
                <option value="1957">1957</option>
                <option value="1956">1956</option>
                <option value="1955">1955</option>
                <option value="1954">1954</option>
                <option value="1953">1953</option>
                <option value="1952">1952</option>
                <option value="1951">1951</option>
                <option value="1950">1950</option>
                <option value="1949">1949</option>
                <option value="1948">1948</option>
                <option value="1947">1947</option>
                <option value="1946">1946</option>
                <option value="1945">1945</option>
                <option value="1944">1944</option>
                <option value="1943">1943</option>
                <option value="1942">1942</option>
                <option value="1941">1941</option>
                <option value="1940">1940</option>
                <option value="1939">1939</option>
                <option value="1938">1938</option>
                <option value="1937">1937</option>
                <option value="1936">1936</option>
                <option value="1935">1935</option>
                <option value="1934">1934</option>
                <option value="1933">1933</option>
                <option value="1932">1932</option>
                <option value="1931">1931</option>
                <option value="1930">1930</option>
                <option value="1929">1929</option>
                <option value="1928">1928</option>
                <option value="1927">1927</option>
                <option value="1926">1926</option>
                <option value="1925">1925</option>
                <option value="1924">1924</option>
                <option value="1923">1923</option>
                <option value="1922">1922</option>
                <option value="1921">1921</option>
                <option value="1920">1920</option>
                <option value="1919">1919</option>
                <option value="1918">1918</option>
                <option value="1917">1917</option>
                <option value="1916">1916</option>
                <option value="1915">1915</option>
                <option value="1914">1914</option>
                <option value="1913">1913</option>
                <option value="1912">1912</option>
                <option value="1911">1911</option>
                <option value="1910">1910</option>
                <option value="1909">1909</option>
                <option value="1908">1908</option>
                <option value="1907">1907</option>
                <option value="1906">1906</option>
                <option value="1905">1905</option>
              </FormControl>
            </FormGroup>
          </Row>
          <hr />
        </div>


        <div className="user-info" id="user">
          <Row><h2>User Information</h2></Row>
          <Row>
            <FormGroup
              className="full-name"
              validationState={this.getValidationState()}
            >
              <ControlLabel className="form-label">Full Name</ControlLabel>
              <FormControl
                className="form-control"
                type="text"
                placeholder="Gerald Clemmer"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup
              className="position"
              validationState={this.getValidationState()}
            >
              <ControlLabel className="form-label">Position</ControlLabel>
              <FormControl
                className="form-control"
                type="text"
                onChange={this.handleChange} />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup
              className="mail"
              validationState={this.getValidationState()}
            >
              <ControlLabel className="form-label">Email</ControlLabel>
              <FormControl
                className="form-control"
                type="text"
                placeholder="gerald@janlosert.com"
                onChange={this.handleChange}
              />
            </FormGroup>
            <FormGroup
              className="tel"
              validationState={this.getValidationState()}
            >
              <ControlLabel className="form-label">Telephone</ControlLabel>
              <FormControl
                className="form-control"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </Row>
          <Row>
            <FormGroup>
              <FormControl
                className="form-control sub"
                type="button"
                onClick={this.openModal}
                value="Save & Continue" />
            </FormGroup>
          </Row>
        </div>
        { modalIsOpen && 
          <Modal openModal={ modalIsOpen }/>
        }
      </Grid>
    );
  }
}

export default GetCompanyInfo;
