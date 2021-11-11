const textarea=document.querySelector("textarea")
voiceList=document.querySelector("select")
speechBtn=document.querySelector("button")
let synth=speechSynthesis
isSpeaking=true

voices()

function voices(){
      for(let voice of synth.getVoices()){
            let selected=voice.name ==="Google US English"?"Selected": ""
            let option=`<option value="${voice.name}" ${selected}>${voice.name} (${voice.lang})</option>`
            voiceList.insertAdjacentHTML("beforeend",option)
      }
}
synth.addEventListener("voiceschanged",voices)

function textToSpeech(text){
      let utternance=new SpeechSynthesisUtterance(text);
      for(let voice of synth.getVoices()){
            if(voice.name===voiceList.value){
                  utternance.voice=voice
            }
      }
      speechSynthesis.speak(utternance)
}


speechBtn.addEventListener("click",e=>{
      e.preventDefault();
      if(textarea.value!==""){
            if(!synth.speaking)
                  textToSpeech(textarea.value)
            if(textarea.value.length>80){
                  setInterval(()=>{
                        if(!synth.speaking&&!isSpeaking){
                              isSpeaking=true
                              speechBtn.innerText="Convert to Speech"
                        }
                  },500)
                  if(isSpeaking){
                        synth.resume()
                        isSpeaking=false
                        speechBtn.innerText="Pause Speech"
                  }
                  else{
                        synth.pause()
                        isSpeaking=true
                        speechBtn.innerText="Resume Speech"
                  }
                  
            }
            else{
                  speechBtn.innerText="Convert to Speech" 
            }
            
      
            
      }
})
