import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getContacts } from './redux/actions';
import Section from './Components/Section';
import AddForm from './Components/AddForm';
import UserPhoneBook from './Components/UserPhonebook';
import Filter from './Components/Filter';

function App() {
    const dispatch = useDispatch();

    const { items } = useSelector(state => state.contacts);

    useEffect(() => {
        dispatch(getContacts());
    }, []);

    return (
        <Section>
            <AddForm />

            {items.length > 0 ? (
                <>
                    <Filter />
                    <UserPhoneBook />
                </>
            ) : (
                <h2>There is no contacts</h2>
            )}
        </Section>
    );
}

export default App;
