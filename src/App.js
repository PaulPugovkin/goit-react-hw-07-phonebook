import { useSelector } from 'react-redux';

import Section from './Components/Section';
import AddForm from './Components/AddForm';
import UserPhoneBook from './Components/UserPhonebook';
import Filter from './Components/Filter';

function App() {
    const { items } = useSelector(state => state.contacts);

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
