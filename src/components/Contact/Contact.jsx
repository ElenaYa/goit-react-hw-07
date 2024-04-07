import { FaPhoneAlt, FaUser } from "react-icons/fa";
import css from './Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import toast from 'react-hot-toast';

export default function Contact ({ data: { name, number, id }}) {

    const dispatch = useDispatch();

    const handleDelete = () => {
      dispatch(deleteContact(id))
      .unwrap()
      .then(() => {
        toast.success("Contact is deleted");
      })
      .catch(() => {
        toast.error("Failed. Try again!");
      });
    };

  return (
    <div className={css.contactContainer}>
        <p className={css.text}>
          <FaUser className={css.icon}/>
          {name}
        </p>
        <p>
          <FaPhoneAlt className={css.icon} />
          {number}
        </p>
     
          <button type="button" className={css.button} 
          onClick={handleDelete}>Delete</button>
    </div>
  );
}