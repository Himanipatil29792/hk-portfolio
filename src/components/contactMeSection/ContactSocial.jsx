
import SingleContactSocial from './SingleContactSocial'
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const ContactSocial = ({}) => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/himani-jayesh-patil-959465a0/" rel="noopener noreferrer" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/Himanipatil29792" Icon={FiGithub} />
      {/* <SingleContactSocial link="#" Icon={FaInstagram} /> */}
      <SingleContactSocial link="https://wa.me/9403386226" Icon={FaWhatsapp} />
    </div>
  )
}

export default ContactSocial;