
let video = document.querySelector('video')
let playstatus = document.querySelector('.player')
// let psflag = false
let interval = false
      window.addEventListener('click', ()=>{player()
        pshide()})
      window.addEventListener('keydown', player)
      window.addEventListener('mousemove', pshide)
      // playstatus.addEventListener('click', player)
      function player({type,code}){
        console.log(type)
        if (!video || code != 'Space' && type == 'keydown') return
        if (video.paused) {
          pshide()
          video.play()
          playstatus.style.setProperty('--ps', 'url(./noun-pause-2731843.svg) center / contain no-repeat')
        } else {
          pshide()
          video.pause() 
          playstatus.style.setProperty('--ps', 'url(./noun-play-6054301.svg) center / contain no-repeat')
         }
      }

      function pshide(){
        // if (!psflag && !interval){
        //   psflag = true
        //   playstatus.style.setProperty('--opacity', 1)
        //   interval = setTimeout(()=>{
        //     playstatus.style.setProperty('--opacity', 0)
        //     psflag = false
        //     clearTimeout(interval)
        //     interval = false
        //     console.log(interval, psflag)
        //   },3000)
        // } else if (interval) {
        //   clearTimeout(interval)
        //   interval = setTimeout(()=>{
        //     playstatus.style.setProperty('--opacity', 0)
        //     psflag = false
        //     clearTimeout(interval)
        //     interval = false

        //     console.log(interval, psflag)
        //   },3000)
        // }
        clearTimeout(interval);
    playstatus.style.setProperty('--opacity', 1);
    interval = setTimeout(() => {
        playstatus.style.setProperty('--opacity', 0);
        interval = null;
    }, 3000);
      }
      console.log(video)