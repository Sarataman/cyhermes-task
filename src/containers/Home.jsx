import React from "react";

export default function Home() {
  return (
    <div>
      <div class="row bg-height">
        <div class="col-4 dark-bg">
          <div>
            <a href="http://" target="_blank" rel="noopener noreferrer">
              <img src="" alt="logo" />
            </a>
          </div>
          <div>
            <ul>
            <li class="active dark-li">
                <a href="#">Trial & Pricing</a>
                {/* <!-- icon --> */}
              </li>
              <li class="dark-li">
                  <a href="#">Payment Method</a>
              </li>
              <li class="dark-li">
                <a href="#" class="yellow-txt">_ _ _ _ _</a>
              </li>
              <li class="dark-li">
                <a href="#">Get started...</a>
              </li>
            </ul>
          </div>
          <div>
            <div class="large-txt">
              <img src="" alt="quotation-mark"/>
            </div>
            <div class="quote-txt">
              <p>
                Success is not final; failure is not fatal; it is the courage to
                continue that counts.
              </p>
              <h6>-Winston Churchill</h6>
            </div>
            <br/>
          </div>
        </div>
        <div class="col-8">
          <div class="row">
            <div class="col-6">
              <p>HEY, TERRY</p>
              <h3 class="black-txt">
                Start your
                <span>
                  <i class="yellow-txt">30 days</i>
                </span>
                Trial
              </h3>
              <h5>Select your preferred package below</h5>
            </div>
            <div class="col-6">
              <br />
              <br />
              <h5>NGN</h5>
              <h3 class="blue-txt">1,999,999</h3>
              <h3>
                Total
                <span class="small-txt">(EXCLUDES VAT)</span>
              </h3>
            </div>
          </div>

          <div class="row">
            <div class="col-6 card card-1">
              <br/>
              <br/>
              <br/>
              <h6 class="yellow-txt">Starts From</h6>
              <h5>NGN</h5>
              <h4 class="black-txt">5,999,999.99</h4>
              <p>per annum</p>
              <br />
              <h3 class="black-txt">Premium</h3>
              <p>
                100 Users
                <span class="yellow-txt dot">.</span>
                All Modules
              </p>
            </div>
            <div class="col-6 bg-lightblue card">
              {/* <!-- check icon --> */}
              <h3 class="blue-txt">Basic</h3>
              <p class="grey-txt">
                <b>30 days trails</b> on our premium app features and features
              </p>
              <br />
              <p>
                INCLUDES
                <span class="blue-txt">- - - - - - - - - - - - - - -</span>
                <ul>
                  <li>- 25 Users</li>
                  <li>- All modules and features</li>
                  <li>- Unlimited committees</li>
                  <li>- Unlimited roles creation</li>
                </ul>
              </p>
            </div>
          </div>

          <div>
            <h3>
              <b>Add more users</b>
            </h3>
            <p>
              <b>99,999 </b>per user</p>
              <div class="slide-container">
                <span>0</span>
                <input type="range" min="0" max="1000" value="100" class="slider" name="foo"/>
                <output for="foo" onforminput="value = foo.valueAsNumber;"></output>
                <span>1000</span>
              </div>
          </div>

          <div>
            <h5>
              -- ALL MODULES
              ----------------------------------------------------------------------
            </h5>
            <div class="row">
              <li class="col flex flex-active">
                <img src="icons/gp.png" alt="icon" class="icons"/>
                <p>Governance Portal</p>
              </li>
              <li class="col flex">
                <img src="icons/cu.png" alt="icon" class="icons"/>
                <p>Cooperate Unlimited</p>
              </li>
              <li class="col flex">
                <img src="icons/cd.png" alt="icon" class="icons"/>
                <p>Contract Domain</p>
              </li>
              <li class="col flex">
                <img src="icons/ir.png" alt="icon" class="icons"/>
                <p>Investment Retailers</p>
              </li>
              <li class="col flex">
                <img src="icons/dp.png" alt="icon" class="icons"/>
                <p>Domain Portfolio</p>
              </li>
              <li class="col flex">
                <img src="icons/mb.png" alt="icon" class="icons"/>
                <p>Minute book</p>
              </li>
              <li class="col flex">
                <img src="icons/rp.png" alt="icon" class="icons"/>
                <p>Repairing Tool</p>
              </li>
              <li class="col flex">
                <img src="icons/ar.png" alt="icon" class="icons"/>
                <p>Attendance Register</p> 
              </li>
            </div>
            <p class="blue-txt">- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  </p>
          </div>

          <div className="row btn">
            <button class="white-bg col">Go back</button>
            <button class="yellow-bg col">Continue</button>
          </div>
          <br/>
        </div>
      </div>
    </div>
  );
}
