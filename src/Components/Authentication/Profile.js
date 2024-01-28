import { useState, useEffect, useContext } from 'react';
import { useNavigate, NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
import './Profile.css'

const Profile = () => {
    const { user } = useContext(UserContext);
    const [profileImage, setProfileImage] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('')
    const [plan, setPlan] = useState('Free')

    useEffect(() => {
        if (user) {
            setProfileImage(user.profile_image_url);
            setFirstName(user.first_name);
            setLastName(user.last_name);
            setEmail(user.email);
        }
    }, [user])

    return (
        <>
            <div>
                <p className='section-title'>Account Details</p>
                <div className="account-details d-flex ">
                <div className="profile-image-column d-flex">
                    <img src={profileImage} alt="profile-image" />
                </div>
                <div className="account-details-grid">
                    <p><span>First Name </span> <br />{firstName}</p>
                    <p><span> Last Name </span> <br />{lastName}</p>
                    <p><span>Email </span> <br />{email}</p>
                    <p><span>Plan </span> <br />{plan}</p>
                </div>
                </div>
                <button className='update-button'>
                    Update
                </button>
            </div>
        </>
    );
};

export default Profile;