import React from 'react'
import "./Details.css";
function Details() {
  return (
    <div className='detail-body'>
          <div class="detail-container">
      <h2>User Details</h2>
      <form>
      
        <div class="form-row">
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input type="text" id="fullName" name="fullName" required />
          </div>
          <div class="form-group">
            <label for="address">Address</label>
            <input type="text" id="address" name="address" required />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="city">City</label>
            <input type="text" id="city" name="city" required />
          </div>
          <div class="form-group">
            <label for="country">Country</label>
            <input type="text" id="country" name="country" required />
          </div>
        </div>
        <div class="form-group">
          <label for="age">Age</label>
          <input type="number" id="age" name="age" required />
        </div>
        <div class="form-group">
          <label for="gender">Gender</label>
          <select id="gender" name="gender" required>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div class="form-group">
          <label for="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" required />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>

   
        <div class="form-group">
          <label for="panCard">PAN Card Number</label>
          <input type="text" id="panCard" name="panCard" required />
        </div>

        <div class="form-group">
          <label for="creditCardNumber">Credit Card Number</label>
          <input
            type="text"
            id="creditCardNumber"
            name="creditCardNumber"
            required
          />
        </div>
        <div class="form-group">
          <label for="creditCardExpiry">Credit Card Expiry Date</label>
          <input
            type="month"
            id="creditCardExpiry"
            name="creditCardExpiry"
            required
          />
        </div>
        <div class="form-group">
          <label for="creditCardCVV">Credit Card CVV</label>
          <input type="text" id="creditCardCVV" name="creditCardCVV" required />
        </div>

      
        <div class="form-group">
          <label for="debitCardNumber">Debit Card Number</label>
          <input
            type="text"
            id="debitCardNumber"
            name="debitCardNumber"
            required
          />
        </div>
        <div class="form-group">
          <label for="debitCardExpiry">Debit Card Expiry Date</label>
          <input
            type="month"
            id="debitCardExpiry"
            name="debitCardExpiry"
            required
          />
        </div>
        <div class="form-group">
          <label for="debitCardCVV">Debit Card CVV</label>
          <input type="text" id="debitCardCVV" name="debitCardCVV" required />
        </div>

        <div class="form-group">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    </div>
  )
}

export default Details
