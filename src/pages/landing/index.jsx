import PersonalCardInfo from "../personalCardInfo";

import "../../css/landingStyle.css"

const listPersonalInfo = [{
  studentID: '20120290',
  studentName: 'Trần Khánh Hoàng',
  dateOfBirth: '13/07/2002',
  major: 'Kĩ thuật phần mềm'
},
{
  studentID: '20120291',
  studentName: 'Trần Khánh Hoàng',
  dateOfBirth: '13/07/2002',
  major: 'Kĩ thuật phần mềm'
}];

export default function Landing() {
  return (
    <div className="listCardInfo">
      {listPersonalInfo.map((personalInfo) =>
        <div key={personalInfo.studentID} className='itemCardInfo'>
          <PersonalCardInfo data={personalInfo}/>
        </div>
      )}

    </div>
  );
}
