// 캠페인 문항을 이 파일에서 수정하세요.
// answer: 첫 번째 보기 = 0, 두 번째 보기 = 1, 세 번째 보기 = 2
const QUESTIONS = [
  {
    question: '식약처가 매년 발간하는 삼삼한 밥상은 무엇일까요?',
    options: [
      '다이어트 도시락 가이드',
      '나트륨·당류 저감 레시피북',
      '해외 요리 레시피북',
    ],
    answer: 1,
    explanation: '삼삼한 밥상은 나트륨·당류를 줄인 건강 레시피를 담은 식약처 발간 레시피북입니다!',
  },
  {
    question: '삼삼하다는 어떤 맛을 뜻할까요?',
    options: [
      '아주 짜고 단 맛',
      '조금 싱거운 듯하면서 맛있는 맛',
      '아무 맛도 안나는 무미',
    ],
    answer: 1,
    explanation: '삼삼하나는 간이 세지 않고 슴슴하면서 재료 본연의 맛이 살아있는 건강한 맛이에요!',
  },
  {
    question: '삼삼한 밥상이 맛을 내는 비결은?',
    options: [
      '소금·설탕 듬뿍 추가',
      '인공 조미료 다량 사용',
      '마늘·파 등 천연 재료 활용'
    ],
    answer: 2,
    explanation: '소금 대신 마늘·파 같은 자연 재료로 풍미를 살리는 게 삼삼한 밥상의 비결입니다!',
  },
];

// 공식 기관 로고를 assets/org-logo.png에 넣은 후 경로를 지정하세요.
// 예: const ORG_LOGO = 'assets/org-logo.png';
const ORG_LOGO = 'assets/nifns.png';

const COMPLETION_IMAGE = 'assets/gift.png';
