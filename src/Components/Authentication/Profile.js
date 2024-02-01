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
    const [gender, setGender] = useState('')
    const [date_of_birth, setDateOfBirth] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('')


    useEffect(() => {
        if (user) {
            console.log(user)
            setProfileImage(user.profile_image_url);
            setFirstName(user.first_name);
            setLastName(user.last_name);
            setEmail(user.email);
            setGender(user.gender);
            setDateOfBirth(user.date_of_birth)
            setHeight(user.height);
            setWeight(user.weight);
            setAge(user.age)
        }
    }, [user])

    return (
        <>
            <div>
                <p className='section-title'>Account Details</p>
                <div>
                <div className="account-details  ">
                    <div className="profile-image-column d-flex ">
                        <img src={profileImage} alt="profile-image" />
                    </div>
                    <div className="details-column ">
                        <p><span>First Name </span> <br />{firstName}</p>
                        <p><span>Last Name </span> <br />{lastName}</p>

                    </div>
                    <div className="details-column">
                    <p><span>Email </span> <br />{email}</p>
                    <p><span>Plan </span> <br />{email}</p>
                    </div>                  
                    </div>
                    <div className="update-button-column">
                        <button className='update-button profile-button'>
                            Update
                        </button>
                    </div>
                </div>


                <hr />
                <div className="health-metrics">
                    <p className="section-title">Health Metrics</p>
                    <div className="health-metrics-details">
                        <table className="metrics-table">
                            <thead>
                                <tr>
                                    <th>Gender</th>
                                    <th>Date of Birth</th>
                                    <th>Height</th>
                                    <th>Weight</th>
                                    <th>Age</th>
                                    <th>BMI</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>male</td>
                                    <td>10/10/1990</td>
                                    <td>150 cm</td>
                                    <td>70 kgs</td>
                                    <td>20 years</td>
                                    <td>20</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='edit-button-section'>
                        <button className="edit-button profile-button">
                            Edit
                        </button>
                        </div>
                    </div>


                </div>
            </div>
        </>
    );
};

export default Profile;