openBtn.onclick = () => navMenu.classList.add('open')

closeBtn.onclick = () => navMenu.classList.remove('open')

navMenu.onclick = e => {
  if (e.target.tagName === 'A') {
    navMenu.classList.remove('open')
  }
}
