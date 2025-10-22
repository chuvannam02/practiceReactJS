/**
 * @Project: learn-react
 * @Author: CHUNAM
 * @Date: 9/9/2025
 * @Time: 9:31 PM
 * @File: Contact.ts
 */
import SkeletonImage from "../../_utilities/common/SkeletonImage";
import ScrollSpyDemo from "../../_utilities/ScrollSpyDemo";
import "./Contact.scss";

const Contact: React.FC = () => {
  return (
    <div>
      <h3>Contact</h3>
      <div className="container" style={{ margin: "auto" }}>
        <SkeletonImage
          src="https://picsum.photos/400/300"
          alt="demo"
          width={400}
          height={300}
        />
      </div>
      <div className="pulse">+</div>
      <ScrollSpyDemo />
    </div>
  );
};

export default Contact;
