import React from 'react';
import "./Details.css";
import credit from '../../assets/credit3.jpg';
import credit1 from '../../assets/credit5.jpg';

const Details = () => {
    const style = {
        paddingTop: '30px',
        backgroundImage: `url(${credit})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize:'cover',
        backgroundAttachment:'fixed'
     
      };
  return (
    <div  style={style} className='detail-body'>
        
      <div className="detail-container">
        <h2>User Details</h2>
        <div style={{ display: 'flex', justifyContent: 'center' }} className="form-top-image">
    <img style={{ maxWidth: '300px' }} src={credit1} alt="Credit Card Image" />
</div>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="fullName" required />
            </div>
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" required />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input type="text" id="city" name="city" required />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input type="text" id="country" name="country" required />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input type="number" id="age" name="age" required />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender</label>
            <select id="gender" name="gender" required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="panCard">PAN Card Number</label>
            <input type="text" id="panCard" name="panCard" required />
          </div>
          <div className="form-group">
            <label htmlFor="creditCardNumber">Credit Card Number</label>
            <input type="text" id="creditCardNumber" name="creditCardNumber" required />
          </div>
          <div className="form-group">
            <label htmlFor="creditCardExpiry">Credit Card Expiry Date</label>
            <input type="month" id="creditCardExpiry" name="creditCardExpiry" required />
          </div>
          <div className="form-group">
            <label htmlFor="creditCardCVV">Credit Card CVV</label>
            <input type="text" id="creditCardCVV" name="creditCardCVV" required />
          </div>
          <div className="form-group">
            <label htmlFor="debitCardNumber">Debit Card Number</label>
            <input type="text" id="debitCardNumber" name="debitCardNumber" required />
          </div>
          <div className="form-group">
            <label htmlFor="debitCardExpiry">Debit Card Expiry Date</label>
            <input type="month" id="debitCardExpiry" name="debitCardExpiry" required />
          </div>
          <div className="form-group">
            <label htmlFor="debitCardCVV">Debit Card CVV</label>
            <input type="text" id="debitCardCVV" name="debitCardCVV" required />
          </div>
          <div className="form-group">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Details;
