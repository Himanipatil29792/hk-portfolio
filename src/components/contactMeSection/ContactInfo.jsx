import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
<div className="flex flex-col gap-4">
<a href="mailto:himani.patil29792@gmail.com">
      <SingleInfo text="himani.patil29792@gmail.com" Image={HiOutlineMail} />
      </a>
      <SingleInfo text="+91 9403386226" Image={FiPhone} />
      <SingleInfo text="Mumbai, Maharashtra" Image={IoLocationOutline} />
    </div>
  )
}

export default ContactInfo