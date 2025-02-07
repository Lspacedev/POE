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
      <div>
        <div>
          <h4>
            <FaLocationDot />
            Location:
          </h4>{" "}
          The Innovation Hub
        </div>
        <div>
          <h4>
            <MdEmail />
            Email:
          </h4>{" "}
          tshepompogeng83@gmail.com
        </div>
        <div>
          <h4>
            <FaPhone />
            Phone Number:{" "}
          </h4>
          079 161 6960
        </div>
        <div>
          <h4>
            <MdDateRange />
            Date:
          </h4>{" "}
          13/01/2025
        </div>
      </div>
    </div>
  );
}

export default Cover;
