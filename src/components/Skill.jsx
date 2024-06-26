import {skillText} from "@/constants/index"

export default function Skill() {
  return (
    <section id="skill">
    <div class="skill__inner">
      <div class="skill__title">
        <h2>Challenge <em>나의 도전</em></h2>
      </div>
      <div class="skill__desc">
      {skillText.map((skill, index)=>(
             <div key={index}>
                <span>{ index + 1 }.</span>
                <h3>{ skill.title }</h3>
                <p>{ skill.desc }</p>
             </div>
          ))}       
      </div>
    </div>
  </section>
  )
}
