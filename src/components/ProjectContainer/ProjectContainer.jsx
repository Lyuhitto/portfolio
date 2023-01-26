import React from 'react';
import SkillContainer from './../SkillContainer/SkillContainer';

export default function ProjectContainer({
  img,
  tag,
  title,
  date,
  skills,
  features,
  links,
}) {
  return (
    <div>
      <div>
        <img src={img} alt='' />
      </div>
      <span>{tag}</span>
      <h2>{title}</h2>
      <span>{date}</span>
      <ul>
        {skills.map((skill, key) => (
          <li key={key}>
            <SkillContainer img={skill.img} name={skill.name} />
          </li>
        ))}
      </ul>
      <ul>
        {features.map((feature, key) => (
          <li key={key}>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      <ul>
        {links.map((link, key) => (
          <li key={key}>
            <a href={link.url} target='_blank' rel='noopener noreferrer'>
              <div>
                <img src={link.img} alt={link.alt} />
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
