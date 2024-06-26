import {contactText} from "@/constants/index"

export default function Contact() {
  return (
    <section id="contact">
    <div class="contact__inner">
      <h2 class="contact__title">Contact</h2>
      <div class="contact__lines" aria-hidden="true">
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
        <span class="line"></span>
      </div>
      <div class="contact__text">
        
          <div class="text">
          {contactText.map((cont, key)=>(
            <div key={key}>
              <a target="_blank">{ cont.title }</a>
            </div>
                    ))}
          </div>

      </div>
      <div class="contact__lines bottom" aria-hidden="true">
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
