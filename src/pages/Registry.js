import portrait from '../images/registry.jpg'

export default function Registry() {
    return (
        <div className='eucalyptus-bg'>
            <div id='registry-content'>
                <img id='registry-img' src={portrait} alt='picture of Luke and Taylor'/>
                <p className='text'>
                    We are so excited as we prepare to start our lives together as husband and wife.
                    The love and support we have received from our friends and family has been truly
                    overwhelming, and we are so grateful for each and every one of you. Your presence
                    at our wedding is the greatest gift of all, and we hope you are able to celebrate this
                    joyous occasion with us. If you would like to contribute to our home, we have
                    set up a wedding registry on Amazon. Thank you for being a part of this special time in our lives.
                    <br/>
                    <br/>
                    With love,
                    <br/>
                    <br/>
                    The Nethercotts
                </p>
                <div id='registry-buttons'>
                    <a href='https://www.amazon.com/wedding/registry/25JNW0YU3NZJM'>
                        <button id='amazon'>Amazon Registry</button> 
                    </a>
                    <a href='https://venmo.com/u/luke_nethercott'>
                        <button id='venmo'>Venmo</button> 
                    </a>
                </div>
            </div>
        </div>
    )
  }