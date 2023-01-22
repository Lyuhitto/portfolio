import React from 'react';

import { BsGithub } from 'react-icons/bs';
import { SiBlogger } from 'react-icons/si';
import { HiOutlineMail } from 'react-icons/hi';
import { MdUpdate } from 'react-icons/md';

export default function About() {
  return (
    <div>
      <div>
        <h2>도전하고 기록하는</h2>
        <h1>
          김수정<span> 입니다.</span>
        </h1>
        <p></p>
      </div>
      <div>
        <a href='/' target='_blank'>
          <BsGithub />
          깃허브
        </a>
        <a href='/' target='_blank'>
          <SiBlogger />
          블로그
        </a>
        <span>
          <HiOutlineMail />
          이메일
        </span>
        <span>
          <MdUpdate />
          최근 갱신일: 2023/01/22
        </span>
      </div>
    </div>
  );
}
