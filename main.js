window.addEventListener('DOMContentLoaded',()=>{
let video = document.querySelector('video')
let playstatus = document.querySelector('.player')
const lines = document.querySelectorAll('.line')
let menu = document.querySelector('.menubtn')
let menu_cont = document.querySelector('.menu_cont')
let others = Array.from(document.querySelectorAll('.menutext')).filter((e,i)=>i<4)
console.log(others)
let tracks = Array.from(document.querySelectorAll('audio'))
const permanentelements = [playstatus, menu]
let currenttype = null


others.forEach((e,i)=>e.addEventListener('click',(event)=> newplayer(event, 'other', i)))
tracks.forEach(e=> e.addEventListener('ended',()=>{
  others.forEach(el=>el.style.setProperty('--color', 'white'))
}))

let interval = false;

     let play_elements = [video, playstatus]
     play_elements.forEach(e=>
      e.addEventListener('click', (event)=>{newplayer(event)
        pshide(event)})
     )
          
      window.addEventListener('keydown', (event)=>newplayer(event,undefined,currenttype))
      window.addEventListener('mousemove', pshide)
      


      function newplayer ({type,code}, song, tracknumber){
        
        console.log( currenttype )

        
        console.log(type,code,song, currenttype, tracknumber )
        if (song ||typeof tracknumber == 'number') {
          audioplayer(type, code, tracknumber)
        }
        else {
          videoplayer(type, code)
        }      

     
      }
      function audioplayer(type,code,tracknumber){
        if (!tracks || code != 'Space' && type == 'keydown') return
        console.log('ap')
        others.forEach(e=>e.style.setProperty('--color', 'white'))
        // rgba(156,163,240,0.78)
        if (tracks[tracknumber].paused) {
          pshide()
          video.pause()
          playstatus.style.setProperty('--ps', 'url(./noun-play-6054301.svg) center / contain no-repeat')
          tracks[tracknumber].play()
          others[tracknumber].style.setProperty('--color','rgba(156,163,240,0.78)')
          if (typeof currenttype != 'number') currenttype = tracknumber
          console.log(currenttype + 123)
          playstatus.style.setProperty('--ps', 'url(./noun-pause-2731843.svg) center / contain no-repeat')

        }
        else {
          console.log('ap pause')
          pshide()
          tracks[tracknumber].pause()
          playstatus.style.setProperty('--ps', 'url(./noun-play-6054301.svg) center / contain no-repeat')

        }
        tracks.forEach((e,i)=>{
          console.log(e,i)
          if (i !== tracknumber) tracks[i].pause()}
        )
      }

      function videoplayer(type,code){
        console.log('vp')
        if (currenttype != 'v') currenttype = 'v'
        if (!video || code != 'Space' && type == 'keydown') return
        if (video.paused) {
          pshide()
          video.play() 
          tracks.forEach((e,i)=>{
            console.log(e,i)
            e.pause()}
          )
          playstatus.style.setProperty('--ps', 'url(./noun-pause-2731843.svg) center / contain no-repeat')
        } else {
          pshide()
          video.pause() 
          playstatus.style.setProperty('--ps', 'url(./noun-play-6054301.svg) center / contain no-repeat')
         }
      }
    

      function pshide(){
        
        clearTimeout(interval);
        permanentelements.forEach(e=>
    e.style.setProperty('--opacity', 1))
    interval = setTimeout(() => {
      permanentelements.forEach(e=>
        e.style.setProperty('--opacity', 0))
        interval = null;
    }, 3000);
      }
      console.log(video)

      menu.addEventListener('click', menuactive)

      function menuactive(){
        console.log(lines)
        menu_cont.classList.toggle('menu_onscreen')
        lines.forEach((e,i)=>e.classList.toggle(`line${i+1}_active`))
      }
      })

      