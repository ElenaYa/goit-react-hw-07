import { useDispatch} from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "./redux/contactsOps";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import toast, { Toaster } from 'react-hot-toast';

export default function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className="containerApp">
      <h1 className="titleApp">Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      <Toaster />
    </div>
  );
}

