import { useContext, useEffect } from 'react';
import PersonalCardInfo from '../../components/shared/personalCardInfo';

import '../../css/landingStyle.css';
import { getMe } from '../../services/auth';
import AuthContext from '../../contexts/auth/auth-context';

const listPersonalInfo = [
  {
    studentID: '20120290',
    studentName: 'Trần Khánh Hoàng',
    dateOfBirth: '13/07/2002',
    major: 'Kĩ thuật phần mềm',
  },
  {
    studentID: '20120291',
    studentName: 'Trần Khánh Hoàng',
    dateOfBirth: '13/07/2002',
    major: 'Kĩ thuật phần mềm',
  },
];

export default function Landing() {
  const {setUser} = useContext(AuthContext)

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const {data: user} = await getMe()
        setUser(user.data)
      } catch (err) {
        console.log(err)
      }
    }
    fetchUser()
  }, [])

  return (
    <div className="listCardInfo">
      {listPersonalInfo.map((personalInfo) => (
        <div key={personalInfo.studentID} className="itemCardInfo">
          <PersonalCardInfo data={personalInfo} />
        </div>
      ))}
    </div>
  );
}
