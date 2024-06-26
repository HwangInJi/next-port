import { introText} from "@/constants/index"
import Image from "next/image"


export default function Intro() {
  return (
    <section id="intro">
      <div class="intro__inner">
        <h2 class="intro__title">{introText.title}</h2>
        <div class="intro__lines" aria-hidden="true">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
        <div class="intro__text">
          <div class="text">
            <div>{introText.desc[0]}</div>
            <div>{introText.desc[1]}</div>
            <div>{introText.desc[2]}</div>
          </div>
          <div class="img">
            <Image src={introText.img} alt={introText.title} width={300} height={300} />
          </div>
          </div>
        <div class="intro__lines" aria-hidden="true">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
      </div>
    </section>
  )
}
