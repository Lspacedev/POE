import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

function Cover() {
  return (
    <div className="Cover">
      <h1 className="header1" id="cover">
        Cover
      </h1>
      <div className="cover-text">
        <div>
          <h3>
            <FaLocationDot />
            Location:
          </h3>{" "}
          <p> The Innovation Hub</p>
        </div>
        <div>
          <h3>
            <MdEmail />
            Email:
          </h3>{" "}
          <p>tshepompogeng83@gmail.com</p>
        </div>
        <div>
          <h3>
            <FaPhone />
            Phone Number:{" "}
          </h3>
          <p> 079 161 6960</p>
        </div>
        <div>
          <h3>
            <MdDateRange />
            Date:
          </h3>{" "}
          <p>13/01/2025</p>
        </div>
      </div>
    </div>
  );
}

export default Cover;
