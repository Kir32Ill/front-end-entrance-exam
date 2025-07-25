document.querySelector('#app').innerHTML = `
  <div class="container">
    <!-- Header -->
    <div class="header" style="display: flex; align-items: center; gap: 20px;">
      <!-- Фото -->
      <div class="photo-container" style="position: relative; width: 124px; height: 124px; border-radius: 12px; background: #f0f0f0; overflow: hidden;">
        <img id="photo-preview" src="" alt="Фото" style="width: 100%; height: 100%; object-fit: cover; display: none;" />
        <input type="file" id="photo-upload" accept="image/*" style="position: absolute; inset: 0; opacity: 0; cursor: pointer;" />
        <label for="photo-upload" style="display: flex; align-items: center; justify-content: center; height: 100%; font-size: 14px; color: #666; text-align: center; cursor: pointer;">Загрузить фото</label>
      </div>
      <!-- Имя и должность -->
      <div class="name-job" style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
        <h1 data-key="name" style="font-size: 10px; font-weight:500; margin-left:10px; margin-top:10px" >Hello 👋🏻 I’m</h1>
        <h1 class="editable" data-key="name" contenteditable="true" style="font-size: 14px; margin-top:30px; margin-left:10px; font-weight:600">Иван Иванов</h1>
        <h2 class="editable" data-key="position" contenteditable="true" style="color: #5C5C5C; font-size:12px; margin-top:-20px; margin-left:10px;">Front-end разработчик</h2>
      </div>
      <!-- Языки -->
      <div class="languages">
        <strong>Languages</strong>
        <div class="language">
          <div class="lang-name" contenteditable="true">Russian</div>
          <div class="lang-bar-container">
            <div class="lang-bar"></div>
          </div>
        </div>
        <div class="language">
          <div class="lang-name" contenteditable="true">English</div>
          <div class="lang-bar-container">
            <div class="lang-bar"></div>
          </div>
        </div>
        <div class="language">
          <div class="lang-name" contenteditable="true">German</div>
          <div class="lang-bar-container">
            <div class="lang-bar"></div>
          </div>
        </div>
      </div>
    </div>

    <!-- Блоки Experience и Tools -->
    <div style="display: flex; gap: 20px;">
      <!-- Experience -->
      <div class="experience" style="width: 411px; height: 359px; border-radius: 12px; padding: 12px; gap: 16px; border: 1px solid #eee; font-size:8px">
        <h2>Experience</h2>
        <!-- Вкладка 1 (Most Recent) -->
        <div class="exp-item most-recent" style="width: 387px; height: 76px; border-radius: 10px; padding: 8px; gap: 8px; color: white; display: flex; align-items: flex-start; justify-content: space-between; position: relative; margin-top:20px">
          <!-- Метка "most recent" -->
          <div style="
            position: absolute;
            top: 8px;
            right: 8px;
            width: 61px;
            height: 16px;
            border: 1px solid #7E731266;
            border-radius: 59px;
            color: #DDF163;
            font-size: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0;
            margin: 0;
            font-weight: 500;
            background-color: #7E731266;
          ">
            most recent
          </div>
          <!-- Информация о работе -->
          <div class="exp-info" style="flex: 1; font-size:8px">
            <div class="editable" data-key="exp1-period" contenteditable="true" style="font-size:8px">Jun. 2023 - Present</div>
            <div class="editable" data-key="exp1-role" contenteditable="true" style="font-size:10px">Marketing Manager</div>
            <div class="editable" data-key="exp1-company" contenteditable="true" style="font-size:8px; color:#EBF9F2">Pankayam | Full-time</div>
          </div>
          <!-- Описание в виде списка -->
          <div class="exp-desc" data-key="exp1-desc" style="flex: 1.5; font-size: 8px; margin-top:20px">
            <ul class="editable-list">
              <li>Strategy development and planning of campaigns that promote the business and generate genuine traffic</li>
              <li>SEO Content Creation for Blogs, Website, Social media</li>
            </ul>
          </div>
        </div>
        <!-- Вкладка 2 -->
        <div class="exp-item" style="width: 387px; height: 76px; border-radius: 10px; padding: 8px; gap: 8px;  display: flex; align-items: flex-start; justify-content: space-between;">
          <div class="exp-info" style="flex: 1;">
            <div class="editable" data-key="exp2-period" contenteditable="true" style="font-size:8px">2017 - Present</div>
            <div class="editable" data-key="exp2-role" contenteditable="true" style="font-size:8px">Junior Developer</div>
            <div class="editable" data-key="exp2-company" contenteditable="true" style="font-size:8px">Company B | part-time</div>
          </div>
          <div class="exp-desc" data-key="exp2-desc" style="flex: 1.5; font-size: 8px;">
            <ul class="editable-list">
              <li>Development of internal projects from scratch, product design of brands</li>
              <li>Landing page, webapps and hybrid apps</li>
              <li>Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary</li>
            </ul>
          </div>
        </div>
        <!-- Вкладка 3 -->
        <div class="exp-item" style="width: 387px; height: 76px; border-radius: 10px; padding: 8px; gap: 8px; display: flex; align-items: flex-start; justify-content: space-between;">
          <div class="exp-info" style="flex: 1;">
            <div class="editable" data-key="exp3-period" contenteditable="true" style="font-size:8px">Sep. 2021 - Jun. 2023</div>
            <div class="editable" data-key="exp3-role" contenteditable="true" style="font-size:8px">Intern</div>
            <div class="editable" data-key="exp3-company" contenteditable="true" style="font-size:8px">Company C | intern</div>
          </div>
          <div class="exp-desc" data-key="exp3-desc" style="flex: 1.5; font-size: 8px;">
            <ul class="editable-list">
              <li>Provide administrative support to lawyer and enhance office effectiveness</li>
              <li>Handle communication with clients, witnesses etc.</li>
              <li>repare case briefs and summarize depositions, interrogatories and testimony</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Tools -->
      <div style="width: 124px; height: 359px; border-radius: 12px; background: #F0F0F0; padding: 12px; display: flex; flex-direction: column;">
        <h2 style="font-size: 14px; margin: 0 0 12px;">Tools</h2>
        <div style="width: 76px; height: 308px; margin: 0 auto; display: flex; flex-direction: column; gap: 12px;">
          <!-- Вкладка Design -->
          <div style="width: 76px; height: 111.48px; border-radius: 6px; background: white; padding: 16px 4px; display: flex; flex-direction: column; gap: 16px; align-items: center;">
            <div style="font-size: 5px; color: #FFFFFF; background: black; border-radius:59px; width:30px; height:11px; text-align:center; display: flex; align-items: center; justify-content: center; padding:0; margin:0; white-space: nowrap;">design</div>
            <div style="display: flex; flex-wrap: wrap; gap: 4px; justify-content: center;">
              <img src="https://cdn-icons-png.flaticon.com/128/1320/1320423.png" alt="Figma" style="width: 16px; height: 16px;">
              <img src="https://cdn-icons-png.flaticon.com/128/732/732251.png" alt="Adobe XD" style="width: 16px; height: 16px;">
              <img src="https://cdn-icons-png.flaticon.com/128/1320/1320419.png" alt="Sketch" style="width: 16px; height: 16px;">
              <img src="https://cdn-icons-png.flaticon.com/128/732/732226.png" alt="Photoshop" style="width: 16px; height: 16px;">
            </div>
          </div>
          <!-- Вкладка No-code -->
          <div style="width: 76px; height: 111.48px; border-radius: 6px; background: white; padding: 16px 4px; display: flex; flex-direction: column; gap: 16px; align-items: center;">
            <div style="font-size: 5px; color: #FFFFFF; background: black; border-radius:59px; width:30px; height:11px; text-align:center; display: flex; align-items: center; justify-content: center; padding:0; margin:0;">no-code</div>
            <div style="display: flex; flex-wrap: wrap; gap: 4px; justify-content: center;">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968860.png" alt="Webflow" style="width: 16px; height: 16px;">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968859.png" alt="Framer" style="width: 16px; height: 16px;">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968858.png" alt="Bubble" style="width: 16px; height: 16px;">
              <img src="https://cdn-icons-png.flaticon.com/128/5968/5968857.png" alt="Adalo" style="width: 16px; height: 16px;">
            </div>
          </div>
          <!-- Вкладка AI -->
          <div style="width: 76px; height: 111.48px; border-radius: 6px; background: white; padding: 16px 4px; display: flex; flex-direction: column; gap: 16px; align-items: center;">
            <div style="font-size: 5px; color: #FFFFFF; background: black; border-radius:59px; width:65px; height:11px; text-align:center; display: flex; align-items: center; justify-content: center; padding:0; margin:0; white-space: nowrap;">artificial intelligence</div>
            <div style="display: flex; flex-wrap: wrap; gap: 4px; justify-content: center;">
              <img src="https://cdn-icons-png.flaticon.com/128/102/102702.png" alt="ChatGPT" style="width: 16px; height: 16px;">
              <img src="https://cdn-icons-png.flaticon.com/128/7366/7366007.png" alt="Midjourney" style="width: 16px; height: 16px;">
              <img src="https://cdn-icons-png.flaticon.com/128/7366/7366006.png" alt="DALL-E" style="width: 16px; height: 16px;">
              <img src="https://cdn-icons-png.flaticon.com/128/7366/7366005.png" alt="Stable Diffusion" style="width: 16px; height: 16px;">
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Блоки Education и правый столбец -->
<div style="display: flex; gap: 20px; margin-top: 20px;">
  <!-- Блок Education -->
  <div style="
    width: 268px;
    min-height: 289px;
    border-radius: 12px;
    padding: 12px;
    background: #F0F0F0;
    border: 1px solid #eee;
    font-size: 8px;
  ">
    <h2 style="font-size: 14px; margin: 0 0 12px;">Education</h2>
    <div style="display: flex; flex-wrap: wrap; gap: 12px; height: 230px;">
      <!-- Карточка 1 -->
      <div style="
        width: 105px;
        height: 108px;
        border-radius: 10px;
        background: #28D979;
        padding: 8px;
        display: flex;
        flex-direction: column;
        font-size: 8px;
        gap: 1px;
      ">
        <div class="editable" data-key="edu1-period" contenteditable="true">2017-2022</div>
        <div class="editable" data-key="edu1-degree" contenteditable="true" style="font-weight: 600;">Law</div>
        <div class="editable" data-key="edu1-tags" contenteditable="true" style="color: #EBF9F2; font-size: 8px;">#law #legalStudied #contracts</div>
        <div class="editable" data-key="edu1-university" contenteditable="true" style="color: #5C5C5C;">University of Kerala</div>
      </div>
      <!-- Карточка 2 -->
      <div style="
        width: 105px;
        height: 108px;
        border-radius: 10px;
        background: #F9F9F9;
        padding: 8px;
        display: flex;
        flex-direction: column;
        font-size: 8px;
        gap: 1px;
      ">
        <div class="editable" data-key="edu2-period" contenteditable="true">2015-2017</div>
        <div class="editable" data-key="edu2-degree" contenteditable="true" style="font-weight: 600;">Pre-Law</div>
        <div class="editable" data-key="edu2-tags" contenteditable="true" style="color: #149063; font-size: 8px;">#prelaw #basics #jurisprudence</div>
        <div class="editable" data-key="edu2-university" contenteditable="true" style="color: #5C5C5C;">City College</div>
      </div>
      <!-- Карточка 3 -->
      <div style="
        width: 105px;
        height: 108px;
        border-radius: 10px;
        background: #F9F9F9;
        padding: 8px;
        display: flex;
        flex-direction: column;
        font-size: 8px;
        gap: 1px;
      ">
        <div class="editable" data-key="edu3-period" contenteditable="true">2013-2015</div>
        <div class="editable" data-key="edu3-degree" contenteditable="true" style="font-weight: 600;">Humanities</div>
        <div class="editable" data-key="edu3-tags" contenteditable="true" style="color: #149063; font-size: 8px;">#humanities #history #philosophy</div>
        <div class="editable" data-key="edu3-university" contenteditable="true" style="color: #5C5C5C;">Central High School</div>
      </div>
    </div>
  </div>

  <!-- Правый столбец: Interests и Let's chat -->
  <div style="
    max-width: 250px;
    display: flex;
    flex-direction: column;
    gap: 20px;
  ">
    <!-- Interests -->
    <div style="
      width: 90%;
      height: 177px;
      border-radius: 12px;
      padding: 12px;
      background: #F0F0F0;
      display: flex;
      flex-direction: column;
      gap: 1px;
    ">
      <h2 style="font-size: 14px; margin: 0 0 12px;">Interests</h2>
      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        <div style="width: 47px; height: 23px; border-radius: 40px; background: #F9F9F9; padding: 4px 10px; font-size: 10px; text-align: center;">branding</div>
        <div style="width: 47px; height: 23px; border-radius: 40px; background: #F9F9F9; padding: 4px 10px; font-size: 10px; text-align: center;">design</div>
        <div style="width: 50px; height: 23px; border-radius: 40px; background: #F9F9F9; padding: 4px 10px; font-size: 10px; text-align: center;">photography</div>
        <div style="width: 50px; height: 23px; border-radius: 40px; background: #F9F9F9; padding: 4px 10px; font-size: 10px; text-align: center;">artificial intelligence</div>
        <div style="width: 55px; height: 23px; border-radius: 40px; background: #F9F9F9; padding: 4px 10px; font-size: 10px; text-align: center;">illustration</div>
        <div style="width: 55px; height: 23px; border-radius: 40px; background: #F9F9F9; padding: 4px 10px; font-size: 10px; text-align: center;">typography</div>
        <div style="width: 55px; height: 23px; border-radius: 40px; background: #F9F9F9; padding: 4px 10px; font-size: 10px; text-align: center;">social networks</div>
        <div style="width: 47px; height: 23px; border-radius: 40px; background: #F9F9F9; padding: 4px 10px; font-size: 10px; text-align: center;">research</div>
        <div style="width: 47px; height: 23px; border-radius: 40px; background: #F9F9F9; padding: 4px 10px; font-size: 10px; text-align: center;">drone pilot</div>
        <div style="width: 47px; height: 23px; border-radius: 40px; background: #F9F9F9; padding: 4px 10px; font-size: 10px; text-align: center;">games</div>
      </div>
    </div>

    <!-- Let's chat -->
    <div style="
      width: 90%;
      height: 92px;
      border-radius: 12px;
      padding: 12px;
      background: #000;
      color: white;
      display: flex;
      flex-direction: column;
      gap: 4px;
    ">
      <p style="font-size: 14px; margin: 0; margin-bottom: 10px">Let's chat! I'm ready to work on exciting projects</p>
      <p style="font-size: 8px; margin: 0;">srkarthik.designscape@gmail.com</p>
    </div>
  </div>
</div>

    <!-- Кнопка -->
    <button id="download-btn" >Скачать PDF</button>
  </div>
`
//Редактирование текста
function initEditableFields() {
  const editableElements = document.querySelectorAll('.editable')

  editableElements.forEach((el) => {
    const key = el.dataset.key
    const savedText = localStorage.getItem(key)
    if (savedText) el.textContent = savedText

    el.addEventListener('click', () => {
      if (el.querySelector('textarea')) return //Уже в режиме редактирования

      const currentText = el.textContent.trim()

      const textarea = document.createElement('textarea')
      textarea.value = currentText
      textarea.style.border = 'none'
      textarea.style.borderBottom = '2px solid #646cff'
      textarea.style.background = 'transparent'
      textarea.style.outline = 'none'
      textarea.style.font = 'inherit'
      textarea.style.fontSize = 'inherit'
      textarea.style.color = 'inherit'
      textarea.style.resize = 'none'
      textarea.style.width = '100%'
      textarea.style.height = 'auto'
      textarea.style.overflow = 'hidden'
      textarea.style.lineHeight = '18px'
      textarea.style.minHeight = '18px'
      textarea.style.maxHeight = '90px'
      textarea.style.display = 'block'
      textarea.style.whiteSpace = 'pre-wrap'
      textarea.style.wordWrap = 'break-word'
      textarea.rows = 1

      const autoResize = () => {
        textarea.style.height = 'auto'
        textarea.style.height = Math.min(textarea.scrollHeight, 90) + 'px'
        textarea.rows = 1
      }

      autoResize()

      //Сохранение
      const save = () => {
        const newText = textarea.value.trim()
        el.textContent = newText
        localStorage.setItem(key, newText)
      }

      textarea.addEventListener('blur', save)
      textarea.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          e.preventDefault()
          save()
        }
      })

      textarea.addEventListener('input', autoResize)

      el.textContent = ''
      el.appendChild(textarea)
      textarea.focus()
      autoResize()
    })
  })
}
initEditableFields()

//Загрузка фото
document
  .getElementById('photo-upload')
  .addEventListener('change', function (e) {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = function (e) {
        const img = document.getElementById('photo-preview')
        img.src = e.target.result
        img.style.display = 'block'
        img.style.opacity = 1
      }
      reader.readAsDataURL(file)
    }
  })

//Изменение уровня языка
document.querySelectorAll('.lang-bar-container').forEach((container) => {
  container.addEventListener('click', function (e) {
    const rect = this.getBoundingClientRect()
    const x = e.clientX - rect.left
    const max = 168
    const newWidth = Math.min(max, Math.max(0, x))
    this.querySelector('.lang-bar').style.width = `${newWidth}px`
  })
})

//Ripple-эффект на кнопке
const downloadBtn = document.getElementById('download-btn')
downloadBtn.addEventListener('click', function (e) {
  const ripple = document.createElement('span')
  ripple.classList.add('ripple')

  const rect = this.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  ripple.style.width = ripple.style.height = `${size}px`
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`

  this.appendChild(ripple)
  setTimeout(() => ripple.remove(), 600)
})

//Счётчик кликов на кнопке
let counter = 0
function updateButtonText() {
  downloadBtn.textContent = `Скачать PDF (${counter})`
}
downloadBtn.addEventListener('click', () => {
  counter++
  updateButtonText()
})
updateButtonText()

//PDF-экспорт
document.getElementById('download-btn').addEventListener('click', () => {
  const element = document.querySelector('.container')
  if (typeof html2pdf === 'undefined') {
    console.error(
      'Ошибка: html2pdf не загружена. Проверь подключение скрипта в index.html'
    )
  }
  const opt = {
    margin: 0.5,
    filename: 'resume.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: {
      scale: 3,
      useCORS: true,
      allowTaint: true,
      logging: true,
      width: element.scrollWidth,
      height: element.scrollHeight,
      scrollY: -window.scrollY,
      scrollX: -window.scrollX,
    },
    jsPDF: {
      unit: 'mm',
      format: 'a4',
      orientation: 'portrait',
      putOnlyUsedFonts: true,
    },
    pagebreak: { mode: 'avoid-all' },
  }

  html2pdf().set(opt).from(element).save()
})
