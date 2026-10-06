// 캠페인 문항을 이 파일에서 수정하세요.
// answer: 첫 번째 보기 = 0, 두 번째 보기 = 1, 세 번째 보기 = 2
const QUESTIONS = [
  {
    question: '식사 전 손을 씻을 때 가장 올바른 방법은?',
    options: [
      '물로만 가볍게 헹군다',
      '비누를 사용해 흐르는 물에 꼼꼼하게 씻는다',
      '수건으로 손을 닦기만 한다',
    ],
    answer: 1,
    explanation: '식사 전에는 비누를 사용해 흐르는 물에 손을 꼼꼼하게 씻어요.',
  },
  {
    question: '건강한 식생활을 위한 습관은 무엇일까요?',
    options: [
      '다양한 식품을 골고루 먹는다',
      '좋아하는 음식만 계속 먹는다',
      '채소는 먹지 않는다',
    ],
    answer: 0,
    explanation: '다양한 식품을 골고루 먹는 습관을 가져요.',
  },
  {
    question: '식품을 구매할 때 확인해야 할 표시는?',
    options: [
      '포장의 색깔만 확인한다',
      '광고 문구만 확인한다',
      '소비기한과 보관방법을 확인한다',
    ],
    answer: 2,
    explanation: '소비기한과 보관방법을 확인하고 표시된 보관방법을 지켜요.',
  },
];

// 공식 기관 로고를 assets/org-logo.png에 넣은 후 경로를 지정하세요.
// 예: const ORG_LOGO = 'assets/org-logo.png';
const ORG_LOGO = 'assets/nifns.png';

const COMPLETION_IMAGE = 'assets/gift.png';
