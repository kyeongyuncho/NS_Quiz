# 2026 익산 NS푸드페스타 식생활 퀴즈 기본틀

## GitHub Pages에 올리기
1. 압축을 풀고 폴더 안의 index.html, style.css, questions.js, app.js, assets 폴더를 GitHub 저장소 최상위에 올립니다.
2. 저장소 Settings → Pages → Deploy from a branch → main / (root) → Save를 선택합니다.
3. 표시되는 Pages 주소로 접속합니다. 기존 퀴즈를 유지하려면 별도 저장소에 올리세요.

index.html을 더블클릭해도 동작합니다. Firebase, 설치, 빌드가 필요 없습니다.

## 수정하기
- 문항·보기·정답·해설: questions.js
- 첫 번째 보기 정답은 answer: 0, 두 번째는 1, 세 번째는 2입니다.
- 기관 공식 로고: assets/org-logo.png 파일을 넣고 questions.js의 ORG_LOGO를 'assets/org-logo.png'로 설정합니다. 현재 기관명으로 표시합니다.
- 메인 문구와 화면 구성: index.html
- 색상·글자 크기·배치 등 디자인: style.css
- 퀴즈 진행과 결과 팝업 동작: app.js
- 3문항 기준 기본틀입니다. 문항 수를 바꾼다면 메인의 '3문항' 문구도 수정하세요.

## 운영 범위
답변은 현재 화면 메모리에서만 처리합니다. 새로고침·재참여 시 초기화됩니다.
개인정보 수집, 순위, 중앙 기록, 참여 집계, 중복 참여 방지는 없습니다.
결과 화면은 안내용이며 서버 검증 또는 경품 지급 증빙 시스템이 아닙니다.
예시 문항은 캠페인 담당자가 확정 문항으로 변경 후 사용하세요.

## 이미지 출처
NS푸드페스타 2026 공식 포스터: 한국관광공사 대한민국 구석구석에 운영기관이 제출한 축제 자료.
https://korean.visitkorea.or.kr/kfes/detail/fstvlDetail.do?fstvlCntntsId=8fb04e99-48b4-47ed-b1bc-0b94e824b098
이미지는 원본 그대로 사용했습니다. 행사 워드마크는 원본 포스터에 포함되어 있습니다.
식생활안전관리원의 공식 CI는 임의로 재현하지 않았으며 기관명으로 표시합니다.
