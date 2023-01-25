import React from 'react';
import SkillContainer from './../../components/SkillContainer/SkillContainer';

export default function SkillAndStack() {
  return (
    <div>
      <header>
        <h2>기술 스택</h2>
        <span>포트폴리오에 사용한 기술</span>
      </header>
      {stackList.map((stack, key) => (
        <div key={key}>
          <h3>{stack.title}</h3>
          <ul>
            {stack.item.map((i, k) => (
              <li key={k}>
                <SkillContainer img={i.img} name={i.name} desc={i.desc} />
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
const stackList = [
  { title: '라이브러리', item: [{ name: '리액트' }] },
  {
    title: '마크업',
    item: [
      { name: 'HTML', img: 'img' },
      { name: 'CSS', img: 'img' },
      { name: 'Post CSS' },
      { name: 'TailWind' },
    ],
  },
  {
    title: '언어',
    item: [
      { name: '자바스크립트' },
      { name: '타입스크립트' },
      { name: '파이썬' },
      { name: 'PHP' },
    ],
  },
  { title: '개발 도구', item: [{ name: 'Git' }, { name: 'Github' }] },
  {
    title: '자격증',
    item: [
      { name: '컴퓨터 활용능력 1급 (필기)' },
      { name: '네트워크 관리사 2급' },
      { name: '토익 R/C 805점' },
      { name: 'JLPT 일본어 능력 시험 1급' },
      { name: 'ITパスポート(일본)', desc: 'ITパスポート, IT 패스포트란, ' },
    ],
  },
];
