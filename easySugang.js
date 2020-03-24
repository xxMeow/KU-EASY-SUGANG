var courses = [
  ["COSE331", "00"],
  ["COSE471", "01"]
];

function easySugang(courses) {
  for (let course of courses) {
    let courseNumber = course[0];
    let courseClass = course[1];
    let url = `https://sugang.korea.ac.kr/SugangAction.jsp?cour_cd_1=${courseNumber}&cour_cls_2=${courseClass}&cour_div_3=10`;

    fetch(url)
      .then(data => data.text())
      .then(data => {
        data.includes("save")
          ? console.log(
              `%c🙉 ${courseNumber}-${courseClass} ` + "%c수강신청 성공 ^__^",
              "font-weight: bold;",
              "color: green; font-weight: bold;"
            )
          : console.log(
              `%c🙊 ${courseNumber}-${courseClass} ` + "%c수강신청 실패 ㅠㅠ",
              "font-weight: bold;",
              "color: red; font-weight: bold;"
            );
      });
  }
}

// 수강신청 함수 실행
var count = 0;
var countMax = 60;
var repeat = setInterval(function() {
  console.log(`${count}번째 시도..`);
  easySugang(courses);
  count ++;
  if (count === countMax) {
    clearInterval(repeat);
  }
}, 500);
