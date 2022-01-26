import React, { Component } from "react";
import ReactDOM from "react-dom";
import Faq from "react-faq-component";
import './page.css';
import './Faq.css';

const data = {
    rows: [
      {
        title: "1. MOU를 맺지 않은 대학에서 지원이 가능한가요?",
        content:
          "계절학기 학점교류 과목으로, KAIST와 MOU를 맺은 국내 및 해외 대학생을 대상으로 지원을 받습니다. 따라서 KAIST와 MOU 되어있지 않은 학교는 지원 대상에 포함되지 않습니다."
      },
      {
        title: "2. 휴학생 또는 졸업학기인데 지원이 가능한가요? (KAIST 및 타 대학 모두 해당)",
        content:
          "휴학생이나 졸업학기는 수강신청이 불가능하여, 수강신청하지 않고 학점 부여 없이 청강생으로 지원 가능합니다. 지원은 홈페이지의 '지원하기'에서 동일하게 지원 가능하고, 따로 수강신청 절차는 없습니다. 캠프의 모든 활동은 일반 참가생과 동일하지만, 성적 발급은 되지않습니다. 비용은 청강료 5만원과 기숙사비(35만원 내외)가 있습니다."
      },
      {
        title: "3. 캠프 초기에 1~2일 정도 빠지게 되는데 지원 가능한가요?",
        content: "몰입캠프의 기본 취지는 자율적 몰입입니다. 팀원과 협업하여 프로젝트를 해야 하기 때문에 일요일을 제외하고는 가급적 빠지지 않는 것을 권고합니다. 또한 몰입캠프는 초기가 매우 중요하기 때문에 초기에 1~2일을 빠지게 된다면, 캠프를 따라가기 힘들 수도 있음을 말씀드립니다."
      },
      {
        title: "4. 캠프 중간에 2~3일 정도 빠지게 되는데 지원 가능한가요?",
        content:
          "계절학기 학점교류 과목으로, KAIST와 MOU를 맺은 국내 및 해외 대학생을 대상으로 지원을 받습니다. 따라서 KAIST와 MOU 되어있지 않은 학교는 지원 대상에 포함되지 않습니다."
      },
      {
        title: "5. 앱 개발 경험이 없는데 지원 가능한가요?",
        content:
        "앱 개발 경험만 가지고 참가 여부를 판단하지 않기 때문에 앱 개발 경험이 없어도 지원 가능합니다."
      },
      {
        title: "6. 프로그래밍 능력이 어느 정도 필요한가요?",
        content: "프로그래밍 능력은 컴퓨터 전공 2학년 정도의 수준 이상을 권장하지만, 프로그래밍 능력만으로 참가자를 선정하지 않기 때문에, 스스로 열심히 할 수 있는 의지가 있으면 가능합니다."
      },
      {
        title: "7. 모집 마감 후에 추가 지원 가능한가요?",
        content:
          "모집 마감 후에는 추가 지원은 받지 않습니다. 모집 기간이 지났다면, 다음 학기 개설 시에 지원해 주세요."
      },
      {
        title: "8. 불참자가 발생하여, 공석이 생긴다면 참가 가능한가요?",
        content:
          "불참자에 대비하여, 예비후보자를 미리 선정하고, 공석은 예비후보자에서 채워지기 때문에, 추가 참가는 어렵습니다. 예비후보자는 참가생 결과 발표 시 같이 안내됩니다."
      },
      {
        title: "9. 개인 노트북을 지참해야 하나요? 최소 사양은 무엇인가요?",
        content: "캠프 기간 동안 실습에 사용할 노트북은 개인 지참입니다. OS종류(윈도우,맥)는 관계 없습니다. 최소사양은 윈도우10 64bit, MacOS10.14, RAM 8G, CPU i5이상, 권장사양은 RAM 16G 이상입니다."
      },
      {
        title: "10. 장병규 의장님은 왜 몰입캠프를 운영하나요?",
        content:
          "장병규 운영자는, 본인이 KAIST 학부생일 때, 유관 동아리와 주변 환경의 영향으로 인하여, 프로그래밍 아르바이트 및 집중적인 프로그래밍 활동 등으로 크게 성장한 경험을 가지고 있습니다. 후학들에게 해당 경험을 전하고 싶은 마음으로 몰입캠프를 운영 중입니다."
      }
    ]
  };
  
  const styles = {
    bgColor: 'white',
    titleTextColor: "black",
    rowTitleColor: "black",
    rowContentPaddingBottom: "10px",
    rowContentPaddingLeft: "10px",
    rowContentPaddingRight: "10px",
    rowContentColor: 'grey',
  };
  
  const config = {
    animate: true,
    tabFocus: true
  };
  
  export default class FAQ extends Component {
    render() {
      return (
        <div className ='faq margintop'> FAQ
        <div className = 'left box'>
          <div class="px-5 md:px-64 lg:px-96 ">
            <Faq data={data} styles={styles} config={config} />
          </div>
        </div>
        </div>
      );
    }
  }





