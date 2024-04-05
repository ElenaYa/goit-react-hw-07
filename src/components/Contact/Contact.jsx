import { FaPhoneAlt, FaUser } from "react-icons/fa";
import css from './Contact.module.css';
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact ({ contact: { name, number, id }}) {

    const dispatch = useDispatch();

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
     
          <button type="button" className={css.button} onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </div>
  );
}