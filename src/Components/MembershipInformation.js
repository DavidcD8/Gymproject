import React from 'react';
import '../App.css';

function MembershipInformation() {
  return (
    <section className="MembershipInformation-section">
      <div className="membership-info-container">
        <h2 id="membership-table-header">Membership Information</h2>
        <table className="membership-table">
          <thead>
            <tr>
              <th></th>
              <th className='membership-table-heading-basic'>Basic</th>
              <th className='membership-table-heading-standard'>Standard</th>
              <th className='membership-table-heading-premium'>Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Use of Any facilities</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Free In-Club Fitness Training</td>
              <td>✓</td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Exclusive App Workouts</td>
              <td></td>
              <td>✓</td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Free Wifi</td>
              <td></td>
              <td></td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Premium Perks: Partner Rewards & Discounts</td>
              <td></td>
              <td></td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Bring a Guest Anytime</td>
              <td></td>
              <td></td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Use of Massage Chairs</td>
              <td></td>
              <td></td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Use of HydroMassage™</td>
              <td></td>
              <td></td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Use of Tanning</td>
              <td></td>
              <td></td>
              <td>✓</td>
            </tr>
            <tr>
              <td>Use of Total Body Enhancement</td>
              <td></td>
              <td></td>
              <td>✓</td>
            </tr>
            <tr>
              <td>50% Off Select Drinks</td>
              <td></td>
              <td></td>
              <td>✓</td>
            </tr>
            <tr>
              <td></td>
              <td><button>Select Basic</button></td>
              <td><button>Select Standard</button></td>
              <td><button>Select Premium</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default MembershipInformation;
