import React from 'react';

export default function SkillContainer({ img, name, desc }) {
  return (
    <div>
      {img && (
        <div>
          <img src={img} alt='' />
        </div>
      )}
      <span>{name}</span>
      {desc && <button>설명</button>}
    </div>
  );
}
